import React from "react";
import { styled } from "styled-components";

const MealForm = () => {
  return (
    <div>
      <DivStyled>
        <ImgSvg
          src="https://www.healthkart.com/connect/wp-content/uploads/2016/05/banner-6.jpg"
          alt=""/>
      </DivStyled>
    </div>
  );
};

const ImgSvg = styled("img")`
  width: 1440px;
  height: 330px;
`;

const DivStyled = styled("div")`
  background-color: #383838;
  width: 1440px;
  height: 1500px;
`;


export default MealForm;
