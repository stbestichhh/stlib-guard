import { Guardian } from '../src/guardians';
import { MetaGuard } from '../src/guards';

describe('Guardian', () => {
  afterEach(() => {
    Guardian.getMetas().clear();
  });

  test('setMetadata should add metadata to the map', () => {
    Guardian.setMetadata('testKey', 'testValue');
    expect(Guardian.getMetas().get('testKey')).toBe('testValue');
  });

  test('removeMetadata should remove metadata from the map', () => {
    Guardian.setMetadata('testKey', 'testValue');
    Guardian.removeMetadata('testKey');
    expect(Guardian.getMetas().has('testKey')).toBe(false);
  });

  test('useGuard should execute the callback', () => {
    Guardian.setMetadata('testKey', 'testValue');
    const callback = jest.fn();
    const guard = new MetaGuard('testKey');
    Guardian.useGuard(guard, callback);
    expect(callback).toHaveBeenCalled();
  });
});
