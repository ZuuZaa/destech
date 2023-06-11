import { Description } from "./Description"
import { Learning } from "./Learning"
import { Participation } from "./Participation"
import { Support } from "./Support"

export const Questions = ({ data }) => {
    return (
        <>
            <Description text={data.description} />
            <Participation list={data.participation} />
            <Learning list={data.learning} />
            <Support {...data.support}/>
        </>
    )
}

