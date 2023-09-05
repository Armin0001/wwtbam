import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";



export function Histogram(prop) {
    // const [arr, setArr] = useState([])myA  
    
    const [arr, setArr] = useState([])
    const options = {
      title: "Lengths of dinosaurs, in meters",
    legend: { position: "none" },
  };


  console.log(prop.prop, " is the prop from Histogram")
  const myProp = prop.prop
  //1 - 60; 2 - 15; 3 - 20; 4 - 5
  // function getRandomNumbers() {
    useEffect(() => {
    var check = JSON.parse(localStorage.getItem('correct'));
    var num1 = Math.floor(Math.random() * 101); //1 - 100

    var num2 = Math.floor(Math.random() * 101);
    var num3 = Math.floor(Math.random() * 101);
    // var num4 = Math.random(100+1) 
    var num4 = 100 - (num1+num2+num3)
    // 0
      while(num4 <= 0 && num1 != 0 && num2 != 0 && num3 != 0) {
        var num1 = Math.floor(Math.random() * 101);

        var num2 = Math.floor(Math.random() * 101);
        var num3 = Math.floor(Math.random() * 101);
        // var num4 = Math.random(100+1)
        var num4 = 100 - (num1+num2+num3)
      }
      var myArr = [num1, num2, num3, num4]
    // if () {
    //   
    //   console.log(myArr, " is myArr")
    // } else {
    //   getRandomNumbers()
    // }
    var index = myArr.indexOf(Math.max(...myArr))
    var fakeIndex =  myArr.indexOf(Math.min(...myArr))
    console.log(index, " is the index value")
    if (index == myProp) {
      console.log(myArr, " inside the if statement")
      setArr(myArr)
      // return myArr
    }
    else {
      const swapElements = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        // return array
    };
        var num5 = Math.floor(Math.random() * 11); 
        if (num5 != 5) { 
        swapElements(myArr, index, myProp)
        }
        else {
        swapElements(myArr, fakeIndex, myProp)
        }
        // swapElements(myArr, index, prop.prop)
        console.log("items swapped, now the array looks like this ", myArr)
        setArr(myArr)
        // return myArr
      // var temp = myArr[prop.prop]
      // var tempIndex = myArr.indexOf(temp)
      // myArr[prop.prop] = myArr[myArr.indexOf(Math.max(...myArr))] // instead of Math.max(...myArr)
      // myArr[tempIndex] = temp;
      // console.log(myArr, " inside the else statement")
      // return myArr 
    }
    // console.log(index)
    // var temp = 
  }, [])
  
  // const prop = 40; // Replace with your prop value
  // var myArray = getRandomNumbers();
  console.log(arr, " is the arr")
  
  // console.log(myArr.at(prop), " is the myArr at prop")
  // var temp = myArr[0]
  // for (var i = 0; i< myArr.length; i++) {
  //   if (myArr[i] > temp) {
  //     temp = myArr[i]
  //   }
    // console.log(temp, " is the temp value")
    // console.log(prop, " is the index of the correct")
    // // console.log(myArr[temp], " is the current myArr at the prop index")
    // // // console.log(myArr.indexOf())
    // console.log(myArr.indexOf(temp), " is the current top in myArr")
    // var tempIndex = myArr.indexOf(temp)
    // if (myArr[prop] != myArr.indexOf(temp)) {
      
    // myArr[tempIndex] = myArr[prop]
     
    // myArr[prop] = temp;
  // }
    // myArr[]

  // }
  // console.log(`prop: ${prop}, num1: ${num1}, num2: ${num2}, num3: ${num3}`);

  // var answerB = 40;
  // var answerC = 0;
  // var answerD = 0;

  // function calculateOthers(props) {
  //   var num1 = Math.random()
  //   var num2 = Math.random()
  //   var num3 = Math.random()
  //   console.log(num1, num2, num3, " are the random numbers")
  //   var factor = 1/(num1+num2+num3)
  //   console.log(factor, " is the factor") 
  //   console.log(factor*num1, " should be 1")
  // }
  // calculateOthers(audienceA)

  // const num = Number(prop.prop)
  // const num = audienceA.audienceA

  const data = [
    
    
    ["Answer", "Density", { role: "style" }],
    ["A", arr[0], "blue"], // RGB value
    ["B", arr[1], "blue"], // English color name
    ["C", arr[2], "blue"],
    ["D", arr[3], "blue"], // CSS-style declaration
  ];
  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  
  );
}
