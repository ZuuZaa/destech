import { Container } from 'components/Container'
import { FAQ } from 'features/FAQ'
import { Banner } from 'features/banner'
import { Feedback } from 'features/feedback'
import { Questions } from 'features/questions'
import { pageContent } from 'utils/pageContent'

export const Design = () => {
    return (
        <Container>
            <Banner {...pageContent[1].banner} />
            <Questions data={pageContent[1]} />
            <Feedback list={pageContent[1].feedback}/>
            <FAQ list={pageContent[1].faq}/>
        </Container>
    )
}