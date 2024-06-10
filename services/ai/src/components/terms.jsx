import { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const TermsOfService = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentDate = new Date().toLocaleString();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-2 text-center">
        <button onClick={openModal} className="text-sm">
          Terms of Service
        </button>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Terms of Service"
        className="modal bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto my-10"
        overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="mb-4">Welcome to Platformatic AI roadmap generator. By using our service, you agree to the following terms:</p>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using our services, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Our service provides users with access to resources and tools for managing and interacting with AI models.
          </p>
          <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
          <p className="mb-4">
            You must provide accurate registration information and keep it up to date. You are responsible for maintaining the confidentiality of your account.
          </p>
          <h2 className="text-2xl font-semibold mb-4">4. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your account at our sole discretion for conduct that we believe violates these terms.
          </p>
          <p className="mt-8">Last updated: {currentDate}</p>
          <button onClick={closeModal} className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg">
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default TermsOfService;
