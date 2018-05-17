import React from 'react';

const PageWrapper = ({className, children}) => (<div className={`container-fluid ${className}`}>{children}</div>)

const MainContainer = ({children}) => (<div className="main-container">{children}</div>)

const MainContent = ({className, children}) => {
  return (
    <main className="main">
      <div className={className ? `main-content ${className}` : 'main-content'}>
      {children}
      </div>
    </main>
  )
}

export {
  PageWrapper,
  MainContainer,
  MainContent
}