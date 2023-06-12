import { Section } from "components/Section"
import { nanoid } from "nanoid"

export const Learning = ({title, list}) => {
  return (
    <Section title={title}>
        <ul className="flex flex-wrap gap-5">
            {
                list.map(item => (
                    <li key={nanoid()} className="bg-white w-[45%] h-[169px] rounded-xl gap-7 shadow grid items-center px-4">
                        <p className="text-[30px]">{item}</p>
                    </li>
                ))
            }
        </ul>
    </Section>
  )
}
