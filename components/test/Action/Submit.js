import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useSelector } from "react-redux"

import colors from "../../../public/colors"

const Submit = ({ style }) => {
    const { answers } = useSelector(state => state.test)
    const router = useRouter()
    const submitHandler = () => {
        console.log(answers)
        router.back()
    }
    
    return (<View style={style}>
        <TouchableOpacity
            style={styles.submit}
            onPress={submitHandler}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    submit: {
        paddingVertical: 10,
        alignItems: 'center'
    },
    submitText: {
        fontSize: 20,
        color: colors.textLight
    }
})

export default Submit