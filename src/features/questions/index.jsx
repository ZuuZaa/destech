import { Description } from "./Description"
import { Learning } from "./Learning"
import { Participation } from "./Participation"

export const Questions = ({ data }) => {
    return (
        <>
            <Description text={data.description} />
            <Participation list={data.participation} />
            <Learning list={data.learning} />
        </>
    )
}

