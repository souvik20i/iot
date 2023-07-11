import { View, Text, StyleSheet } from "react-native"
import { RadioButton } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { testActions } from "../../store/test-slice"

const Radio = ({ label }) => {
    const dispatch = useDispatch()
    const { serial } = useSelector(state => state.test.question)
    const markedOption = useSelector(state => state.test.answers[serial])
    const optionChangeHandler = () => dispatch(testActions.changeAnswers({
        serial,
        option: label
    }))
    return (<View key={label} style={styles.option}>
        <RadioButton
            status={(markedOption === label) ? 'checked' : 'unchecked'}
            onPress={optionChangeHandler}
        />
        <Text style={styles.label} onPress={optionChangeHandler}>{label}</Text>
    </View>)
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        paddingBottom: 2
    }
})

export default Radio