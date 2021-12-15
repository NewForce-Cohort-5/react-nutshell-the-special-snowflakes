import React, { useContext, useEffect } from "react";
import { Message } from "./Message";
import { MessageForm } from "./MessageForm";
import { MessageContext } from "./MessageProvider";

export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext);

  useEffect(() => {
    getMessages()
  }, []);

  return(
    <>
    {
      messages.length ? messages.map(m => {
        return <Message key={m.id} m={m} />;
      }) : <div>You don't have any messages</div>
    }
    <MessageForm />
    </>
  );
}