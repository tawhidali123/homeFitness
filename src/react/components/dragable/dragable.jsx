import React from "react";
import PropTypes from "prop-types";


function Dragable(props) {
    const handdleDrag = event => {
        event.dataTransfer.setData("exercise", JSON.stringify({id: event.target.id}));
    }

    const disableDrag = event => event.stopPropagation();

    return (
        <p 
            id={props.id}
            draggable={props.draggable}
            onDragStart={handdleDrag}
            onDragOver={disableDrag}
        > 
            { props.val } 
        </p>
    )
}

Dragable.defaultProps = {
    val: "push up",
    draggable: true,
    id: "push-up"
}

Dragable.prototype = {
    id: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired,
    draggable: PropTypes.bool
}

export default Dragable;