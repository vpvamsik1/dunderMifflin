import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'
import { from, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let JSONPlaceholder : JSONPlaceholderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ], 
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ],
      providers: [ JSONPlaceholderService ]
    })
    .compileComponents();
    JSONPlaceholder = TestBed.inject(JSONPlaceholderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should enable the button if input has valid email', () => {
  //   component.signupForm.value.email = "abc1";
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   // console.log(compiled);
  //   const emailHtml = compiled.querySelector("#email");
  //   emailHtml.setAttribute("value", "abc");
  //   fixture.detectChanges();
  //   const btnHtml = compiled.querySelector(".btn");
  //   console.log(compiled);
  //   console.log("our button behavior",btnHtml);
  //   console.log("from model", component.signupForm.valid);
  //   expect(true).toBeTruthy();
  // });

  // fit('should enable the button if input value matches regex', () => {
  //   component.signupForm.value.email = "dsf@dsds.com";
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   // console.log(compiled);
  //   const btn = compiled.querySelector(".btn");
  //   // console.log(btn);
  //   expect(btn.hasAttribute("disabled")).toBeFalse();
  // });

  // fit('should not enable the button if input value matches regex', () => {
  //   // component.signupForm.value.email = "sea.moi";
  //   // console.log(component.signupForm.value.email);
  //   // fixture.detectChanges();
  //   // console.log(component.signupForm.invalid);
  //   const compiled = fixture.nativeElement;
  //   // compiled.querySelector("#email").value = "sea.moi";
  //   fixture.detectChanges();
  //   // console.log(compiled);
  //   const btn = compiled.querySelector(".btn");
  //   console.log(btn);
  //   // expect(btn.hasAttribute("disabled")).toBeTrue();
  // });

  it('should enable the button if input value matches regex', ()=>{
    component.rEmail="sea.moiom";
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const btn = compiled.querySelector(".btn");
    console.log(btn);
    expect(btn.hasAttribute("disabled")).toBeFalse();
  });

  it('should disable the button if input value does not matches regex', ()=>{
    component.rEmail="sea.min";
    component.signupForm.form.setErrors({'invalid':true, 'valid':false});
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const btn = compiled.querySelector(".btn");
    console.log(btn);
    expect(btn.hasAttribute("disabled")).toBeTrue();
  });
  
  it('should show invalid email if email is not in JSON', ()=>{
    component.rEmail = "vpcvasffd@gmail.com";
    spyOn(JSONPlaceholder,'getData').and.returnValue(of({}))
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const btn = compiled.querySelector(".btn");
    btn.click();
    expect(component.emailValid).toBeFalse();

  })

  const mockUsers = {};

});
