import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { YelpserviceService } from '../yelpservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  city = new FormControl('');
  state = new FormControl('');
  priceInfo = new FormControl('');

  constructor(private yelpService : YelpserviceService, private fb: FormBuilder) { };

  foodForm: FormGroup;
  displayFood: any;

  ngOnInit() {
    this.foodForm = this.fb.group({
      city: new FormControl(),
      state: new FormControl(),
      priceInfo: new FormControl()
    })
  }
 
  onSubmit() {
    this.yelpService.getFoods(this.foodForm.value.city, this.foodForm.value.state, this.foodForm.value.priceInfo).subscribe(data => {
      this.displayFood = data.businesses;
      const foodResult = this.displayFood[Math.floor(Math.random() * this.displayFood.length)]

      if (foodResult.is_closed === false) {
        this.displayFood = foodResult;
        console.log(this.displayFood);
      } else (foodResult);

    });
  }
}






