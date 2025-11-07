import { useEffect, useState } from 'react';
import FireflyBackground from '@/components/FireflyBackground';
import ContractPaper from '@/components/ContractPaper';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      <FireflyBackground />
      
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
        style={{ zIndex: 10 }}
      >
        <ContractPaper />
      </div>
    </div>
  );
}
