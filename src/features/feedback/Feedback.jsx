import { Section } from 'components/Section'
import { Comments } from './Comments'

export const Feedback = ({list}) => {
  return (
    <Section title="Məzunlarımızdan fikirlər 🎓">
        <Comments  list={list}/>
    </Section>
  )
}
