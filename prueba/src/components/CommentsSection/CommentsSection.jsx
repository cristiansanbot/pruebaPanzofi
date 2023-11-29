import { CiSearch } from "react-icons/ci";
import comments from "../../utils/comments.json";
import "./CommentsSection.css"

function CommentsSection(){
    console.log(comments)

    return(
        <>
        <div className="comment-section">
            <div className="search-comments">

                <p>sort by: <select name="" id=""> 
                <option value="">old</option>
                <option value="">new</option>
                </select></p>

                <div className="search">
                <CiSearch/>
                <input type="text" placeholder="Search comments"/>
                </div>
            <p>View discussions in 1 other community</p>
            </div>


            <div className="comments">
                <div>
                    <div>
                        <p>stronghup <span>OP</span></p>
                        <p>14 hr. ago</p>
                        <div>
                            <p>"People are too focused on code generation and completely ignore that LLMS are useful for code analysis"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CommentsSection;