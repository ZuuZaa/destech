
export const FeedbackCard = ({avatar, name, role, comment}) => {
  return (
    <div className="shadow relative p-[64px] w-[613px] h-[470px] rounded-xl grid grid-cols-1 grid-rows-2 odd:top-[140px]"> 
        <figure className="w-[50%] h-[50%]">
            <img src={avatar} alt="avatar" className="absolute top-[-50%] w-full h-full object-contain"/>
        </figure>
        <div className="flex flex-col gap-6 items-center">
            <h3 className="text-[20px] font-bold">{name}</h3>
            <h5 className="text-[16px] font-medium">{role}</h5>
            <p className="text-center">{comment}</p>
        </div>
    </div>
  )
}
