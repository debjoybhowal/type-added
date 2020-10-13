import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustormValidators } from '../custom.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  reactiveForm: FormGroup;

  skillsData: Array<any> = [
    { name: 'HTML5,CSS3,JS', value: 'HTML5,CSS3,JS' },
    { name: 'Angular 8', value: 'Angular 8' },
    { name: 'Express JS', value: 'Express JS' },
    { name: 'SASS', value: 'React JS' },
    { name: 'Node JS', value: 'Node JS' },
    { name: 'ES5,ES6,ES7...', value: 'ES5,ES6,ES7...' },
    { name: 'Veu JS', value: 'Veu JS' },
    { name: 'Mango DB', value: 'Mango DB' },
    { name: 'Boostrap 4', value: 'Boostrap 4' },
    { name: 'Typescript', value: 'Typescript' },
  ];

  locationList = [];
  offShoreList = ['Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Kochi'];
  onShoreList = ['US', 'Non US'];

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      associate_name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-z ]{5,30}$'),
      ]),
      associate_id: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$'),
      ]),
      project_id: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-z0-9]{12}$'),
      ]),
      skills: new FormArray([], CustormValidators.minLength(5)),
      upload_image: new FormControl(null, Validators.required),
      comments: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }
  onCheckboxChange(e): void {
    const checkArray: FormArray = this.reactiveForm.get('skills') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      checkArray.removeAt(
        checkArray.controls.findIndex(
          (item: FormControl) => item.value === e.target.value
        )
      );
    }
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }

  setLocationSelection(isOnShore): void {
    this.locationList = isOnShore ? this.onShoreList : this.offShoreList;
  }
  resetTheForm(): void {
    this.reactiveForm.reset();
    this.locationList = [];
  }

}
