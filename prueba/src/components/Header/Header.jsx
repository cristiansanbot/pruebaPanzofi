import { FaReddit } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import { RiShareCircleLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiJusticeStar } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <div className="container-header container-logo">
                <FaReddit className="logo" />
                <h2>reddit</h2>
                </div>
                    
                <select className="select-header"name="" id="">
                    <option value=""> <CgProfile/> r/programming</option>
                    <option value=""> r/programming</option>
                    <option value=""> r/programming</option>
                    <section>
                        <h6>FEEDS</h6>
                        <option value="">Home</option>
                        <option value="">Popular</option>
                        <option value="">All</option>
                    </section>
                    <section>
                        <h6>OTHER</h6>
                        <option value="">User Settings</option>
                        <option value="">Messages</option>
                        <option value="">Create Post</option>
                        <option value="">Notifications</option>
                        <option value="">Premium</option>
                        <option value="">Avatar</option>
                    </section>
                </select>

                <div className="container-header searchBar">
                    <CiSearch className="icon-header"/>
                    <div className="container-header searched">
                        <CgProfile className="icon-profile"/>
                        <h5>r/programming</h5>
                        <SlClose className="searched-x"/>
                    </div>
                    <h4 className="search-reddit">  Search Reddit</h4>
                </div>

                <div className="container-header actions">
                    <RiShareCircleLine className="icon-header"/>
                    <FaRegCommentDots className="icon-header"/>
                    <GoBell className="icon-header"/>
                    <FaPlus className="icon-header"/>

                    <div className="container-header advertise">
                        <BsMegaphone className="icon-header-advertise"/>
                        <h3>Advertise</h3>
                    </div>
                </div>

                <div className="container-header container-header-profile">
                    
                    <CgProfile className="profile-picture"/>
                    
                    <div className="profile-info">
                    <h5>Wonderful-External22</h5>
                    
                    <div className="container-header coins">
                    <GiJusticeStar className="karma"/>
                    <h5>1 Karma</h5>
                    </div>
                    </div>
                    
                    <IoIosArrowDown className="profile-arrow"/>
                </div>

            </header>
        </>
    );
}
export default Header;