import { GraphQLDateTime } from 'graphql-iso-date';

import { chats, messages } from '../db';

const resolvers = {
  Date: GraphQLDateTime,

  Chat: {
    messages(chat: any) {
      return messages.filter(message => chat.messages.includes(message.id));
    },
    lastMessage(chat: any) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      return messages.find(message => message.id === lastMessage);
    },
  },

  Query: {
    chats() {
      return chats;
    },
    chat(_parent: any, args: any) {
      return chats.find(chat => chat.id === args.chatId);
    },
  },

  Mutation: {
    addMessage(root: any, { chatId, content }: any) {
      const chatIndex = chats.findIndex(chat => chat.id === chatId);
      if (chatIndex === -1) return null;
      const chat = chats[chatIndex];
      const lastMessageId = chat.messages[chat.messages.length - 1];
      const messageId = String(Number(lastMessageId) + 1);
      const message = {
        id: messageId,
        createdAt: new Date(),
        content,
      };
      messages.push(message);
      chat.messages.push(messageId);
      // The chat will appear at the top of the ChatsList component
      chats.splice(chatIndex, 1);
      chats.unshift(chat);
      return message;
    },
  },
};
export default resolvers;
