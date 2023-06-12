import { nanoid } from 'nanoid'
import { FeedbackCard } from './FeedbackCard'

export const Comments = ({ list }) => {
    return (
        <div className='grid grid-cols-2 justify-center py-[150px]'>
            {
                list.map(item => <FeedbackCard {...item} key={nanoid()}/>)
            } 
        </div>
    )
}
