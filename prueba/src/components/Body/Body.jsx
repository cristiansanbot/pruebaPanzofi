import Info from "../Info/Info";
import Post from "../Post/Post";
import ChannelInfo from "../ChannelInfo/ChannelInfo";
import Rules from "../Rules/Rules";
import post from "../../utils/post.json"
import channel from "../../utils/channel.json"
import rules from "../../utils/rules.json"
import img from "../../utils/programming.png"
import "./Body.css"

function Body() {


    return (
        <>
            <div className="body">
                <div className="space">
                </div>

                <div>
                    <Info tittle={post.post1.tittle} votes={post.post1.votes} />

                    <div className="content">
                        <div className="body-post">
                            <Post post={post.post1} />
                            
                        </div>

                        <div className="body-channe-info">
                            <ChannelInfo channel={channel} />
                            <Rules channel={channel.name} />
                        </div>
                    </div>
                </div>

                <div className="space">
                </div>
            </div>
        </>
    )

}

export default Body;