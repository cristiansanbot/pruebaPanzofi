import { PiArrowFatDownBold } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { PiArrowFatUpBold } from "react-icons/pi";
import { PiArrowFatUpFill } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import "./Info.css"

function Info(props) {


    return (
        <>
            <div className="info">
                <div className="info-votes">
                    <PiArrowFatUpBold className="info-icon" />
                    <p>{props.votes}</p>
                    <PiArrowFatDownBold className="info-icon" />
                    <h4 className="info-titulo">{props.tittle}</h4>
                </div>

                <div className="info-close">
                    <MdClose className="info-icon" />
                    <p>Close</p>
                </div>
            </div>
        </>

    )
}
export default Info;