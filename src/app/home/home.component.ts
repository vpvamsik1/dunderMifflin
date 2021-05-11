import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;

  data:Array<any>;
  rEmail = '';
  data2:Array<any>;
  emailValid = true;
  index: number = 0;
  test: number = 5;
  id: number = 0;
  name: string;
  regex: string;

  users:Object = {};

  constructor(private JSONPlaceholder: JSONPlaceholderService, private router: Router) {
    this.data = new Array<any>();
    this.data2 = new Array<any>();
  }

  onSubmit() {
  //   console.log(this.signupForm);
  //   console.log(this.signupForm.value.email);
  //   this.rEmail = this.signupForm.value.email;
      if(this.signupForm.form.valid){
        this.getDataFromAPI();
      }
  }
  
  getDataFromAPI(){ 
    this.JSONPlaceholder.getData().subscribe((data) => {

      this.data = data;
      console.log(this.rEmail);
      for (var i = 0; i < data.length; i++) {
        this.data2.push(data[i].email);
      }
      console.log(this.data2);
      if(!this.data2.includes(this.rEmail)) {
        this.emailValid = false;
      } else {
        console.log(this.data2.indexOf(this.rEmail));
        this.index = this.data2.indexOf(this.rEmail);
        console.log(this.data[this.index]);
        console.log(this.data[this.index].id);
        this.id = this.data[this.index].id;
        this.name = this.data[this.index].name;
        console.log(this.name);
        localStorage.setItem("activeUser", JSON.stringify(this.data[this.index]));
        this.router.navigate(['/profile', this.id]);
      }
    })
   
  }

  ngOnInit(): void {
    this.regex = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  }

}
