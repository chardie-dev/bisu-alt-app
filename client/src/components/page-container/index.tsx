import React, { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto mt-8 p-4">
      {children}
    </div>
  );
};

export default PageContainer;
