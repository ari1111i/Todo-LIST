import React,{ useState } from 'react'
import { styled } from "styled-components";
import './Button.css'

const Button = () => {
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const [isClicked, setIsClicked] = useState(false);
    const handleAddButtonClick = () => {
      setIsClicked(true);
    };

  
  return (
    <StyledDives>
       <div className={`content ${isClicked ? 'strikethrough' : ''}`}>
        <Stp>Sushi</Stp>
        <Stp>Price: 22.99$</Stp>
      </div>
      <div>
        {!isClicked ? (
          <React.Fragment>
            <ButtonSt onClick={handleAddButtonClick}>+ Add</ButtonSt>
          </React.Fragment>
        ) : (
          <BtnvStyle disabled>Added</BtnvStyle>
        )}
         <Stp>Amount: {count}</Stp>
      <ButtonSt onClick={handleIncrement}>+</ButtonSt>
      </div>


      <div className={`content ${isClicked ? 'strikethrough' : ''}`}>
        <Stp>Schnitzel</Stp>
        <Stp>Price: 16.00$</Stp>
      </div>
      <div>
        {!isClicked ? (
          <React.Fragment>
            <ButtonSt onClick={handleAddButtonClick}>+ Add</ButtonSt>
          </React.Fragment>
        ) : (
          <BtnvStyle disabled>Added</BtnvStyle>
        )}
         <Stp>Amount: {count}</Stp>
      <ButtonSt onClick={handleIncrement}>+</ButtonSt>
      </div>

      <div className={`content ${isClicked ? 'strikethrough' : ''}`}>
        <Stp>Barbeque Burger</Stp>
        <Stp>Price: 12.99$</Stp>
      </div>
      <div>
        {!isClicked ? (
          <React.Fragment>
            <ButtonSt onClick={handleAddButtonClick}>+ Add</ButtonSt>
          </React.Fragment>
        ) : (
          <BtnvStyle disabled>Added</BtnvStyle>
        )}
         <Stp>Amount: {count}</Stp>
      <ButtonSt onClick={handleIncrement}>+</ButtonSt>
      </div>

      
    </StyledDives>
  )
}






const StyledDives = styled('div')`
   background-color: white;
   width: 1039px;
   height: 564px;
   margin-top: 50px;
   margin-left: 201px;
   border-radius: 20px;
`
const BtnvStyle = styled('button')`
&:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-radius: 20px;
    width: 100px;
    height: 30px;
    margin-left: 900px;
    margin-top: -80px;
}
`

const ButtonSt = styled('button')`
    background-color: #8A2B06;
    color: white;
    border: none;
    border-radius: 20px;
    width: 100px;
    height: 30px;
    margin-left: 900px;
    margin-top: -80px;
`

const Stp = styled('div')`
    font-size: 20px;
    margin-left: 30px;
    margin-top: 10px;
    color: chocolate;
`

export default Button