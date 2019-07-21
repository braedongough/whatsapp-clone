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
};
export default resolvers;
