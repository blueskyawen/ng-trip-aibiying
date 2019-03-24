import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fality-icon',
  templateUrl: './fality-icon.component.html'
})
export class FalityIconComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
