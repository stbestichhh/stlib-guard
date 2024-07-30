import { Guardian } from '../guardians';
import { MetaException } from '../exceptions';

export abstract class Guard {
  private readonly metas: Map<string, any>;

  protected constructor(protected readonly metaKey: string) {
    this.metas = Guardian.getMetas();
  }

  protected checkData() {
    if (!this.metas.get(this.metaKey)) {
      throw new MetaException(`No metadata found by key: ${this.metaKey}`);
    }
  }

  static getMetas(key?: string) {
    return Guardian.getMetas(key);
  }
}
