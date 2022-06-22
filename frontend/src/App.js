import "./App.css";
import {useRecoilState} from "recoil";
import authenticationState from "./atoms/authentication.atom";
import Log from "./components/Login/login";
import ProjectList from "./components/Projects/ProjectList";
import {Fragment} from "react";

const App = () => {

    const [authentication, setAuthentication] = useRecoilState(authenticationState);

    return (
        <Fragment>
            {
                authentication !== null && authentication !== '' ?
                    <App/>
                    :
                    <Log/>
            }
        </Fragment>
    )
}

export default App;
