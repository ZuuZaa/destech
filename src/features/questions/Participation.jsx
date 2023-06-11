import { Section } from "components/Section"
import { nanoid } from "nanoid"

export const Participation = ({list}) => {
    return (
        <Section title="Kimlər iştirak edə bilər?">
            <ul className="list-disc">
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
