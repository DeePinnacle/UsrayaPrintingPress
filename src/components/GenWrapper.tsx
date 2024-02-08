import { ReactNode } from "react"
import { cn } from '@/lib/utils';
type GenWrapperProps = {
    className?: string,
    children: ReactNode
}
const GenWrapper = ({ className, children }: GenWrapperProps) => {
    return (
        <div className={cn('bg-slate-100 py-10 px-2 flex flex-col justify-center items-center', className)}>
            { children }
        </div>
    )
}

export default GenWrapper;