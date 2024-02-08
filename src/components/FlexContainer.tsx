import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
type FlexContainerProps = {
    className? : string,
    children: React.ReactNode;
}
const FlexContainer =({ className, children }:FlexContainerProps)=>{
    return (
        <div className={cn("grid grid-flow-col")}></div>
    )
}
export default FlexContainer;