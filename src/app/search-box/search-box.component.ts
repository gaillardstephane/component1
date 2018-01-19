import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {

@Input('placeholder')
text = 'type here';
  
  constructor() { }
 
  clear(inputPH1) {console.log('cleared' + ' ' + inputPH1.value);
    inputPH1.value = '';
   }
 
 /*
 clear(inputPH1, inputPH2, inputPH3) {console.log('cleared' + ' ' + inputPH1.value + inputPH2.value + inputPH3.value);
    inputPH1.value = '';
   inputPH2.value = '';
   inputPH3.value = '';
  }
  */
  
  ngOnInit() {
    
    console.log( 'init :: ' + this.text); 
    
    
  }

}
