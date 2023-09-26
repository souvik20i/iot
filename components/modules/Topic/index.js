import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter, usePathname } from "expo-router"
import { useDispatch } from "react-redux"
import { FontAwesome5 } from '@expo/vector-icons'
import { moduleActions } from "../../../store/module-slice"
import { feedbackActions } from "../../../store/feedback-slice"
import { colors } from "../../../colors"

import useConversion from "../../../hooks/use-conversion"

const Topic = ({ id, title, length, isLocked }) => {
    const router = useRouter()
    const pathname = usePathname()
    const dispatch = useDispatch()
    const duration = useConversion(length)

    const changeTopicHandler = () => {
        dispatch(moduleActions.changeCurrentTopic(id))
        if (isLocked) dispatch(feedbackActions.sendFeedback({
            message: `Unlock '${title}' by watching the previous videos left behind`,
            success: false
        }))
        else router.push(`${pathname}/${id}`)
    }

    return (<TouchableOpacity style={styles.topic} onPress={changeTopicHandler}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.duration}>
            <FontAwesome5 name="video" size={12} color={colors.textDark} />
            <Text style={styles.time}>{duration}</Text>
        </View>
        {isLocked && <View style={styles.lock}>
            <FontAwesome5 name="lock" size={20} color={colors.textDark} />
        </View>}
    </TouchableOpacity >)
}

const styles = StyleSheet.create({
    topic: {
        backgroundColor: colors.bgSecondary + '30',
        padding: 30,
        margin: 5,
        borderRadius: 20
    },
    title: {
        color: colors.textDark,
        fontSize: 17,
        lineHeight: 25
    },
    duration: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 2,
        marginTop: 15
    },
    time: {
        fontSize: 12,
        color: colors.textDark
    },
    lock: {
        position: 'absolute',
        right: 20,
        bottom: 20
    }
})

export default Topic