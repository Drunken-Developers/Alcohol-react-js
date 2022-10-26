import BackAppbar from "./BackAppbar";
import SearchAppbar from "./SearchAppbar";
import '../../../assets/css/Community.css'
import { useLocation } from "react-router-dom";

export default function AppBar({variant}){
    const location = useLocation();
    const HeaderDefault = () => {
        return(
            <header>
                <BackAppbar className={'mainHeader'} />
                <SearchAppbar />
            </header>
        )
    }
    if(location.pathname == '/') {
        return (
            <header>
                <SearchAppbar />
            </header>
        )
    } else if(location.pathname == '/communityList') {
        return (
            <HeaderDefault />
        )
    } else if(location.pathname == '/search') {
        return(
            <HeaderDefault />
        )
    } else if(location.pathname == '/mypage') {
        return(
            <HeaderDefault />
        )
    }
    return(
        <HeaderDefault />
    )
    
    
    // return (
    //     <header className={variant=== undefined ? 'mainHeader':''}>
    //         {variant === undefined && <FiSearch size={30} />}
    //         {variant === "back" && <BackAppbar className={'mainHeader'}/> }
    //     </header>
    // )
}
