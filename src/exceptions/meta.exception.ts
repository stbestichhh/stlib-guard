import { GuardException } from './exception';

export class MetaException extends GuardException {
    readonly code: number = 400;

    constructor(message: string, options?: { [key: string]: string | number }) {
      super(message, options);
    }
}
