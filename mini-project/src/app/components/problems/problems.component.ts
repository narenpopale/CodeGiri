import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  constructor() { this.prob = true }

  ngOnInit(): void {
  }

  @Input() prob : boolean;

  @Output() problemStatus : EventEmitter<boolean> = new EventEmitter();

  send(){
    this.prob = false;
    this.problemStatus.emit(this.prob);
  }
}
