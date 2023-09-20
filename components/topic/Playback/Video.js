import { forwardRef } from "react"
import { TouchableWithoutFeedback, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { Video as ExpoVideo } from "expo-av"
import { colors } from "../../../colors"

const Video = forwardRef(({ uri, isFullscreen, onPress, onChange }, ref) => {
    const { token } = useSelector(state => state.auth)
    const replacedUri=uri.replace('http','https')
    // console.log(replacedUri,token)

    return (<TouchableWithoutFeedback onPress={onPress}>
        <ExpoVideo
            ref={ref}
            style={{
                ...styles.video,
                height: isFullscreen ? '100%' : '33%'
            }}
            source={{ uri, headers: { 'Authorization': `Bearer ${token}` } }}
            resizeMode='contain'
            onPlaybackStatusUpdate={onChange}
            shouldCorrectPitch
            shouldPlay
            // onLoad={(status)=>{console.log('Status',status);}}
            // onError={(error)=>{console.log('Error:',error)}}
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