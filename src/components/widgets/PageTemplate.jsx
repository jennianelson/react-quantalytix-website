import React from 'react';
import {PageWrapper, MainContainer} from '../Wrappers';
import {Sidebar, Header} from '../ui';

const PageTemplate = ({className, children}) => {
  return (
    <PageWrapper className={className}>
      <Sidebar></Sidebar>
      <MainContainer>
        <Header className="header"></Header>
          {children}
      </MainContainer>
    </PageWrapper>
  )
}

export default PageTemplate;