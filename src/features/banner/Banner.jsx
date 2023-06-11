import { Section } from "components/Section"
import { BannerCardList } from "./BannerCardList"

export const Banner = ({ title, image, cards }) => {
    return (
        <Section>
            <div className="block lg:flex items-center">
                <h1 className="w-3/5 font-bold text-[100px] whitespace-break-spaces">{title}</h1>
                <figure className="w-[230px] h-[230px]">
                    <img src={image} alt="developer" className="w-full h-full" />
                </figure>
            </div>
            <BannerCardList items={cards} />
        </Section>
    )
}
