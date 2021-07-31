const text = 'Hello World ';

test('Will contain a text', () => {
  expect(text).toMatch(/World/);
});
