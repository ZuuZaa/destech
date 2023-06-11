import { Container } from 'components/Container'
import { Banner } from 'features/banner'
import { Questions } from 'features/questions'
import { pageContent } from 'utils/pageContent'

export const Software = () => {
    return (
        <Container>
            <Banner {...pageContent[0].banner} />
            <Questions data={pageContent[0]} />
        </Container>
    )
}
