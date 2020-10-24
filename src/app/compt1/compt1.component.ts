import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compt1',
  templateUrl: './compt1.component.html',
  styleUrls: ['./compt1.component.scss']
})
export class Compt1Component implements OnInit {

  isOn = false;
  get message() { 
    return `The light is ${this.isOn ? 'On' : 'Off'}`; 
  }
  constructor() { }
  ngOnInit(): void {
  }
  clicked() { 
    this.isOn = !this.isOn; 
  }

}
