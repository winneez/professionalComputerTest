import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() closeConfirmModal = new EventEmitter<boolean>();
  @Input() dataList : any = [];

  isShowConfirmModal:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  closeModal(){
    this.showModal = false
    this.closeConfirmModal.next(false);
  }

}
