import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fontsize',
  templateUrl: './fontsize.component.html',
  styleUrls: ['./fontsize.component.css']
})
export class FontsizeComponent implements OnInit {
  @Input() message: string;
  @Output() onFontSize = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  fontsizeChanged(x) {
    console.log(x.target.value);
    this.onFontSize.next(x.target.value);
  }
}
