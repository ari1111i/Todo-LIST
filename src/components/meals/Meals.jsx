import React from 'react'
import { styled } from "styled-components";

const Meals = () => {
  return (
    <div>
        <StyledDiv>
           <StyledH>ReactMeals</StyledH>
           <DivCont>
            <StyledH1>Your Cart</StyledH1>
            <StyleDiv>
               7
            </StyleDiv>
           </DivCont>
        </StyledDiv>
    </div>
  )
}

const StyledDiv = styled('div')`
   background-color: #8A2B06;
   width: 1440px;
   height: 101px;
`
const StyledH = styled('h1')`
   width: 226px;
   height: 57px;
   margin-left: 120px;
   padding-top: 25px;
   color: white;

`

const DivCont = styled('div')`
   width: 249px;
   height: 59px;
   margin-top: -35px;
   margin-left: 1071px;
   border-radius: 30px;
   background: #5A1F08;
   color: white;
   font-size: 10px;
`

const StyledH1 = styled('h1')`
    margin-left: 80px;
    padding-top: 15px;
`

const StyleDiv = styled('div')`
   font-size: 20px;
   margin-top: -30px;
   margin-left: 180px;
   background-color:#8A2B06;
   width: 51px;
   height: 35px;
   border-radius: 20px;
   justify-content: center;
   display: flex;
   align-items: center;
`

export default Meals