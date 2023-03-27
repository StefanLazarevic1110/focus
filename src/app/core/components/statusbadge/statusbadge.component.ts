import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statusbadge',
  templateUrl: './statusbadge.component.html',
  styleUrls: ['./statusbadge.component.scss']
})
export class StatusbadgeComponent {
  @Input() status!: string;
}
