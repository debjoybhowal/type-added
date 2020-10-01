import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.css'],
})
export class RecoveredComponent implements OnInit {
  constructor(private dataService: DataService) {}
  recovered;
  ngOnInit(): void {
    this.recovered = this.dataService.getData();
    if (!this.recovered) {
      this.dataService.fetchData().subscribe((recovered) => {
        this.recovered = recovered;
        this.dataService.setData(recovered);
      });
    }
  }
}
