import React, { useState } from 'react';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import { ChatServerConnection } from './utils/ChatServerConnection';

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  let connection = ChatServerConnection.getInstance();
  connection.start();

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