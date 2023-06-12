import { FaChevronDown } from "react-icons/fa"

export const FAQCollapse = ({question, answer}) => {
  return (
    <div className="my-10">
        <div className="bg-[#0000FF] flex justify-between rounded-xl p-[54px] text-white items-center">
            <p className="text-[35px]">{question}</p>
            <FaChevronDown/>
        </div>
        <div className="p-[54px]">
            <p className="text-[#212121] text-[30px]">{answer}</p>
        </div>
    </div>
  )
}
