import { useState } from 'react';
import ReceiverDashboard from "@/pages/ReceiverDashboard";
import DonorDashboard from "@/components/DonorDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import LandingPage from "@/components/LandingPage";

type UserRole = 'donor' | 'receiver' | 'admin' | null;

const Index = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  // Show landing page if not logged in
  if (!userRole) {
    return <LandingPage onLogin={handleLogin} />;
  }

  // Show appropriate dashboard based on role
  switch (userRole) {
    case 'receiver':
      return <ReceiverDashboard isApproved={true} onLogout={handleLogout} />;
    case 'donor':
      return <DonorDashboard onLogout={handleLogout} />;
    case 'admin':
      return <AdminDashboard onLogout={handleLogout} />;
    default:
      return <LandingPage onLogin={handleLogin} />;
  }
};

export default Index;
