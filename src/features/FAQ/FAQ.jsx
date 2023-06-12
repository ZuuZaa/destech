import { Section } from "components/Section"
import { FAQCollapse } from "./FAQCollapse"
import { nanoid } from "nanoid"

export const FAQ = ({list}) => {
  return (
    <Section title="Sizin suallarınızı Cavabladıq!😍">
        {
            list.map(item => <FAQCollapse {...item} key={nanoid()}/>)
        }
    </Section>
  )
}
