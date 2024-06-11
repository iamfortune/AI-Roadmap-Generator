import { useEffect, useState } from "react";
import "./App.css";
import { useFetchPrompt, handlePromptSubmit } from "./utils/utils.js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const { prompt, setPrompt, response, setResponse, fetchPrompt, loading, setLoading } = useFetchPrompt();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchPrompt();
  }, [fetchPrompt]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    const username = query.get('username');
    const fullname = query.get('fullname');
    const image = query.get('image');
    const email = query.get('email');

    if (token) {
      setIsAuthenticated(true);
      setUser({ username, fullname, image, email });
    }
  }, []);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const submit = () => handlePromptSubmit(prompt, setResponse, setLoading);

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_AI_URL}/login/github`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-lg">
        {!isAuthenticated ? (
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Platformatic AI Roadmap Generator</h1>
            <button
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 mb-4"
              onClick={handleLogin}
            >
              Login with GitHub
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-xl font-bold mb-2" htmlFor="prompt-text">
                Platformatic Roadmap Generator
              </label>
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="prompt-text"
                cols="60"
                rows="3"
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Get your AI roadmap here..."
              />
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
                onClick={submit}
                disabled={loading}
              >
                {loading ? "Generating..." : "Get Roadmap"}
              </button>
            </div>
            {!loading && response && (
              <div className="p-4 bg-gray-700 rounded-lg mt-4 w-full max-h-96 overflow-y-auto">
                <div id="messages" className="prose prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {response}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
