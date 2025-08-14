import { LucideFileQuestion } from 'lucide-react'

interface INotFound {
    height?: number 
}
const NotFound = ({ height = 128 }: INotFound) => {
    return (
        <div className='flex items-center justify-center flex-col text-neutral-400 gap-2' style={{ height: height ?? '' }}>
            <LucideFileQuestion width="60" height="60" />
            <p className='text-sm'>Not found</p>
        </div>
    )
}

export default NotFound