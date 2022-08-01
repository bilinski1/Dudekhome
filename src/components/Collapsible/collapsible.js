import React, {useState} from "react";
import "./collapsible.scss"
import useCollapse from "react-collapsed";
import {FiArrowUpCircle} from "@react-icons/all-files/fi/FiArrowUpCircle";
import {FiArrowDownCircle} from "@react-icons/all-files/fi/FiArrowDownCircle";


const CollapsibleItem = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    function handleOnClick() {
        setExpanded(!isExpanded);
    }

    return (

        <div className="collapsesection">
            <div className="itemwrapper">
                <h5>{props.title}</h5>
                <div className="icon content2" {...getToggleProps({onClick: handleOnClick})}>
                    {isExpanded ? <div><FiArrowUpCircle size={30}/></div> : <div><FiArrowDownCircle size={30}/></div>}
                </div>
            </div>

            <div className="collapsible">
                <div {...getCollapseProps(props)}>
                    <div className="content2">
                        {props.area}
                        {props.tel}
                        {props.technologia}
                        {props.cost}
                        {props.metraz} <br />





                    </div>
                </div>
            </div>
        </div>

    )
}

export default CollapsibleItem