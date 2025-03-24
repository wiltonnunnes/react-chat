import React, { useRef, KeyboardEvent } from "react";

interface Props {
  onSendMessage: (messageText: string) => void
}

const MessageInput = ({ onSendMessage }: Props): React.JSX.Element => {
  const inputRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (inputRef.current && inputRef.current.textContent) {
      onSendMessage(inputRef.current.textContent);
      inputRef.current.textContent = "";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      buttonRef.current?.click();
    }
  };

  return (
    <form className="d-flex bg-white p-3">
      <div 
        className="input flex-grow-1 align-self-center" 
        contentEditable 
        aria-placeholder="Type something..." 
        ref={inputRef} 
        onKeyDown={handleKeyDown}>
      </div>
      <button 
        type="button" 
        className="btn btn-primary align-self-end" 
        onClick={handleClick} 
        ref={buttonRef}>
        Send
      </button>
    </form>
  );
};

export default MessageInput;