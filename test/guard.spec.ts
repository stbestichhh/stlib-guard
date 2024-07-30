import { Guardian } from '../src/guardians';
import { Guard } from '../src/guards';
import { MetaException } from '../src/exceptions';

describe('Guard', () => {
  beforeAll(() => {
    Guardian.setMetadata('validKey', 'validValue');
  });

  afterAll(() => {
    Guardian.getMetas().clear();
  });

  class TestGuard extends Guard {
    constructor(metaKey: string) {
      super(metaKey);
      this.checkData();
    }

    protected checkData() {
      super.checkData();
    }
  }

  test('checkData should throw MetaException if metadata key is not found', () => {
    expect(() => new TestGuard('invalidKey')).toThrow(MetaException);
  });

  test('getMetas should return the metas map', () => {
    expect(Guard.getMetas()).toBe(Guardian.getMetas());
  });
});
