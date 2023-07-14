
import { Provider } from "react-redux"
import store from "./store";
import ToastManager, { Toast } from "expo-react-native-toastify";


const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <ToastManager />
            {children}
        </Provider>
    )
}

export default Providers