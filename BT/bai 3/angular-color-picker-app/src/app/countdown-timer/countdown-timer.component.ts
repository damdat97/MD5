import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() start: any
  constructor() { }
  temp: any
  interval: any
  ngOnInit(): void {
    this.temp = this.start
  }

  loading() {
    if (this.start != 0) {
      this.interval = setInterval(() => {
        this.start = +this.start - 1;
        if (this.start == 0) {
          clearInterval(this.interval);
        }
      }, 319);
    }
  }

  reset() {
    clearInterval(this.interval)
    this.start = this.temp
  }

  stop() {
    clearInterval(this.interval)
  }
}
