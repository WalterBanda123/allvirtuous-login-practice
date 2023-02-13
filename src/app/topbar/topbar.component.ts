import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() user?: User;
  constructor() {
  }
}
