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
  convertMinutesToHoursAndMinutes(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
}
