import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-affected-form',
  templateUrl: './affected-form.component.html',
  styleUrls: ['./affected-form.component.css'],
})
export class AffectedFormComponent implements OnInit {
  @Input() affected: any[];
  @Output() affectedChange = new EventEmitter<any[]>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  moveToRecovered() {
    this.affected = this.affected.map((item) => ({
      ...item,
      isInRecovered: item.isInRecovered || item.affected,
      affected: false,
    }));
    this.dataService.setData(this.affected);
    this.affectedChange.emit(this.affected);
  }
}
