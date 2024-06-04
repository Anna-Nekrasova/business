import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Employee from "./components/Main/Employee";
import Company from "./components/Main/Company";

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background: #292727;
`

const StyledMain = styled.main`
color: #060606;
margin: 0 auto 0;
max-width: 648px;
min-height: 696px;
background-color: #F4F4F4;
border-radius: 8px;

@media (max-width: 767px) {
  border-radius: 0;
  max-width: none;
  width: 100%;
}
`

const App = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        {isDesktop && (
          <StyledMain>
            <Routes>
              <Route path="/business" element={<Employee />} />
              <Route path="/company" element={<Company />} />
            </Routes>
          </StyledMain>
        )}
        {isMobile && (
          <StyledMain>
            <Employee />
            <Company />
          </StyledMain>
        )}
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
