import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 

type Props = {
  message: string;
  onClose: () => void; 
};

const NotificationToast: React.FC<Props> = ({ message, onClose }) => {
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    
    <div className="fixed bottom-5 right-5 bg-black text-white p-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-up z-50">
      <FaCheckCircle className="text-green-500 text-xl" />
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default NotificationToast;