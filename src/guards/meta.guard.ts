import { Guard } from './guard';

export class MetaGuard extends Guard {
  constructor(metaKey: string) {
    super(metaKey);
    this.checkData();
  }

  protected checkData() {
    super.checkData();
  }
}
