import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Routes from "./routes/Routes";
import store from "./redux/store";

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
            <Routes />
          </ContentWrapper>
        </MainContainer>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
