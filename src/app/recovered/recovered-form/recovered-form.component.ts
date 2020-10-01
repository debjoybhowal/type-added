import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-recovered-form',
  templateUrl: './recovered-form.component.html',
  styleUrls: ['./recovered-form.component.css'],
})
export class RecoveredFormComponent implements OnInit {
  @Input('recovered') recovered;
  @Output() recoveredChange = new EventEmitter<any[]>();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  moveToAffected() {
    this.recovered = this.recovered.map((item) => ({
      ...item,
      isInRecovered:
        item.isInRecovered && !(item.isInRecovered && item.recovered),
      recovered: false,
    }));
    this.dataService.setData(this.recovered);
    this.recoveredChange.emit(this.recovered);
  }
}
