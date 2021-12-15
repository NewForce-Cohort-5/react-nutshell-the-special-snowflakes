import React, { useContext } from "react";
import { MessageContext } from "./MessageProvider";

export const Message = ({ m }) => {

  const { setMessageToEdit } = useContext(MessageContext);

  return(
    <p>
      {m.user.email}: {m.content}&nbsp;
      {
        m.userId === parseInt(localStorage.getItem('react_nutshell_user')) ?
        <i onClick={() => setMessageToEdit(m)} className="bi bi-pencil-square"></i> : null
      }
    </p>
  );
}