import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() show;
  @Output() showChange= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.showChange.emit();
  }

}
