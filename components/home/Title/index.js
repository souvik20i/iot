import { View, Text, Image, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Title = () => {
    return (<View style={styles.top}>
        <Image
            source={require('../../../public/iot.png')}
            style={styles.logo}
        />
        <Text style={styles.title}>IOT</Text>
    </View>)
}

const styles = StyleSheet.create({
    top: {
        alignItems: 'center'
    },
    logo: {
        height: 250,
        width: 300
    },
    title: {
        color: colors.textLight,
        fontSize: 50,
        fontWeight: 'bold',
        padding: 20
    }
})

export default Title