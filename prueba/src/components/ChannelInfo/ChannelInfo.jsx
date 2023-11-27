import { LuCakeSlice } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import "./ChannelInfo.css"

function ChannelInfo(props){
    console.log(props)
    return(
        <>
            <div className="channel-info">
                <p>r/{props.channel.name}</p>
                <p>{props.channel.description}</p>
                <p>{<LuCakeSlice />}  Created {props.channel.createdDate}</p>
                
                <div className="channel-score">
                    <p>{props.channel.members}  <span>Members</span></p>
                    <p>{props.channel.onlineMembers}  <span>Online</span></p>
                    <p>{props.channel.Ranked}  <span>Ranked by Size</span></p>
                </div>

                <button> join </button>

                <div className="community-options">
                <button> COMMUNITY OPTIONS <IoIosArrowDown /></button>
                
                <p><BsEye />Community theme</p>
                <p>switch</p>
                </div>
            </div>
        </>
    )
}

export default ChannelInfo;