import { useEffect, useState } from "react";
import {data} from "../store/data"
import '../App.css';
import FiftyJoker from "./FiftyJoker";
import AskAudience from "./AskAudience";
import Modal from 'react-modal';
// import {myScore} from "../store/score"



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function Score(props) {

    const [playerScore, setPlayerScore] = useState(500)
    const [prize, setPrize] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(false)


    useEffect(() => {
        localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
        const myPrize = JSON.parse(localStorage.getItem('winnings'));
        console.log(myPrize, " myPrize from Score")
        setClicked(false)
        if (myPrize == 0) {
        setPrize(500)
    } else {
        setPrize(myPrize)
    }
    }, [props])

    // 50-50
    // Ask Audience
    // Ask a Friend
    // console.log(myScore, " is my score")
    const scoreboard = ['500', '1000', '2000', '3000', '5000', '7000', '10000', '20000', '30000', '50000', '100000', '250000', '500000', '1000000'] 

    // function createScore() {
    //     for(i = 500, i < 1000000, i++) {
    //         scoreboard.push(i)
    //         i += 500
    //     }
    // }
    function incrementScore() {
        var index = (scoreboard.indexOf(playerScore) + 1) //0
        console.log(scoreboard[index + 1]) // 1000
        setPlayerScore(scoreboard[index + 1])
    }



    let subtitle;
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "blue";
      }
    
      function closeModal() {
        setIsOpen(false);
      }



    // incrementScore() 

    function checkAnswer(e) {
        e.preventDefault()
        setClicked(true)
    }

    return(
<>


            
    </>
    )
    
    
    
    
}

export default Score;

{/* <div className="div1"><h1 className="">{question}</h1> </div>
        {myArr.map(function(object, i){
                return <div className={`div${i+2}`}>
                    <h1>{object}</h1>
                    </div>
                    })} */}
{/* <div className="div2">1 </div>
<div className="div3">2 </div>
<div className="div4">3 </div>
<div className="div5">4 </div> */}