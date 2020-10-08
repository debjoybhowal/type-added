import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-affected-form',
  templateUrl: './affected-form.component.html',
  styleUrls: ['./affected-form.component.css'],
})
export class AffectedFormComponent implements OnInit {
  @Input() affected: any[];

  showAlert = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  /*,
    location: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required), */

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  moveToRecovered() {
    if (this.affected.filter((item) => item.affected).length <= 0) {
      this.showAlert = true;
      return;
    } else this.showAlert = false;
    this.affected = this.affected.map((item) => ({
      ...item,
      isInRecovered: item.isInRecovered || item.affected,
      affected: false,
    }));
    this.updateData();
    //this.affectedChange.emit(this.affected);
  }
  onSubmit() {
    this.affected=[...this.affected, {
      id: this.affected[this.affected.length - 1].id + 1,
      name: this.form.get('name').value,
      city: this.form.get('location').value,
      gender: this.form.get('gender').value,
      affected: false,
      recovered: false,
      isInRecovered: false,
    }]
    this.updateData()
    this.resetForm();
  }
  updateData(){
    this.dataService.setData(this.affected);
  }
  resetForm() {
    this.form.reset();
    this.form.get('location').setValue('');
  }
}
