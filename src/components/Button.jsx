export const Button = ({url, text}) => {
  return (
    <a href={url} className="grid place-items-center bg-[hsl(240,11%,11%)] hover:bg-[hsl(240,11%,15%)] rounded-xl">
        <span className="text-white text-[28px] font-medium">{text}</span>
    </a>
  )
}
