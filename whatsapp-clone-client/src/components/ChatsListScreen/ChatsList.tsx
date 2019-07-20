import React, { FC } from 'react';
import moment from 'moment';

import { chats } from '../../db';

const ChatsList: FC = () => (
  <div>
    <ul>
      {chats.map(chat => {
        console.log(chat.lastMessage);
        return (
          <li key={chat.id}>
            <img src={chat.picture} alt="Profile" className="src" />
            <div>{chat.name}</div>
            {chat.lastMessage && (
              <div>
                <div>{chat.lastMessage.content}</div>
                <div>{moment(chat.lastMessage.createdAt).format('HH:mm')}</div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);
export default ChatsList;

/* 

          {chat.lastMessage && (
            <React.Fragment>
              <div>{chat.lastMessage.content}</div>
              <div>{chat.lastMessage.createdAt}</div>
            </React.Fragment>
          )}
*/
