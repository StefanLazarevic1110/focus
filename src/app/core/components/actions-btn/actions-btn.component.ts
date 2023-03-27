import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { actionData } from '../../data/actiondb';

@Component({
  selector: 'app-actions-btn',
  templateUrl: './actions-btn.component.html',
  styleUrls: ['./actions-btn.component.scss'],
})
export class ActionsBtnComponent implements OnInit {
  @Input() columnDefinition!: string[];
  data = actionData;
  @ViewChild('dialog') dialog!: ElementRef;

  dialogIsOpen = false;

  constructor() {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialogIsOpen = true;
    this.dialog.nativeElement.showModal();
  }

  onCloseDialog() {
    this.dialogIsOpen = false;
    this.dialog.nativeElement.close();
  }
}
