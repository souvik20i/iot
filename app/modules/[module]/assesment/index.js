import { Stack, useLocalSearchParams } from "expo-router"

import Container from "../../../../components/ui/Container"
import QuestionBar from "../../../../components/modules/QuestionBar"
import Question from "../../../../components/modules/Question"
import Options from "../../../../components/modules/Options"

const Assesment = () => {
    const { module } = useLocalSearchParams()
    return (<Container>
        <Stack.Screen options={{ title: `Module ${module} Assesment` }} />
        <QuestionBar questions={['q1', 'q2', 'q3', 'q4', 'q5']} />
        <Question serial={1} content={'What is your name?What is your name?What is your name?What is your name?What is your name?What is your name?What is your name?What is your name?What is your name?What is your name?'} />
        <Options labels={['A', 'B', 'C', 'D']} />
    </Container>)
}

export default Assesment