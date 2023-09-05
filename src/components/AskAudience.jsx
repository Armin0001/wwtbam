
import Modal from 'react-modal';
import {useState, useEffect} from "react"
import {Histogram} from "./Histogram"


// type HistogramProps = {
//     width: number;
//     height: number;
//     data: number[];
//   };


const AskAudience = () => {

    const [myCorrect, setMyCorrect] = useState("")

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('correct'));
      if (items) {
       setMyCorrect(items);
      }
    }, []);

    

    console.log(myCorrect, " is the index of the correct from AskAudience")

    const data = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9];
    
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
    
      const height = 700;
      const width = 400;

    const [modalIsOpen, setIsOpen] = useState(false);

    let subtitle;
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = "blue";
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      const num = 50;
      const numB = 30;
    return(
        <>
       <p onClick={(e) => setIsOpen(true)}>Ask Audience</p>
       {/* <Histogram />  */}
       <Modal
        isOpen={modalIsOpen} //true?
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="histogramWidth">
          <Histogram prop={myCorrect} />
        {/* <Histogram width={width} height={height - 40} data={data} /> */}
        {/* audienceB={num} audienceC={num} audienceD={num} */}
        </div>
        <p className="closeStyle" onClick={closeModal}>X</p>
      </Modal>
      </>
    )
}


export default AskAudience;
        // <h2 className="textStyle" ref={(_subtitle) => (subtitle = _subtitle)}>Final Answer??</h2>
        // <div>Are you sure? Is that your final answer?</div>
        // <form>
        //   {/* <input /> */}
        //   <div className="inputStyle">
        //   <button className="btnStyle" onClick={(e) => setIsOpen(false)}>No, let me think some more</button>
        //   <button className="btnStyleConfirm">Yes</button>
        //   </div>
        //   {/* onClick={(e) => checkAnswer(e)} */}
        // </form>