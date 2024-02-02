import { useBackgroundByLocation } from '@/hooks/useBackgroundByLocation';
import React, { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode,
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const backgroundConfig = useBackgroundByLocation()
  
  return (
    <div className={"container w-full max-w-full mx-auto p-5 md:p-[30px] lg:p-10 " + backgroundConfig.page}>
      {children}
    </div>
  );
};

export default PageContainer;
