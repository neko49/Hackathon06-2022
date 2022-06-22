import {atom} from "recoil";

const authenticationState = atom({
    key: 'authenticationState', // unique ID (with respect to other atoms/selectors)
    default: (localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : '')
});

export default authenticationState;