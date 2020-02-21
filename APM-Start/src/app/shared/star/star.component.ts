import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  constructor() { }

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

  faStar = faStar;

  ngOnChanges():void {
    this.starWidth = this.rating * 90 / 5;
  }

  onClick(): void{
    this.ratingClicked.emit('hola mundo');
  }
}
