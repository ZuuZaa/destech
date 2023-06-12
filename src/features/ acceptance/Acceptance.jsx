import { Section } from 'components/Section'

export const Acceptance = ({ list }) => {
    return (
        <Section title="Qəbul Prosesi">
            <p className='text-[#707070] text-[20px]'>Qəbul prosesimiz aşağıdakı addımlardan ibarətdir. Biz təkcə tələbələri qəbul etmirik. Akademiyamızda hüquqşünas, rəssam, mühasib, bioloq və bir çox fərqli sahələrdən olan şəxsləri bir araya toplayan zəngin bir təhsil mühiti yaratmışıq. Karyeranızı bizimlə birgə dəyişmək üçün istəkli olmağınız kifayətdir.</p>
            <ul className="grid grid-cols-5 pt-10">
                {list.map(item => (
                    <li className='flex flex-col items-center'>
                        <figure className='w-[90px] h-[90px]'>
                            <img src={item.icon} alt="icon" className='w-full h-full'/>
                        </figure>
                        <p className='py-5'>{item.text}</p>
                    </li>
                ))}
            </ul>
        </Section>
    )
}