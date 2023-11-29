import { LuCakeSlice } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import "./ChannelInfo.css"

function ChannelInfo(props) {
    let visiblity = "Community-theme-none"

    function changeVisiblity(){
        console.log("probando")
        if(visiblity === "Community-theme-none"){
            visiblity = "community-theme"
        }else{
            visiblity = "Community-theme-none"
        }
    }
    
    console.log(props)
    return (
        <>
            <div className="channel-info">
                <div className="channel-info-space">

                </div>

                <div className="channel-info-general">

                    <p className="info-general-p-name"><CgProfile className="profile-icon"/>r/{props.channel.name}</p>
                    <p className="info-general-p-description">{props.channel.description}</p>
                    
                    <p className="info-general-p-created">{<LuCakeSlice className="cake"/>}  Created {props.channel.createdDate}</p>
                </div>

                <div className="channel-score">
                    <p className="channel-score-info">{props.channel.members}  <span className="detail-span">Members</span></p>
                    <p className="channel-score-info-online"><span><BsDot className="dot"/>{props.channel.onlineMembers} </span><span className="detail-span">Online</span></p>
                    <p className="channel-score-info">{props.channel.Ranked}  <span className="detail-span">Ranked by Size</span></p>
                </div>

                <button onClick={changeVisiblity} className="button"> join </button>

                <div className="community-options">
                    <button onClick={changeVisiblity} className="community-options-button"> <p>COMMUNITY OPTIONS </p><IoIosArrowDown /></button>

                    <div className={visiblity}>
                    <p><BsEye />Community theme</p>
                    <p>switch</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChannelInfo;