import React, { useEffect } from "react";

type Props = {
  children: string
}

const Message = ({ children }: Props) => {
  return <p className="bg-white align-self-end p-1 rounded">{children}</p>
};

export default Message;