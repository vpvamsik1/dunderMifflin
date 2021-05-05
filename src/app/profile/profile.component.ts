import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;

  id: number;
  user:any;

  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  mail: string;

  constructor(private JSONPlaceholder: JSONPlaceholderService, private route: ActivatedRoute) { 
    // this.data = new Array<any>();
  
  }

  getDataFromAPI(x){ 
    this.JSONPlaceholder.getData().subscribe((data:any[]) => {
      // this.data = data;
      // console.log(this.data);
      // console.log(this.data[x - 1]);
      // this.name = this.data[x - 1].name;
      // this.street = this.data[x - 1].address.street;
      // this.suite = this.data[x - 1].address.suite;
      // this.city = this.data[x - 1].address.city;
      // this.zipcode = this.data[x - 1].address.zipcode;
      // this.phone = this.data[x - 1].phone;
      // this.mail = this.data[x - 1].email;
      // variable hoisting
      const user = data.filter((u)=>u.id==x);
      // console.log(user);
      if(user.length===1){
        this.user = user[0];
      }
      
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id
      this.name = params.name;
      this.getDataFromAPI(this.id);
    });
    console.log(this.id);

    
  }



}
