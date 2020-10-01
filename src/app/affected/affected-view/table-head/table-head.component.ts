import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-head]',
  template: `<tr>
    <th scope="col">✔</th>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">City 🏙</th>
    <th scope="col">Gender</th>
  </tr> `,
  styleUrls: ['./table-head.component.css'],
})
export class TableHeadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
