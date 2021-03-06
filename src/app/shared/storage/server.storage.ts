import { Inject, Injectable } from '@angular/core';

import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class ServerStorage implements Storage {
  [index: number]: string;
  [key: string]: any;
  length: number;
  cookies: any;

  constructor(@Inject(REQUEST) private _request: any) {
    if (_request === null) {
      this.cookies = [];
      return;
    }
    this.cookies = _request.cookies;
  }

  public clear(): void {
    this.cookies = [];
  }

  public getItem(key: string): string {
    return this.cookies[key];
  }

  public key(index: number): string {
    return this.cookies.propertyIsEnumerable[index];
  }

  public removeItem(key: string): void {
    this.cookies[key] = undefined;
  }

  public setItem(key: string, data: string): void {
    this.cookies[key] = data;
  }
}
