import { useEffect, useState } from "react";
import {data} from "../store/data"
import '../App.css';

function Question(props) {

    

    return(
<>
<div className="questionStyle">
        <h1>{props}</h1>
        </div>
    </>
    )




}

export default Question;

{/* <div className="div2">1 </div>
<div className="div3">2 </div>
<div className="div4">3 </div>
<div className="div5">4 </div> */}