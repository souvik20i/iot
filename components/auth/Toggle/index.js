import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../store/auth-slice"

import Tab from "./Tab"
import colors from "../../../public/colors"

const Toggle = () => {
    const dispatch = useDispatch()
    const isSigninActive = useSelector(state => state.auth.isSigninActive)
    const signinHandler = () => dispatch(authActions.turnToSignin())
    const signupHandler = () => dispatch(authActions.turnToSignup())

    return (<View style={styles.toggle}>
        <Tab label={'Sign In'}
            activeState={isSigninActive}
            onPress={signinHandler}
        />
        <Tab label={'Sign Up'}
            activeState={!isSigninActive}
            onPress={signupHandler}
        />
    </View>)
}

const styles = StyleSheet.create({
    toggle: {
        backgroundColor: colors.textBg + '80',
        flexDirection: 'row',
        borderRadius: 50,
        marginBottom: '10%',
        elevation: 1
    }
})

export default Toggle