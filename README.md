# AI Roadmap Generator

This is an AI Roadmap Generator application powered by [Platformatic AI-warp](https://github.com/platformatic/ai-warp) and React (Vite). [Platformatic AI-warp](https://github.com/platformatic/ai-warp) handles authentication via [GitHub OAuth2](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) and processes AI prompts, while the React.js frontend application provides a user-friendly interface for generating and viewing roadmaps.

## Getting Started 
### Prerequisites

Platformatic supports 
- macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).
- [Node.js](https://nodejs.org/) v20.6.0
- Docker 

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/iamfortune/Roadmap-Generator.git
cd Roadmap-Generator 
```

1. **Install dependencies:**

In the root directory, install dependencies:

```sh
npm install
```

## Running the Application
### Using Docker

1. **Build the Docker image:**

```sh
docker build -t roadmap-generator:latest .
```

2. **Run the Docker container:**

```sh 
docker run --env-file .env -p 3042:3042 roadmap-generator:latest
```

This will start the application, and you can access it at `http://localhost:3042`.

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
VITE_AI_URL=http://your-ai-service-url
PLT_AI_PROVIDER=
PLT_AI_MODEL=
PLT_AI_API_KEY=
```

For more information, refer to the [AI Warp documentation](https://github.com/platformatic/ai-warp?tab=readme-ov-file#documentation) and my article on the [Platformatic blog](https://blog.platformatic.dev/building-ai-applications-with-platformatic-ai-warp).


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.


