import { Section } from 'components/Section'

export const Description = ({ text, title }) => {
    return (
        <Section title={title}>
            <p className='text-[30px] font-medium max-w-[60ch]'>{text}</p>
        </Section>
    )
}
