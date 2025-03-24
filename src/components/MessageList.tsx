import React from "react";

interface Props {
  messages: string[]
}

const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex-grow-1 d-flex flex-column-reverse bg-secondary-subtle p-3">
      <div className="d-flex flex-column">
        {messages.map(text => (
          <p className="bg-white align-self-end p-1 rounded">{text}</p>
        ))}
      </div>
    </div>
  );
};

export default MessageList;