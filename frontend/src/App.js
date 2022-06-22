import "./App.css";
import {RecoilRoot, useRecoilState} from "recoil";
import authenticationState from "./atoms/authentication.atom";
import Log from "./components/Login/login";

const App = () => {

  const [authentication, setAuthentication] = useRecoilState(authenticationState);

  return (
      <RecoilRoot>
        {
          authentication !== null && authentication !== '' ?
              <App/>
              :
              <Log/>
        }
        <App/>
      </RecoilRoot>
  )
}

export default App;
