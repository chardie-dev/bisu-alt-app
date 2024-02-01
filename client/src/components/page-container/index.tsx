import React, { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode,
  pageColor: string | undefined
}

const PageContainer: React.FC<PageContainerProps> = ({ children, pageColor }) => {
  return (
    <div className={"container w-full max-w-full mx-auto p-5 md:p-[30px] lg:p-10 h-[calc(100%-80px)] " + pageColor}>
      {children}
    </div>
  );
};

export default PageContainer;
