import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  template: `++HOME++`
})
export class HomeComponent {
}




@Component({
  selector: 'les2-inp',
  imports: [FormsModule],
  template: `<fieldset>
    <legend>Inp</legend>
    <input [(ngModel)]="inp"/>
    inp={{inp}}
  </fieldset>`
})
export class InpComponent {
  @Input() inp = '-default-'
}

@Component({
  selector: 'les2-setter',
  imports: [FormsModule],
  template: `<fieldset>
    <legend>InpSetter</legend>
    <input [(ngModel)]="inp"/>
    inp={{inp}}
  </fieldset>`
})
export class InpSetter {
  _inp = '-default-';
  @Input() set inp(x: string) {
    if (x.length <= 7) this._inp = x;
  }
  get inp() {
    return this._inp;
  }
}

@Component({
  selector: 'les2-out',
  imports: [FormsModule],
  template: `<input  [(ngModel)]="val">
  <button (click)="out.emit(val)">ok</button>`
})
export class OutComponent {
  val = '-default-';
  @Output() out = new EventEmitter;
}


@Component({
  imports: [InpComponent, FormsModule, InpComponent, InpSetter, OutComponent],
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  parentValue = 'parentValue';
  arr = ['item1', 'item2'];
  addItemToStart(item: string) { this.arr.unshift(item) };
  addItemToEnd(item: string) { this.arr.push(item) }
}
