import { Section } from 'components/Section'
import { FaLinkedinIn } from 'react-icons/fa'

export const Support = ({ avatar, name, role, linkedin, text }) => {
    return (
        <Section title="Destech-çilər kimlər olacaq? 😍">
            <div className="flex gap-10 text-[20px]">
                <div className="flex flex-col">
                    <figure className="relative w-[451px] h-[451px] bg-[#C4FE00] rounded-full overflow-hidden">
                        <img src={avatar} alt="avatar" className='absolute bottom-0 z-3 w-full h-full'/>
                    </figure>
                    <div className="flex flex-col items-center py-7">
                        <h4 className='font-bold'>{name}</h4>
                        <p className='my-3'>{role}</p>
                        <a href={linkedin} className='inline-block text-[#0031FF] rounded-full border-[1px] border-solid border-[#0031FF] p-2'><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className='pt-16'>
                    <p className='text-[#707070]'>{text}</p>
                </div>
            </div>
        </Section>
    )
}
