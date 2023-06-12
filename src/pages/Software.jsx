import { Container } from 'components/Container'
import { Acceptance } from 'features/ acceptance'
import { FAQ } from 'features/FAQ'
import { Banner } from 'features/banner'
import { Feedback } from 'features/feedback'
import { Questions } from 'features/questions'
import { pageContent } from 'utils/pageContent'

export const Software = () => {
    return (
        <Container>
            <Banner {...pageContent[0].banner} />
            <Questions data={pageContent[0]} />
            <Acceptance list={pageContent[0].acceptance}/>
            <Feedback list={pageContent[0].feedback}/>
            <FAQ list={pageContent[0].faq}/>
        </Container>
    )
}