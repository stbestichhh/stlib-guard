import { Guard } from '../guards';

export class Guardian {
  public static readonly metas: Map<string, any> = new Map<string, any>();

  public static setMetadata(key: string, data: any): void {
    Guardian.metas.set(key, data);
  }

  public static removeMetadata(key: string): void {
    Guardian.metas.delete(key);
  }

  public static useGuard(_guard: Guard, callback?: (...args: any[]) => void): void {
    if (callback) {
      callback();
    }
  }
}
