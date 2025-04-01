import React, { useEffect } from "react";
import { ChatServerConnection } from "../utils/ChatServerConnection";

type Props = {
  children: string
}

const Message = ({ children }: Props) => {

  useEffect(() => {
    let connection = ChatServerConnection.getInstance();
    connection.write(children);
  }, []);

  return <p className="bg-white align-self-end p-1 rounded">{children}</p>
};

export default Message;