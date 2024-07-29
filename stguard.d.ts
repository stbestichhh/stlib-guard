export abstract class Guard {
  private readonly metas: Map<string, any>;
  protected constructor(metaKey: string);
  protected checkData(): void {}
  static getMetas(): Map<string, any>;
}

export class MetaGuard extends Guard {
  constructor(metaKey: string);
  protected checkData(): void;
}

export class Guardian {
  public static readonly metas: Map<string, any> = new Map<string, any>();
  public static setMetadata(key: string, data: any): void;
  public static removeMetadata(key: string): void;
  public static useGuard(_guard: Guard, callback?: (...args: any[]) => void): void;
}

export abstract class GuardException extends Error {
  abstract readonly code: number;
  readonly message: string;
  readonly name: string;
  readonly options?: { [key: string]: string | number };
  protected constructor(
    message: string,
    options?: { [key: string]: string | number },
  );
  serialize(): {
    name: string;
    message: string;
    code: number;
    options: { [key: string]: string | number } | undefined;
    stack: string | undefined;
  };
}

export class MetaException extends Exception {
  readonly code: number;
  constructor(message: string, options?: { [key: string]: string | number });
}
