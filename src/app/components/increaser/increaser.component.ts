import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html'
})

export class IncreaserComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progress: number = 40;
  @Input('btnClass') btnClass: string = 'btn btn-primary';

  @Output('value') outValue: EventEmitter<number> = new EventEmitter();
  

  changeValue (value: number) {

    if (this.progress >= 100 && value >= 0) { 
      this.outValue.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && value < 0) { 
      this.outValue.emit(0)
      return this.progress = 0;
    }

    this.outValue.emit(this.progress);
    this.progress = this.progress + value;

    return this.progress
  }

  onChange( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.outValue.emit( this.progress );

  }

}
