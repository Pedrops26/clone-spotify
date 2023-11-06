import { Button } from "./Button";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { LogInDialog } from "./Dialogs/LogInDialog";
import { useState } from "react";

const Navbar = () => {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleLoginClick = () => {
        console.log('Hice click en el boton de login');
        setDialogOpen(true);
    }

    return (
        <nav className="debug bg-spotify-black flex items-center justify-between px-5 py-4 rounded-md">
            <div className="flex gap-4 text-xl">
                <div className="bg-spotify-black2 text-spotify-black42 p-1 rounded-full">
                    <BsChevronLeft />
                </div>
                <div className='bg-spotify-black2 text-spotify-black42 p-1 rounded-full'>
                    <BsChevronRight />
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <span className="menu-text">Premium</span>
                <span className="menu-text">Support</span>
                <span className="menu-text">Download</span>
                <div className='vertical-separator'></div>
                <span>Sign Up</span>
                <Button type='primary' text="Log In" handleClick={handleLoginClick}/>
            </div>
            <LogInDialog open={dialogOpen} setOpen={setDialogOpen}/>
        </nav>
    )
}

export {Navbar};