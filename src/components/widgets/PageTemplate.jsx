import React from 'react';
import {PageWrapper, MainContainer} from '../Wrappers';
import {Sidebar, Header, Footer} from '../ui';

const PageTemplate = ({className, children}) => {
  const footer = className !== "home-page" ? <Footer/> : null
  return (
    <PageWrapper className={className}>
      <Sidebar></Sidebar>
      <MainContainer>
        <Header className="header"></Header>
          {children}
      {footer}
      </MainContainer>
    </PageWrapper>
  )
}

export default PageTemplate;