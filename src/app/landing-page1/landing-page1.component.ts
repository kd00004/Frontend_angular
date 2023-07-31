import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';

@Component({ // defines meta data for the component
  selector: 'app-landing-page1', //HTML tag that is used to represent the landing page
  templateUrl: './landing-page1.component.html',
  styleUrls: ['./landing-page1.component.css']
})

export class LandingPage1Component implements OnInit {
  calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  formData: any = {};

  ngOnInit(): void {
      // no specific initialization logic needs to be executed
  }

  constructor(private formBuilder: FormBuilder, private router : Router, private userService: UserService) {}

  registerForm = new FormGroup({
    firstname : new FormControl("", [Validators.required]),
  });
  
  onSubmit(addForm: NgForm): void {

    if(this.formData.annualSalary < 10000){
      alert('Sorry, your salary is less.');
    }

    else if(this.formData.experienceYears == 0 && this.formData.experienceMonths < 6){
      alert('Sorry, You don\'t have enough experience. ')
    }

    else if(this.calculateAge(this.formData.dob) < 18){
      alert('Sorry, you should be atleast 18 to avail loan.')
    }

    else if(this.calculateAge(this.formData.dob) > 65){
      alert('Sorry, you should be less than 65 to avail loan.')
    }

    else if (addForm.valid) {
      this.userService.addUser(this.formData).subscribe(
        (response) => {
          console.log(response);
          alert('Form submitted successfully');
          this.router.navigateByUrl('/success-page')
        },
        (error) => {
          console.log(error);
          alert('Form submission failed.');
          
        }
      );
    }
    else {
      alert('Please fill all required fields before submitting.');
    }
  }
  }