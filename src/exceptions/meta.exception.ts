import { Exception } from './exception';

export class MetaException extends Exception {
    readonly code: number = 400;

    constructor(message: string, options?: { [key: string]: string | number }) {
      super(message, options);
    }
}
