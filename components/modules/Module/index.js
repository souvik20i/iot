import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch } from "react-redux"
import { FontAwesome } from "@expo/vector-icons"
import { moduleActions } from "../../../store/module-slice"
import { colors } from "../../../colors"

const Module = ({ id, name, image, isDone }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const changeModuleHandler = () => {
        dispatch(moduleActions.changeCurrentModule(id))
        router.push(`/modules/${id}`)
    }

    return (<TouchableOpacity style={styles.module} onPress={changeModuleHandler}>
        {isDone && <FontAwesome name="check-square-o" style={styles.checkmark} size={24} color={colors.success} />}
        <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode='contain'
        />
        <View style={styles.titleBlock}>
            <Text style={styles.title}>{name}</Text>
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    module: {
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: colors.bgPrimary,
        elevation: 2,
        shadowColor: colors.textDark,
        shadowOffset: {
            height: 0.2,
            width: 0.2
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.1
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden'
    },
    titleBlock: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: colors.textGrey + '80',
        borderRadius: 5,
        padding: 5
    },
    title: {
        color: colors.textLight,
        fontSize: 20
    },
    checkmark: {
        position: 'absolute',
        zIndex: 10,
        right: '5%',
        top: '7%',
        backgroundColor: colors.bgPrimary,
        padding: 2,
        paddingBottom: 0,
        borderRadius: 5
    }
})

export default Module