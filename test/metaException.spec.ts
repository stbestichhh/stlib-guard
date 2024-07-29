import { MetaException } from '../src/exceptions';

describe('MetaException', () => {
  test('should create an instance of MetaException with correct properties', () => {
    const message = 'Test message';
    const options = { key: 'value' };
    const exception = new MetaException(message, options);

    expect(exception).toBeInstanceOf(MetaException);
    expect(exception.message).toBe(message);
    expect(exception.options).toBe(options);
    expect(exception.code).toBe(400);
  });

  test('serialize should return correct serialized object', () => {
    const message = 'Test message';
    const options = { key: 'value' };
    const exception = new MetaException(message, options);
    const serialized = exception.serialize();

    expect(serialized).toEqual({
      name: 'MetaException',
      message: message,
      code: 400,
      options: options,
      stack: expect.any(String),
    });
  });
});
