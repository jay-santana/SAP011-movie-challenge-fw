import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private location: Location) {}

  refreshPage() {
    this.location.replaceState('/');
    window.location.reload();
  }
}
