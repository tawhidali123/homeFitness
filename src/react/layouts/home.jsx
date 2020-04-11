import React, { Fragment } from "react";
import CreateExercise from "../components/createExercise/createExercise.jsx"
import DragDropBox from "../components/dragDropBox/dragDropBox.jsx";
import Dragable from "../components/dragable/dragable";

function HomePage (props){
    return(
        <Fragment>
            <CreateExercise></CreateExercise>

            <DragDropBox></DragDropBox>
            <Dragable></Dragable>
            <Dragable id="push-up-2" val="pull up"></Dragable>
            <DragDropBox></DragDropBox>
        </Fragment>
    )
}

export default HomePage;