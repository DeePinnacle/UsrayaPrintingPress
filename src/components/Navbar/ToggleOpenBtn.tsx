import { Menu } from 'lucide-react';
type handleToggleProps = {
    handleToggle: () => void;
}
const ToggleOpenBtn = ({ handleToggle }: handleToggleProps) => {
    return (
        <div className='bg-orange-500 rounded-md p-1'>
            <Menu className='h-8 w-8 text-orange-300' onClick={ handleToggle } />
        </div>
    )
}

export default ToggleOpenBtn;