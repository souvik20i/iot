import { View, Text, StyleSheet } from "react-native"

import Block from "./Block"
import colors from "../../../public/colors"

const QuestionBar = ({ questions }) => {
    return (<View style={styles.bar}>
        <Text style={styles.header}>Questions</Text>
        <View style={styles.blocks}>
            {questions.map((q, i) => <Block key={i} serial={i + 1} question={q} />)}
        </View>
    </View >)
}

const styles = StyleSheet.create({
    bar: {
        width: '90%',
        alignItems: 'center',
        padding: 20
    },
    header: {
        fontSize: 30,
        paddingBottom: 15,
        color: colors.textDark
    },
    blocks: {
        flexDirection: 'row'
    }
})

export default QuestionBar