import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./modules/header/Header";
import Routes from "./routes/Routes";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div``

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header></Header>
        <ContentWrapper>
          <Routes>
            
          </Routes>
        </ContentWrapper>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App;
