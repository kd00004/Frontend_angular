import { Component, NgModule, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { User } from '../user';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms';
import { MoreUser } from '../more-user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
//import java.time.LocalDate;


@Component({

  selector: 'app-landing-page1',
  templateUrl: './landing-page1.component.html',
  styleUrls: ['./landing-page1.component.css']
})

// goBackToMainPage() {
// throw new Error('Method not implemented.');
// }

// onSubmit(form: NgForm) {
//   // Get the form values
//   const dateOfBirth = form.value.dateOfBirth;
//   const age = this.calculateAge(dateOfBirth);
//   const experienceMonths = form.value.experienceMonths;
//   const annualSalary = form.value.annualSalary;

//   // Perform the frontend decline rules
//   if (age < 18 || age > 65) {
//     alert('Applicant must be between 18 and 65 years old.');
//     return;
//   }

//   if (experienceMonths < 6) {
//     alert('Applicant must have at least 6 months of work experience.');
//     return;
//   }

//   if (annualSalary < 10000) {
//     alert('Applicant annual salary must be at least $10,000.');
//     return;
//   }

  // If all rules pass, you can proceed with form submission or other actions.
  // For example:
  //console.log('Form submission successful!');
  // ...
//}


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
      
  }

  constructor(private formBuilder: FormBuilder, private router : Router, private userService: UserService) {}

  registerForm = new FormGroup({
    firstname : new FormControl("", [Validators.required]),
  });
  
  onSubmit(addForm: NgForm): void {
    if(this.formData.annualSalary < 10000 || (this.formData.experienceYears == 0 && this.formData.experienceMonths < 6)
         || this.calculateAge(this.formData.dob) < 18 ||  this.calculateAge(this.formData.dob) > 65) {
      alert('Sorry');
    }

    else if (addForm.valid) {
      // Perform the form submission when all required fields are filled
      // e.g., this.userService.updateUserData(this.user).subscribe(...)
      this.userService.addUser(this.formData).subscribe(
        (response) => {
          console.log(response);
          alert('Form submitted successfully');
          this.router.navigateByUrl('/success-page')
        },
        (error) => {
          console.log(error);
          alert('Form submission failed');
          
        }
      );
    }
    
    else {
      // Form is not valid, handle the case where required fields are missing
      alert('Please fill all required fields before submitting.');
    }
      
      
    }
  }



 



