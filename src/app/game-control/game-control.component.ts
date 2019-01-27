import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();
  intervalId;
  lastNumber = 0;


  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.intervalId = setInterval(() => {
      this.gameStarted.emit(this.lastNumber);
      this.lastNumber++;
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.intervalId);
    this.gameStopped.emit();
  }

}
