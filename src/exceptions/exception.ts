export abstract class GuardException extends Error {
  abstract readonly code: number;
  readonly message: string;
  readonly name: string;
  readonly options?: { [key: string]: string | number };

  protected constructor(
    message: string,
    options?: { [key: string]: string | number },
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
    this.message = message;
    this.options = options;
    Error.captureStackTrace(this, this.constructor);
  }

  serialize(): {
    name: string;
    message: string;
    code: number;
    options: { [key: string]: string | number } | undefined;
    stack: string | undefined;
  } {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      options: this.options,
      stack: this.stack,
    };
  }
}
