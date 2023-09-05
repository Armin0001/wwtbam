import { useEffect, useState } from "react";
import {data} from "../store/data"
import '../App.css';
import Question from "./Question";
import Score from './Score';
import Modal from 'react-modal';
import FiftyJoker from "./FiftyJoker";
import AskAudience from "./AskAudience";



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

function Questions() {

    const [myQuestion, setMyQuestion] = useState("")
    const [difficulty, setDifficulty] = useState(0)
    const [guess, setGuess] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenCheck, setIsOpenCheck] = useState(false);
    const [newSet, setNewSet] = useState(false);
    const [gamesRand, setGamesRand] = useState("")
    const [questionsRand, setQuestionsRand] = useState("")
    const [wasQuestions, setWasQuestions] = useState([])
    const [question, setQuestion] = useState("")
    const [correct, setCorrect] = useState("")
    const [valueOfCorrect, setValueOfCorrect] = useState("");
    const [myArr, setMyArr] = useState([])
    const [winnings, setWinnings] = useState(500)
    const [increment, setIncrement] = useState(0)
    const [myScoreboard, setMyScoreboard] = useState([])
    const [modalIsOpenWrong, setModalIsOpenWrong] = useState(false)
    // const [myCorrect, setMyCorrect] = useState("")


    // Ask Audience
    // 50-50
    // Ask a Friend
    
    
    
    
    //   console.log(guess, " this is the guess")
    //   let {gamesRandNum, questionsRandNum} = getRandom()
    //   setGamesRand(gamesRandNum)
    //   setQuestionsRand(questionsRandNum)
    //   console.log(gamesRandNum, questionsRandNum, " are the gamesrandnum and quesitionsrandnum")
    //   let {currentQuestion, correctAnswer} = getNextQuestion(gamesRandNum, questionsRandNum)
    //   setQuestion(currentQuestion)
    //   setCorrect(correctAnswer)
    
    
    
    //   // setWasQuestions(wasQuestion)
    //   // const correct = data.games[gamesRand].questions[questionsRand].correct
    //   // console.log(correct, " this is the correct from inside useEffect")
    //   // setMyCorrect(correct)
    //   // localStorage.setItem('correct', JSON.stringify(myCorrect));
    
    useEffect(() => {


      getNextQuestion()




    }, [])


      console.log(guess, " this is the guess")
      
      // console.log(gamesRandNum, questionsRandNum, " are the gamesrandnum and quesitionsrandnum")
      // let {currentQuestion, correctAnswer} = getNextQuestion()
      // setQuestion(currentQuestion)
      // setCorrect(correctAnswer)


      const scoreboard = ['500', '1000', '2000', '3000', '5000', '7000', '10000', '20000', '30000', '50000', '100000', '250000', '500000', '1000000'] 
    function getRandom() {
        var gamesRandNum = Math.floor(Math.random() * (4 - 0 + 1)) // 0-4 
        var questionsRandNum = Math.floor(Math.random() * (15 - 0 + 1)) //0-15
        const myData = {gamesRandNum, questionsRandNum}
        return myData
    }

    // "questions" : [
    //     {
    //         "question" : "In what children's game are participants chased by someone designated \"It\"?",
    //         "content" : [
    //             "Tag",
    //             "Simon Says",
    //             "Charades",
    //             "Hopscotch"
    //         ],
    //         "correct" : 0
    //     },

    //Check Checkpoints function 
    //Wrong answer display & display winnings use model for example and check if it is wrong (Hint, u kodu se nalazi već)
    //Install Tailwind to make use of Tailwind cards, free examples or make one your self
    //


    function getNextQuestion() {
      let {gamesRandNum, questionsRandNum} = getRandom()
      try {
      var wasQuestion = []
      var counter = 0;
      // for(var i=0; i<=counter; i++) {
      
      console.log(gamesRandNum, " value of gamesRandNum")
      // setGamesRand(gamesRandNum)
      // setQuestionsRand(questionsRandNum)
      console.log(data.games[gamesRandNum].questions[questionsRandNum].content, " should be the given answers")
      // let myArr = []
                                                                                // setMyArr(prevArr => [...prevArr, inputValue]);
      data.games[gamesRandNum].questions[questionsRandNum].content.forEach((element) => myArr.push(element));
      console.log(myArr.slice(4), " this is myArr")
      setMyArr(myArr.slice(4))
      const correctIndex = data.games[gamesRandNum].questions[questionsRandNum].correct
      setCorrect(correctIndex)
      setValueOfCorrect(data.games[gamesRandNum].questions[questionsRandNum].content[correctIndex]);
      // setValueOfCorrect = valueOfCorrect
      console.log(correctIndex, " index of correct from Questions")
      console.log(data.games[gamesRandNum].questions[questionsRandNum].content[correctIndex], " is the right answer")
      localStorage.setItem('correct', JSON.stringify(correctIndex));
      var value = JSON.parse(localStorage.getItem('scoreboard'));
      setMyScoreboard(value)
      if (wasQuestion.length == 0) {
        // console.log(value.reverse()[wasQuestions.length], " valid?")
        localStorage.setItem('winnings', JSON.stringify(0));
      } else {
        console.log(value.reverse()[wasQuestions.length], " check valid")
      }
      // localStorage.setItem('winnings', JSON.stringify(value.reverse()[wasQuestions.length-2]));
      const items = JSON.parse(localStorage.getItem('correct'));
      setWinnings(JSON.parse(localStorage.getItem('correct')));
      
    if (items) {
     console.log(items, " is from the local storage")
    }
      // setMyCorrect(correct)
      // console.log(myCorrect, "myCorrect value")
      const question = data.games[gamesRandNum].questions[questionsRandNum].question
      setQuestion(question)
      if (!wasQuestions.includes(question)) {
          // wasQuestion.push(question)
          setWasQuestions(prevArr => [...prevArr, question])
      }
      // useEffect(() => {
      
      //   }, [wasQuestion]);
        // console.log(wasQuestion, " this is the wasQuestion")
        // const nextQ = {question, correct}
    // }
        
        // // setCorrect(correctAnswer)
        // return nextQ;



      }
      catch(e) {
        console.log(e, " this was the error")
        getNextQuestion()
    }
    }

    
    
    // console.log(data.games)
    // console.log()

      const handleClick = (e) => {
        console.log(e.target.innerHTML)
        console.log(correct, " index of correct")
        
        const correctValue = data.games[gamesRand].questions[questionsRand].content[correct]
      }

      function checkAnswer(e) {
        e.preventDefault()
        // console.log(guess, " this was the guess again")
        // const correct = data.games[gamesRand].questions[questionsRand].correct
        console.log(correct, " index of correct")
        console.log(valueOfCorrect, " is the value of correct")
        // const correctValue = data.games[gamesRand].questions[questionsRand].content[correct]
        // console.log(correctValue, " is the correct answer")
        console.log(guess, " this was the guess")
        if (guess == valueOfCorrect) {
          console.log("This is the correct answer")
          var value = JSON.parse(localStorage.getItem('scoreboard'));
          console.log(wasQuestions.length, " total length of the questions that were")
          console.log(value.reverse()[wasQuestions.length-2], " the current winnings")
          setIncrement(increment+1)
          var index = increment
          localStorage.setItem('winnings', JSON.stringify(value.reverse()[index+1]));
          // console.log(value, " the scoreboard")
          setIsOpenCheck(true)
          getNextQuestion();
          
        } else {
          console.log("This was the incorrect answer")
          modalIsOpenWrong(true)
        }

      }

      // function checkAnswerNo(e) {
      //   e.preventDefault()

      // }

      let subtitle;
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "blue";
      }
    
      function closeModal() {
        setIsOpen(false);
      }


      
      const checkDecisionYes = (e) => {
        e.preventDefault()
        // setWinnings(myScoreboard.reverse()[increment])
        console.log("Winnings set")
      }

      const checkDecisionNo = (e) => {
        e.preventDefault()
        // setWinnings(myScoreboard.reverse()[increment])
        console.log("Winnings set")
        setIsOpenCheck(false)
      }




    return(
<>
<div className="questionsStyle">
<img className='imgStyle' src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_WhoWantsToBeAMillionaire_UK_image1600w.jpg"></img>
<div>
<div className="scoreStyle">
    <div className="jokerStyles">
        <AskAudience />
        <FiftyJoker />
        </div>
        {/* <h1>Your score :</h1> */}
        {/* {scoreboard.forEach((number) =>
            <h1>{number}</h1>
            )} */}
            {scoreboard.reverse().map((answer, i) => {     
                            
           // Return the element. Also pass key    // scoreboard 500 === i 
           return (<h1 className={scoreboard.reverse()[i] == scoreboard.reverse()[increment] ? "currentStyle" : "scoreStyle"}>{answer}</h1>) 
        })}                                 
    
        

</div>
      </div>

        {/* <div className='fitStyle'> */}
       
      </div>
      <div className="pageContent">
        <div className="parent">
<div className="div1"><h1 className="questionStyle">{question}</h1> </div>
        {myArr.map(function(object, i){
                     return <div className={`div${i+2}`}>
                     <h1 onClick={() => { setIsOpen(true); setGuess(object);}}>{i === 1 ? 'B ' : (i === 2 ? 'C ' : (i === 3 ? 'D ' : 'A ')) }{object}</h1>
                     </div>
                   
    })}
{/* nClick={() => { func1(); func2();}}
onClick={(e) => setIsOpen(true)} */}
</div>
            
        
                    
        <Modal
        isOpen={modalIsOpen} //true?
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="closeStyle" onClick={closeModal}>X</p>
        <h2 className="textStyle" ref={(_subtitle) => (subtitle = _subtitle)}>Final Answer??</h2>
        <div>Are you sure? Is that your final answer?</div>
        <form>
          {/* <input /> */}
          <div className="inputStyle">
          <button className="btnStyle" onClick={(e) => {checkAnswer(e); setIsOpen(false)}}>No, let me think some more</button>
          <button className="btnStyleConfirm" onClick={(e) => {checkAnswer(e); setIsOpen(false)}}>Yes</button>
          </div>
         
        </form>
      </Modal>
                    
        
        </div>
        <Modal
        isOpen={modalIsOpenCheck} //true?
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="closeStyle" onClick={closeModal}>X</p>
        <h2 className="textStyle" ref={(_subtitle) => (subtitle = _subtitle)}>Nice job! Cashout or continue?</h2>
        <div>What will it be?</div>
        <form>
          {/* <input /> */}
          <div className="inputStyle">
          <button className="btnStyle" onClick={(e) => checkDecisionNo(e)}>Yes, let me take the money</button>
          <button className="btnStyleConfirm" onClick={(e) => {checkDecisionYes(e); setIsOpenCheck(false)}}>Lets continue</button>
          </div>
         
        </form>
      </Modal>


      
      {/* </div> */}
    </>
    )




}

export default Questions;

{/* <div className="div2">1 </div>
<div className="div3">2 </div>
<div className="div4">3 </div>
<div className="div5">4 </div> */}


// return <div className={`div${i+2}`}>
//                     <h1>{i === 1 ? 'B ' : (i === 2 ? 'C ' : (i === 3 ? 'D ' : 'A ')) }{object}</h1>
//                     <h2>{i === 1 && "i is 1"}</h2>
//                     </div>