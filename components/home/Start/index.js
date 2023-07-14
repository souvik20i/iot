import { View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { getAuth, signOut } from "firebase/auth"
import { FontAwesome } from '@expo/vector-icons';

import Button from "../../ui/Button"
import colors from "../../../public/colors";

const auth = getAuth()

const Start = () => {
    const router = useRouter()
    const startHandler = () => {
        router.push('/modules')
    }
    const signOutHandler = async () => {
        await signOut(auth)
    }
    return (<View style={styles.start}>
        <Button
            style={styles.startLearning}
            label={'Start Learning'}
            onPress={startHandler}
            dark
        />
        <Button
            style={styles.signout}
            label={<FontAwesome name="sign-out" size={30} color={colors.textLight} />}
            onPress={signOutHandler}
            dark
        />
    </View>)
}

const styles = StyleSheet.create({
    start: {
        flex: 0.3,
        paddingTop: 20,
        alignItems: 'center'
    },
    startLearning: {
        fontSize: 25,
        paddingVertical: 15
    },
    signout: {
        paddingHorizontal: 30
    }
})

export default Start