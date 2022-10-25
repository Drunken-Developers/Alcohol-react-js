import BackAppbar from "./BackAppbar";
import {FiSearch} from "react-icons/fi";
import '../../../assets/css/Community.css'

export default function AppBar({variant}){
    return (
        <header className={variant=== undefined ? 'mainHeader':''}>
            {variant === undefined && <FiSearch size={30} />}
            {variant === "back" && <BackAppbar className={'mainHeader'}/> }
        </header>
    )
}
