import { X } from 'lucide-react';
type handleToggleProps = {
    handleToggle: () => void;
}
const ToggleCloseBtn = ({ handleToggle }: handleToggleProps) => {
    return (
        <div className='bg-orange-500 rounded-md p-1'>
            <X className='h-8 w-8 text-orange-300' onClick={ handleToggle } />
        </div>
    )
}

export default ToggleCloseBtn;