import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.css']
})
export class DetailsContainerComponent implements OnInit {
  @Input() movie: any;

  constructor(){}
  
  ngOnInit(): void {
    console.log(this.movie);
  }

}
