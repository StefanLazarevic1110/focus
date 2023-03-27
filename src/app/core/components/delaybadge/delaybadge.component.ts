import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delaybadge',
  templateUrl: './delaybadge.component.html',
  styleUrls: ['./delaybadge.component.scss']
})
export class DelaybadgeComponent {
  @Input() day!: number;
}
