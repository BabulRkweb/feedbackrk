import React from 'react'

const Rating = (props) => {
  // console.log(props);
  return (
    <div>
      {
        Object.keys(props.data).map((item)=>{
          console.log(item);
        })
      }
    </div>
  )
}

export default Rating