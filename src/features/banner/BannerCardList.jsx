import { Button } from "components/Button"
import { BannerCard } from "./BannerCard"

export const BannerCardList = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr] gap-[40px] py-16">
        {items.map(( item, index )=> <BannerCard {...item} key={index}/>)}
        <Button text="Indi Başla!" url="/"/>
    </div>
  )
}
