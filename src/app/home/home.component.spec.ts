import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ], 
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ],
      providers: [ JSONPlaceholderService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable the button if input has valid email', () => {
    component.signupForm.value.email = "abc1";
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // console.log(compiled);
    const emailHtml = compiled.querySelector("#email");
    emailHtml.setAttribute("value", "abc");
    fixture.detectChanges();
    const btnHtml = compiled.querySelector(".btn");
    console.log(compiled);
    console.log("our button behavior",btnHtml);
    console.log("from model", component.signupForm.valid);
    expect(true).toBeTruthy();
  });

  fit('should enable the button if input value matches regex', () => {
    component.signupForm.value.email = "dsf@dsds.com";
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // console.log(compiled);
    const btn = compiled.querySelector(".btn");
    // console.log(btn);
    expect(btn.hasAttribute("disabled")).toBeFalse();
  });

  fit('should enable the button if input value matches regex', () => {
    component.signupForm.value.email = "sea.moin@gmail.c";
    console.log(component.signupForm.value.email);
    fixture.detectChanges();
    console.log(component.signupForm.invalid);
    const compiled = fixture.nativeElement;
    // console.log(compiled);
    const btn = compiled.querySelector(".btn");
    console.log(btn);
    // expect(btn.hasAttribute("disabled")).toBeTrue();
  });
});
