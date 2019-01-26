import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() loadFeature = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(feature : string){
    this.loadFeature.emit(feature);
  }

}
