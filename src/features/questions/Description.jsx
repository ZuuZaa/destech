import { Section } from 'components/Section'

export const Description = ({ text }) => {
    return (
        <Section title="Nədir?">
            <p className='text-[30px] font-medium max-w-[60ch]'>{text}</p>
        </Section>
    )
}
