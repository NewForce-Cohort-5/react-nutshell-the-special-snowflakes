import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const MessageForm = () => {
  return(
    <InputGroup>
      <FormControl placeholder="Enter Message" />
      <InputGroup.Button>Send</InputGroup.Button>
    </InputGroup>
  );
}