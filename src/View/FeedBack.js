import React, { useEffect, useState } from "react";
import Rating from "./Rating";

function FeedBack() {
  useEffect(() => {
    fecthData()
  },[])
  
  const [feedBackstate, setfeedBackstate] = useState({
    name: "",
    email: "",
    message : ""
  })
  const [fetchAll, setfetchAll] = useState({})
  const submitData = (e) => {
    e.preventDefault();
    const {name, email, message} = feedBackstate;
      const apifetch = fetch(`https://test-9eded-default-rtdb.asia-southeast1.firebasedatabase.app/dataFeed.json`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      email,
                      message
                    })
                }
            );
      if(apifetch){
        alert("Save Successfully");
      }
      else{
        alert("Failed!!! Try Again");
      }

      setfeedBackstate({
        name: "",
        email: "",
        message : ""
      })
  }
  const inputElement = (e) => {
      const {name, value} = e.target;
      setfeedBackstate({...feedBackstate, [name] : value});
  }
  const fecthData = async() => {
      const url = await fetch(`https://test-9eded-default-rtdb.asia-southeast1.firebasedatabase.app/dataFeed.json`);
      const jsonUrl = await url.json();
      getData(jsonUrl);
  }
  const getData = () => {
    
  }
  return (
    <>
      <div className="container">
      <h1>Feedback Form</h1>
        <form method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={inputElement} value={feedBackstate.name}/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={inputElement} value={feedBackstate.email}/>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required onChange={inputElement} value={feedBackstate.message}>{feedBackstate.message}</textarea>
          <input type="submit" value="Submit" onClick={submitData}/>
        </form>
      </div>

      <Rating
        data={fetchAll}
      />
    </>
  )
}

export default FeedBack;
