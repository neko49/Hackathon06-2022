import {atom} from "recoil";

const authenticationState = atom({
    key: 'authenticationState', // unique ID (with respect to other atoms/selectors)
    default: localStorage.getItem('jwt') // valeur par défaut (alias valeur initials)
});

export default authenticationState