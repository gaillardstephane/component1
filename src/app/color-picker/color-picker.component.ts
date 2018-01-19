import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['../../../../eclipse:TPVOTE/src/app/color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

 @Input()
    color: string;
 @Output()
  colorOutput = new EventEmitter();   
  
  constructor() { }

  ngOnInit() {
  }

 choose(color: string) {
   this.color = color; 
   this.colorOutput.emit(color); 
 }   
  
  reset() {
    this.color = 'yellow'; 
  }
  
}
