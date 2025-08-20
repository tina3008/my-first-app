import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-test',
  // imports: [NgClass, NgStyle],
  imports: [CommonModule, FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  title = ' *****interpolation********';
  first = 't';
  last = 'end';

  isEnabled: boolean = true;

  isActive: boolean = false;
  isDesabled: boolean = true;

  isClickedState: boolean = true;

  inputTxt: string = '';

  @Input() childMsg: string = "1";
  @Output() childMessage = new EventEmitter<string>();

  fulLine() {
    return `text ${this.first} + ${this.last}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMsgToParent() {
    this.childMessage.emit('child message')
  }
}
