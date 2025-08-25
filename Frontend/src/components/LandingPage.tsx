import { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';

interface LandingPageProps {
  onLogin: (role: 'donor' | 'receiver' | 'admin') => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = (role: 'donor' | 'receiver' | 'admin') => {
    setIsLoginModalOpen(false);
    onLogin(role);
  };

  return (
    <div>
      <Navbar onLoginClick={handleLoginClick} />
      <main>
        {/* Add your landing page content here */}
        <h1>Welcome to the Landing Page</h1>
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={handleCloseModal}
          onLoginSuccess={handleLoginSuccess}
        />
      </main>
    </div>
  );
}