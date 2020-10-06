import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-thead]',
  template: `<tr>
    <th scope="col">✔</th>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">City 🏙</th>
    <th scope="col">Gender</th>
  </tr> `,
  styleUrls: ['./thead.component.css'],
})
export class TheadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}