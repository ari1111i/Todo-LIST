import React from 'react'
import { styled } from "styled-components";

const MealItem = () => {
  return (
    <div>
         <DivStyled1>
          <Sth1>Delicious Food, Delivered To You</Sth1>
          <Stpp>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </Stpp>
          <Stpp>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by  experienced chefs!
          </Stpp>
        </DivStyled1>
    </div>
  )
}

const DivStyled1 = styled("div")`
  background-color: #383838;
  width: 500px;
  height: 200px;
  margin-left: 450px;
  border-radius: 20px;
  padding-top: 100px;
  color: white;
  align-items: center;
  margin-top: -1150px;
  box-shadow: 0px 1px 10px 1px


`;

const Sth1 = styled('h1')`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: -60px;
`
const Stpp = styled('div')`
   margin-left: 30px;
`

export default MealItem