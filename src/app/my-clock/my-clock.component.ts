import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "my-clock",
  templateUrl: "./my-clock.component.html",
  styleUrls: ["./my-clock.component.css"]
})
export class MyClockComponent {
  time: string;
  @Input() city:string;
  constructor() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }
  setTime() {
    let clock = new Date();
    let t =
      clock.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds();
    this.time = t;
  }
}
