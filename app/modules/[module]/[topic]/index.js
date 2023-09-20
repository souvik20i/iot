import { useState } from "react"
import { StyleSheet } from "react-native"
import { Stack } from "expo-router"
import { lockAsync, OrientationLock } from "expo-screen-orientation"
import { useSelector } from "react-redux"

import Constants from "expo-constants"
import Container from "../../../../components/ui/Container"
import Playback from "../../../../components/topic/Playback"
import Resources from "../../../../components/topic/Resources"

const Topic = () => {
    const { modules, currentModule, currentTopic } = useSelector(state => state.module)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const { video, content } = modules[currentModule].topics[currentTopic]
    const { domain } = Constants.expoConfig.extra
    console.log(video);
    const enterFullscreenHandler = async () => {
        await lockAsync(OrientationLock.LANDSCAPE)
        setIsFullscreen(true)
    }

    const exitFullscreenHandler = async () => {
        await lockAsync(OrientationLock.PORTRAIT)
        setIsFullscreen(false)
    }
    // console.log(`${domain}/stream/${video.slug}`)

    return (<Container style={styles.container}>
        <Stack.Screen options={{
            title: modules[currentModule].topics[currentTopic].title,
            headerShown: !isFullscreen,
            // statusBarHidden: isFullscreen,
            navigationBarHidden: isFullscreen
        }} />
        <Playback
            uri={`http://dqy5w0tkqsil7.cloudfront.net/Videos/${video.slug}`}
            orientation={{
                isFullscreen, enterFullscreenHandler, exitFullscreenHandler
            }}
        />
        {!isFullscreen && <Resources content={content} />}
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    }
})

export default Topic