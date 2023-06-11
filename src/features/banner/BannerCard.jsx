export const BannerCard = ({title, text}) => {
  return (
    <div className='bg-white w-full text-[28px] text-center rounded-xl p-3 shadow'>
      <h5 className='text-[#7671F6] font-bold'>{title}</h5>
      <p className="text-[#343434] font-medium">{text}</p>
    </div>
  )
}
