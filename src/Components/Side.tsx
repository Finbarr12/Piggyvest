import React from "react";
import styled from "styled-components";
// import {IoMenu} from "react-icons/io"
import pix from "./Assets/piggyvestlogo.svg"
const Side = () => {
  return <Container>
    <Holder>
      {/* <IoMenu/> */}
      <img src={pix}/>
    </Holder>
  </Container>;
};

export default Side;

const Container = styled.div`
  width: 270px;
  height: 100vh;
  background-color: #062863;
`;

const Holder = styled.div``
