import React, { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = (props) => {

  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return fetch('http://localhost:8088/messages')
    .then(res => res.json())
    .then(setMessages);
  }

  const newMessage = m => {
    return fetch('http://localhost:8088/messages', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(m)
    }).then(getMessages);
  }

  const editMessage = m => {
    return fetch(`http://localhost:8088/messages/${m.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(m)
    }).then(getMessages);
  }

  const deleteMessage = id => {
    return fetch(`http://localhost:8088/messages/${id}`, {
      method: "DELETE"
    }).then(getMessages);
  }

  return(
    <MessageContext.Provider value={{
      messages, getMessages, newMessage, editMessage, deleteMessage
    }}>
      {props.children}
    </MessageContext.Provider>
  );
}