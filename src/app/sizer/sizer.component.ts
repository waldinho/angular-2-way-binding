import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent {
  @Input() size!: { value: number | string };
  @Output() sizeChange = new EventEmitter<{ value: number }>();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size.value = Math.min(40, Math.max(8, +this.size.value + delta));
    this.sizeChange.emit({ value: this.size.value });
  }
}
