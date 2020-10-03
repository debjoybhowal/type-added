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
  showAlert = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  moveToAffected() {
    if (this.recovered.filter((item) => item.recovered).length <= 0) {
      this.showAlert = true;
      return;
    } else this.showAlert = false;
    this.recovered = this.recovered.map((item) => ({
      ...item,
      isInRecovered:
        item.isInRecovered && !(item.isInRecovered && item.recovered),
      recovered: false,
    }));
    this.dataService.setData(this.recovered);
    this.recoveredChange.emit(this.recovered);
  }
  closeAlert() {
    this.showAlert = false;
  }
  removeAll() {
    if (this.recovered.filter((item) => item.recovered).length <= 0) {
      this.showAlert = true;
      return;
    } else this.showAlert = false;
    this.recovered = this.recovered.filter(
      (item) => !(item.isInRecovered && item.recovered)
    );
    this.dataService.setData(this.recovered);
    this.recoveredChange.emit(this.recovered);
  }
}
