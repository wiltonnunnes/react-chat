import React from "react";
import Message from "./Message";

interface Props {
  messages: string[]
}

const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex-grow-1 d-flex flex-column-reverse bg-secondary-subtle p-3">
      <div className="d-flex flex-column">
        {messages.map(text => (
          <Message>{text}</Message>
        ))}
      </div>
    </div>
  );
};

export default MessageList;