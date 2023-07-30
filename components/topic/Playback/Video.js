import { forwardRef } from "react"
import { TouchableWithoutFeedback, StyleSheet } from "react-native"
import { Video as ExpoVideo } from "expo-av"

import colors from "../../../public/colors"

const Video = forwardRef(({ uri, isFullscreen, onPress, onChange }, ref) => {
    return (<TouchableWithoutFeedback onPress={onPress}>
        <ExpoVideo
            ref={ref}
            style={{
                ...styles.video,
                height: isFullscreen ? '100%' : '25%'
            }}
            source={{ uri }}
            resizeMode='contain'
            onPlaybackStatusUpdate={onChange}
            shouldPlay
        />
    </TouchableWithoutFeedback>)
})

const styles = StyleSheet.create({
    video: {
        width: '100%',
        backgroundColor: colors.textDark
    }
})

export default Video