import { Guard } from '../guards';

export class Guardian {
  private static readonly metas: Map<string, any> = new Map<string, any>();

  public static setMetadata(key: string, data: any): void {
    this.metas.set(key, data);
  }

  public static removeMetadata(key: string): void {
    this.metas.delete(key);
  }

  public static useGuard(
    _guard: Guard,
    callback?: (...args: any[]) => void,
  ): void {
    if (callback) {
      callback();
    }
  }

  public static getMetas(key?: string) {
    return key ? this.metas.get(key) : this.metas;
  }
}
