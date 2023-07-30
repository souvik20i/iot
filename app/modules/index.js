import { useRouter, Stack } from "expo-router"

import Module from "../../components/modules/Module"
import Container from "../../components/ui/Container"
import Scroll from "../../components/ui/Scroll"
import Button from "../../components/ui/Button"
import Space from "../../components/ui/Space"
import modules from "../../data/modules"

const Modules = () => {
    const router = useRouter()
    return (<Container>
        <Stack.Screen options={{ title: 'Course Modules' }} />
        <Scroll>
            {modules.map(({ id, name, topics }) =>
                <Module
                    key={id}
                    id={id}
                    name={name}
                    topics={topics}
                />)
            }
            <Space />
        </Scroll>
        <Button
            label={'Certificate Progress'}
            onPress={() => router.push('/certificate')} dark small
        />
    </Container>)
}

export default Modules