import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-asynccompt2',
  templateUrl: './asynccompt2.component.html',
  styleUrls: ['./asynccompt2.component.scss']
})
export class Asynccompt2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { 
    this.selected.emit(this.hero); 
  }

}

export interface Hero{
  id:number;
  name:string;
}
