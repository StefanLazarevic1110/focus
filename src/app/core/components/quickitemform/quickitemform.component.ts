import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-quickitemform',
  templateUrl: './quickitemform.component.html',
  styleUrls: ['./quickitemform.component.scss'],
})
export class QuickitemformComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter();

  quickItemForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.quickItemForm = this.formBuilder.group({
      itemTitle: ['', Validators.required],
      type: new FormControl('', Validators.required),
      businessUnit: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      objective: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      spanish: new FormControl(false, Validators.required),
      chinese: new FormControl(false, Validators.required),
      arabic: new FormControl(false, Validators.required),
    });
  }

  onSubmit() {
    console.log('Quick Item Form submitted');
    console.log(this.quickItemForm);
  }

  onCancel(): void {
    this.isOpen = false;
    this.onClose.emit();
  }
}
