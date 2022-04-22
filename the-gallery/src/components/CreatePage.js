import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const createpage = () => {
  return (
    <div>
      <h1>GET IN TOUCH</h1>
      <p>You have any questions? We would love to hear from you!</p>
      <p>You have a piece of advice or a suggestion that you will like to share with us? Feel free to contact us!</p>
      <Container>
          <textarea>Name</textarea>
          <textarea>Email</textarea>
          <textarea>Subject</textarea>
          <textarea>Message</textarea>
      </Container>
      <Button name={'Submit'}/>
    </div>
  );
};

export default createpage;
const Container = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    min-height: 60px;1
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0
`