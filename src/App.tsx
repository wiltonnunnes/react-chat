import React, { useState } from 'react';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  let webSocket = new WebSocket("http://127.0.0.1:80");

  return (
    <div className="container d-flex flex-column vh-100 p-3">
      <MessageList messages={messages} />
      <MessageInput 
        onSendMessage={(messageText) => {
          setMessages(
            [
              ...messages,
              messageText
            ]
          );
        }}
      />
    </div>
  );
};

export default App;