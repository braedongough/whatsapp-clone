import React from 'react';
import { cleanup, render, getByTestId } from '@testing-library/react';

import MessagesList from './MessagesList';

describe('MessagesList', () => {
  afterEach(cleanup);

  const time = new Date('1 Jan 2019 GMT');

  it('renders messages data', () => {
    const messages = [
      {
        id: '1',
        content: 'foo',
        createdAt: time,
      },
      {
        id: '2',
        content: 'bar',
        createdAt: time,
      },
    ];

    const { getAllByTestId } = render(<MessagesList messages={messages} />);
    const match = getAllByTestId('message-item');
    const message1 = match[0];
    const message2 = match[1];

    expect(getByTestId(message1, 'message-content')).toHaveTextContent('foo');
    expect(getByTestId(message1, 'message-date')).toHaveTextContent('01:00');
    expect(getByTestId(message2, 'message-content')).toHaveTextContent('bar');
    expect(getByTestId(message2, 'message-date')).toHaveTextContent('01:00');
  });
});
