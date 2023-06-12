import { Description } from "./Description"
import { Learning } from "./Learning"
import { Participation } from "./Participation"
import { Support } from "./Support"

export const Questions = ({ data }) => {
    return (
        <>
            <Description {...data.description} />
            <Participation {...data.participation} />
            <Learning {...data.learning} />
            <Support {...data.support}/>
        </>
    )
}

