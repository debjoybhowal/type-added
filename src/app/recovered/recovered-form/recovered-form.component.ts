import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Patient } from 'src/app/utils/patient.model';

@Component({
  selector: 'app-recovered-form',
  templateUrl: './recovered-form.component.html',
})
export class RecoveredFormComponent implements OnInit {
  @Input('recovered') recovered: Patient[];
  showAlert = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  moveToAffected(): void {
    if (this.recovered.filter((item: Patient) => item.recovered).length <= 0) {
      this.showAlert = true;
      return;
    } else this.showAlert = false;
    this.recovered = this.recovered.map((item: Patient) => ({
      ...item,
      isInRecovered:
        item.isInRecovered && !(item.isInRecovered && item.recovered),
      recovered: false,
    }));
    this.dataService.setData(this.recovered);
  }
  removeAll(): void {
    if (this.recovered.filter((item: Patient) => item.recovered).length <= 0) {
      this.showAlert = true;
      return;
    } else this.showAlert = false;
    this.recovered = this.recovered.filter(
      (item: Patient) => item.isInRecovered && item.recovered
    );
    this.dataService.removeData(this.recovered);
  }
}
