import "./App.css";
import {useRecoilState} from "recoil";
import authenticationState from "./atoms/authentication.atom";
import Log from "./components/Login/login";
import {Fragment} from "react";
import Home from "./components/Home/Home";
import {Toaster} from "react-hot-toast";

const App = () => {

    const [authentication, setAuthentication] = useRecoilState(authenticationState);

    return (
        <Fragment>
            <Toaster/>
            {
                authentication !== null && authentication !== '' ?
                    <Home/>
                    :
                    <Log/>
            }
        </Fragment>
    )
}

export default App;
