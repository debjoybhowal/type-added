import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Patient } from 'src/app/utils/patient.model';

@Component({
  selector: 'app-affected-form',
  templateUrl: './affected-form.component.html',
})
export class AffectedFormComponent implements OnInit {
  @Input() affected: Patient[];

  showAlert = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  moveToRecovered(): void {
    if (this.affected.filter((item: Patient) => item.affected).length <= 0) {
      this.showAlert = true;
      return;
    } else this.showAlert = false;
    this.affected = this.affected.map((item: Patient) => ({
      ...item,
      isInRecovered: item.isInRecovered || item.affected,
      affected: false,
    }));
    this.dataService.setData(this.affected);
  }
  onSubmit(): void {
    this.dataService.addData({
      id: this.affected[this.affected.length - 1].id + 1,
      name: this.form.get('name').value,
      city: this.form.get('location').value,
      gender: this.form.get('gender').value,
      affected: false,
      recovered: false,
      isInRecovered: false,
    });
    this.resetForm();
  }
  resetForm(): void {
    this.form.reset();
    this.form.get('location').setValue('');
  }
}
