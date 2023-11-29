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
import { IoIosMore } from "react-icons/io";
import Comment from "../Comment/Comment";
import CommentsSection from "../CommentsSection/CommentsSection";
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

                <div className="general-post">
                    <div className="post-info">
                        <div className="info-post">
                            <CgProfile className="icon" />
                            <p className="post-info-channel">r/{props.post.channel}</p>
                            <p className="posted-by">Posted by u/{props.post.owner} {props.post.dateUp}</p>
                        </div>
                        <div className="bell">
                            <GoBell className="icon bell" />
                        </div>
                    </div>

                    <div className="post">
                        <div className="content-post">
                            <h4 className="tittle">{props.post.tittle}</h4>
                            <a className="body-link" href="https://www.infoworld.com/article/3709230/what-ai-wont-replace-in-your-programming.html">{props.post.body}  <RiShareBoxLine /></a>
                        </div>

                        <div className="link">
                            <IoIosLink  className="link-chain"/>
                            <div className="link-share">
                                <RiShareBoxLine />
                            </div>
                        </div>

                    </div>

                    <div className="actions-post">
                        <div className="container-actions">
                            <div className="container-actions-especific">
                            <FaRegCommentAlt className="container-actions-especific-icon" />
                            <p className="container-actions-especific-text">109 comments</p>
                            </div>
                            <div className="container-actions-especific">
                            <PiArrowBendUpRight className="container-actions-especific-icon" />
                            <p className="container-actions-especific-text">Share</p>
                            </div>
                            <div className="container-actions-especific">
                            <CiBookmark className="container-actions-especific-icon" />
                            <p className="container-actions-especific-text">Save</p>
                            </div>
                            <IoIosMore className="container-actions-especific-icon"/>
                        </div>

                        <div className="container-people">
                            <p>{props.post.peopleHere} people here</p>
                            <IoPeople className="people-icon"/>
                        </div>
                    </div>
                <Comment/>
                <CommentsSection />
                </div>
            </div>
        </>
    )
}

export default Post;