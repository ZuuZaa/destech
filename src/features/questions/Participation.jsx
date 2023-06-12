import { Section } from "components/Section"
import { nanoid } from "nanoid"

export const Participation = ({title, list}) => {
    return (
        <Section title={title}>
            <ul className="list-disc pl-5">
                {
                    list.map(item => (
                        <li key={nanoid()}>
                            <p className="text-[30px] font-medium pl-4">{item}</p>
                        </li>
                    ))
                }

            </ul>
        </Section>
    )
}
