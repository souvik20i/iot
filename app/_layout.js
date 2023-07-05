import { Slot } from "expo-router"
import { Provider } from "react-redux"
import store from "../store"

const Layout = () => {
    return (<Provider store={store}>
        <Slot />
    </Provider>)
}

export default Layout