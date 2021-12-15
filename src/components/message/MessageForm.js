import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { MessageContext } from './MessageProvider';

export const MessageForm = () => {

  const { newMessage, editMessage, messageToEdit, setMessageToEdit } = useContext(MessageContext);
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    
    if (messageToEdit.id) {
      setMessage(messageToEdit.content);
    } else {
      setMessage(message);
    }
    //* Dependencies Matter!!
    //! Didn't need messages in the array
    //! it was actually messing me up
    //! Thanks Jordan! 
  }, [messageToEdit]);

  const handleSaveMessage = e => {
    e.preventDefault();

    // Check to make sure message has letters/characters
    // also there is no message to edit then make a new message
    if (message.length && !messageToEdit.id) {
      return newMessage({ 
        userId: parseInt(localStorage.getItem('react_nutshell_user')),
        content: message
      }).then(() => setMessage(""));
    } else {
      return editMessage({ 
        userId: parseInt(localStorage.getItem('react_nutshell_user')),
        content: message,
        id: messageToEdit.id
      }).then(() => {
        setMessage("");
        setMessageToEdit({});
      });
    }
  }

  return(
    <>
      <InputGroup>
        <FormControl 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSaveMessage(e);
            }
          }}
          placeholder="Enter Message" 
        />
        <Button onClick={handleSaveMessage} >Send</Button>
      </InputGroup>
    </>
  );
}