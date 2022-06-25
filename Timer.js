import React, { useState, useEffect } from 'react';

function Timer() {
   const [currentDateTime, setCurrentDateTime] = useState(new Date());
   useEffect(
      () => {
         let setTime = () => {
            console.log("setTime is called");
            setCurrentDateTime(new Date());
         }
         let interval = setInterval(setTime, 1000);
         return () => {
            clearInterval(interval);
         }
      },
      []
   );
   return (
      <div>
        
         <h1><u>TIMER</u></h1>
        <h1>Current Date is :{currentDateTime.toLocaleDateString()}</h1>
         <p><h1>The current time is :{currentDateTime.toLocaleTimeString()}</h1></p>
      </div>
   );
}
export default Timer;
