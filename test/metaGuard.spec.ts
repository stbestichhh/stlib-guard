import { MetaGuard } from '../src/guards';
import { Guardian } from '../src/guardians';
import { MetaException } from '../src/exceptions';

class TestMetaGuard extends MetaGuard {
  public checkData(): void {
    super.checkData();
  }
}

describe('MetaGuard', () => {
  beforeAll(() => {
    Guardian.setMetadata('validKey', 'validValue');
  });

  afterAll(() => {
    Guardian.metas.clear();
  });

  test('MetaGuard constructor should call checkData', () => {
    const checkDataSpy = jest.spyOn(TestMetaGuard.prototype, 'checkData');
    new TestMetaGuard('validKey');
    expect(checkDataSpy).toHaveBeenCalled();
  });

  test('checkData should throw MetaException if metadata key is not found', () => {
    Guardian.removeMetadata('invalidKey');
    expect(() => new TestMetaGuard('invalidKey')).toThrow(MetaException);
  });

  test('checkData should not throw if metadata key is found', () => {
    expect(() => new TestMetaGuard('validKey')).not.toThrow();
  });
});
