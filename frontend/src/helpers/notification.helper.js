import {toast} from "react-hot-toast";

export const offlineApiNotification = () => {
    toast.error('Our API seems to be offline', {
        duration: 3000,
        position: 'bottom-right',
    });
}

export const errorNotification = (error) => {
    toast.error(error, {
        duration: 3000,
        position: 'bottom-right',
    });
}

export const successNotification = (success) => {
    toast.success(success, {
        duration: 3000,
        position: 'bottom-right',
    });
}