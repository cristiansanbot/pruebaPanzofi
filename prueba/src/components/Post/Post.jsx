import { PiArrowFatDownBold } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { PiArrowFatUpFill } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";
import { RiShareBoxLine } from "react-icons/ri";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiArrowBendUpRight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import "./Post.css"

function Post(props) {
    return (
        <>
            <div className="post-container">
                <div>
                    <div className="votes">
                        <PiArrowFatUpBold />
                        <p>{props.post.votes}</p>
                        <PiArrowFatDownBold />
                    </div>
                </div>

                <div>
                    <div className="post-info">
                        <div className="info-post">
                        <CgProfile className="icon"/>
                        <p className="post-info-channel">r/{props.post.channel}</p>
                        <p className="posted-by">Posted by u/{props.post.owner}</p>
                        </div>
                    <div className="bell">
                    <GoBell className="icon bell"/>
                    </div>
                    </div>

                    <div className="post">
                        <h4 className="tittle">{props.post.tittle}</h4>
                        <p>{props.post.body}</p>
                        <div className="Link">
                            <IoIosLink />
                            <div className="link- share">
                                <RiShareBoxLine />
                            </div>
                        </div>
                    </div>

                    <div className="actions">
                        <FaRegCommentAlt />
                        <p>109 comments</p>
                        <PiArrowBendUpRight />
                        <CiBookmark />
                        <p>{props.post.peopleHere} people here</p>
                        <IoPeople />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;