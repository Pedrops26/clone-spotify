import { IconType } from "react-icons";
import { MdHomeFilled, MdSearch } from 'react-icons/md';


interface IconLinkProps { //Para pasar un componente
    text: string;
    ActiveIcon: IconType;
    InactiveIcon: IconType;
    isActive?: boolean;
};

const IconLink = ( {text, isActive=false, ActiveIcon, InactiveIcon }: IconLinkProps ) => {
    return (
        <div className={`flex items-center gap-4 ${
            isActive ? 'text-white' : `text-mid-gray hover:text-white hover:cursor-pointer`
            } `}>
        <span className="text-3xl">
            {
                isActive ? <ActiveIcon/> : <InactiveIcon/>
            }
        </span>
        <span className="text-md font-semibold">{text}</span>
    </div>
        );
};

export { IconLink };