import React from 'react'
import "./SubmitButton.css";
const SubmitButton = ({btnText,bgColor,fColor}) => {
  return (
    <>
    <button className='submit-btn' style={{backgroundColor: `${bgColor}`,color:`${fColor}`}}>{btnText}</button>
    </>
  )
}

export default SubmitButton