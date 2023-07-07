import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import SigninButton from "./SigninButton"
import Container from "../../ui/Container"
import Form from "../../ui/Form"
import HelperText from "../../ui/HelperText"

import { authActions } from "../../../store/authSlice"

const Signin = () => {
    const dispatch = useDispatch()
    const signin = useSelector(state => state.auth.signin)
    const phoneEmailChangeHandler = value => {
        if (isNaN(value)) {
            dispatch(authActions.changeSigninEmail(value))
            dispatch(authActions.changeSigninPhone(''))
        } else {
            dispatch(authActions.changeSigninPhone(value))
            dispatch(authActions.changeSigninEmail(''))
        }
    }
    const passwordChangeHandler = value => {
        dispatch(authActions.changeSigninPassword(value))
    }

    const labels = ['Phone / Email', 'Password']
    const handlers = [phoneEmailChangeHandler, passwordChangeHandler]
    const validity = [signin.isPhoneValid || signin.isEmailValid, signin.isPasswordValid]

    return (<Container style={styles.container}>
        <Form
            labels={labels}
            handlers={handlers}
            validity={validity}
        />
        <View style={styles.actions}>
            <SigninButton />
            <HelperText label={'Forgot your password?'} dark />
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    actions: {
        alignItems: 'center'
    }
})

export default Signin