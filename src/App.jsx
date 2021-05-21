import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./modules/header/Header";
import Routes from "./routes/Routes";
import store from "./redux/store";
import PrivatRouter from "./routes/PrivatRoute";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`
const ContentWrapper = styled.div`
  height: calc(100% - 70px);
`

function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainContainer>
          <ContentWrapper>
            {/* <PrivatRouter path="/" component={Header} /> */}
            <Routes />
          </ContentWrapper>
        </MainContainer>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
