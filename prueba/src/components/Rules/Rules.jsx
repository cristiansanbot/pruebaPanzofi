import { IoIosArrowDown } from "react-icons/io";
import "./Rules.css"

function Rules(props){
    return(
        <>
        <div className="rules-container">

        <div>
            <p>r/{props.channel}</p>
            <button>Es</button>
            <button>En</button>
        </div>

        <div>
            <button>
            <h4>Keep submissions on topic and of high quality</h4>
            <IoIosArrowDown/>
            </button>
            <p>Submissions should be directly related to programming. Just because it has a computer in it doesn't make it programming. Submissions containing no real content that are simply farming for e-mail addresses will be removed as spam. Direct links to app demos (unrelated to programming) will be removed. Please link to a blog post/post-mortem about the development process instead.</p>

            <button>
            <h4>No surveys</h4>
            <IoIosArrowDown/>
            </button>
            <p>Surveys/polls are typically obnoxious. Pretty much any survey, academic or otherwise, will be removed by the mod team. Check out /r/samplesize as an alternative place to submit surveys. Exceptions are made for high quality surveys hosted by established members of the software development community (really just the annual SO Developer Survey).</p>

            <button>
            <h4>No résumés/job listings</h4>
            <IoIosArrowDown/>
            </button>
            <p>/r/programming is not a jobs board. Please visit /r/forhire or /r/jobbit for submitting résumés or open positions. Submissions on the topic of hiring programmers or getting hired as a programmer are generally acceptable, as long as they are not a résumés or an ad for an open position in disguise.</p>

            <button>
            <h4>/r/programming is not a support forum</h4>
            <IoIosArrowDown/>
            </button>
            <p>/r/programming is not a support forum. If you have a question, check out /r/learnprogramming, /r/cscareerquestions, or Stack Overflow.</p>

            <button>
            <h4>spam</h4>
            <IoIosArrowDown/>
            </button>
            <p>Reddit may have relaxed its position on self-promotion, but /r/programming has not: If a majority of your contributions to reddit constitute self-promotion, you will be banned. If you immediately start submitting promotional material with a fresh account, you will be banned. The mods of /r/programming all have day jobs, we do not waste time handing out warnings. If you wish to use reddit as a promotional tool, please do so legitimately.</p>

        </div>
        </div>
        </>
    )
}
export default Rules;