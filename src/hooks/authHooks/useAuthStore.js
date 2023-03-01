import { useDispatch, useSelector } from "react-redux";
import { onChangeValue, onLogin } from "../../store/slice/authSlice/authSlice";

export const useAuthStore = () => {
    const { status, authUser, errorMessages, profileSelected, value } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startChangeAuth = () => {
        dispatch(onLogin("Cambiando en auth"));
    }

    const starChangeValue = (data) => {
        dispatch(onChangeValue(data));
    }

    return {
        /**Propiedades **/
        status,
        authUser,
        errorMessages,
        profileSelected,
        value,
        /** Métodos **/
        startChangeAuth,
        starChangeValue,
    };

};
