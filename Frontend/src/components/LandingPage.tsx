import { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';

export default function LandingPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <Navbar onLoginClick={handleLoginClick} />
      <main>
        {/* Add your landing page content here */}
        <h1>Welcome to the Landing Page</h1>
        <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
      </main>
    </div>
  );
}