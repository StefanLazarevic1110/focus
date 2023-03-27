import { Component, Input, OnInit } from '@angular/core';
import { itemsData } from '../../data/itemsdb';
import { overdueData } from '../../data/overduedb';

@Component({
  selector: 'app-initiated',
  templateUrl: './initiated.component.html',
  styleUrls: ['./initiated.component.scss'],
})
export class InitiatedComponent implements OnInit {
  @Input() columnDefinition!: string[];
  users = itemsData;
  users2 = overdueData;
  constructor() {}

  ngOnInit(): void {}
}
