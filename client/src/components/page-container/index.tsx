import React, { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-5 md:p-[30px] lg:p-10 h-[calc(100%-80px)]">
      {children}
    </div>
  );
};

export default PageContainer;
