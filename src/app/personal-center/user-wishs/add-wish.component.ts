import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.less']
})
export class AddWishComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Output() addChange = new EventEmitter<string>();
  wishData: any = {
    name: '',
    private: false,
    img: ''
  };
  wishImages: any[] = [];

  showMsg: boolean = false;
  showErrorMsg: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
    this.addChange.emit('cancel');
  }
}
