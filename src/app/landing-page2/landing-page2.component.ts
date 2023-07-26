import { Component, OnInit } from '@angular/core';
import { MoreUser } from '../more-user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
//import { MatTableDataSource } from '@angular/material/table';


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
// export class LandingPage2Component {

//   dataSource: View[] = [
//     {Application_id: 123, Applicant_name: "ssss", Submitted_date: "2021-12-4", Status: "Accepted"},
//     {Application_id: 456, Applicant_name: "ss", Submitted_date: "2021-07-4", Status: "Rejected"},
//  ];
//  displayedColumns: string[] = ['Application_id', 'Applicant_name', 'Submitted_date', 'Status'];
//}
//  export class LandingPage2Component implements OnInit {

// public moreuser : MoreUser[] | undefined;
// constructor(private userService: UserService){}
// ngOnInit() {
//   this.getUser();
// }
//   dataSource: View[] = [
//     public getUser(): void{
//           this.userService.getMoreUser().subscribe(
//             (response: MoreUser[]) =>{
//               this.moreuser = response;
//             },
//             (error: HttpErrorResponse)=>{
//               alert(error.message);
//             }
//           ),
//         }
//  ];
//  displayedColumns: string[] = ['Application_id', 'Applicant_name', 'Submitted_date', 'Status'];
// }
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


