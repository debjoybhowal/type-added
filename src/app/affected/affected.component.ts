import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-affected',
  templateUrl: './affected.component.html',
  styleUrls: ['./affected.component.css'],
})
export class AffectedComponent implements OnInit {
  constructor(private dataService: DataService) {}
  affected;
  ngOnInit(): void {
    this.dataService
      .getAllAffected()
      .subscribe((affected) => (this.affected = affected));
  }
}
