import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  @Input() content!: string;
  totalCount = 10;
  finishCount = 3;
  // 事件繫結
  // 使用state狀態,並使初始狀態為字串None,僅有三種狀態
  state: 'None' | 'Doing' | 'Finish' = 'None';
  // 設定state狀態方法
  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.state = state;
  }
  // 樣式繫結
  @Input() type: 'Home' | 'Work' | 'Other' = 'Home';
  fontSize = 14;
  color = 'red';
  // 類別繫結
  className = 'work';
}
