import {Button} from "reactstrap";
import {useRecoilState} from "recoil";
import authenticationState from "../atoms/authentication.atom";
import {successNotification} from "../helpers/notification.helper";

const Logout = () => {

    const [authentication, setAuthentication] = useRecoilState(authenticationState);

    const handleLogout = (e) => {
        e.preventDefault();
        setAuthentication('')
        localStorage.removeItem("jwt")
        successNotification("Déconnexion effectuée avec succès !")
    }
    return (
        <Button color="danger" onClick={handleLogout}>Déconnexion</Button>
    )
}

export default Logout;