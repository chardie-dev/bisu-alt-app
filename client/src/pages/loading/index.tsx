import React from 'react';

interface SplashLoadingScreenProps {
  // You can add any additional props you need
}

const SplashLoadingScreen: React.FC<SplashLoadingScreenProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-primary-500 text-white">
      <div className="text-4xl font-bold">Loading...</div>
    </div>
  );
};

export default SplashLoadingScreen;
