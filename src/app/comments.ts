import { Injectable } from "@angular/core";

@Injectable()
export class Comments {
  public title: string;
  public description: string;
  public hide: boolean;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
