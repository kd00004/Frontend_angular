import { Component, OnInit } from '@angular/core';
import { MoreUser } from '../more-user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
export interface View {
  Application_id: number;
  Applicant_name: string;
  Submitted_date: string;
  Status: string;
}
@Component({
  selector: 'app-landing-page2',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.css']
})

export class LandingPage2Component implements OnInit {
  public moreusers : MoreUser[] | undefined;
  constructor(private userService: UserService){}
  ngOnInit() {
    this.getUser();
  }

  public getUser(): void{
    this.userService.getMoreUser().subscribe(
      (response: MoreUser[]) =>{
        this.moreusers = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  displayedColumns: string[] = ['Application_id', 'Applicant_name', 'Submitted_date', 'Status'];
}


