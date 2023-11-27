import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-content-details',
  templateUrl: './top-content-details.component.html',
  styleUrls: ['./top-content-details.component.css']
})
export class TopContentDetailsComponent {
  @Input() genre?: string = '';
  @Input() order?: string = '';
  @Input() pageNumber?: string = '';
}
