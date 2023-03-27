import { Component, Input, OnInit } from '@angular/core';
import { tableData } from '../../data/tabledb';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columnDefinition!: string[];
  data = tableData;

  constructor() {}

  ngOnInit(): void {}
}
