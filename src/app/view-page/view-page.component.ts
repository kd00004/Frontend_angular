import { Component, OnInit } from '@angular/core';
import { MoreUser } from '../more-user';
import { UserService } from '../user.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
    //public moreuser: MoreUser[] | undefined;
    public moreuser: any;
    applicationIdToFind : number = 0;
    constructor(private userService: UserService, private http: HttpClient, private route : ActivatedRoute){}


    ngOnInit() {

      // Get the application ID from the route parameters
  
      this.route.params.subscribe(params => {
  
        this.applicationIdToFind = +params['id']; // Convert the ID to a number (assuming the ID is a number)
  
        // Fetch data from the server based on the application ID
  
        this.getUser();
  
      });
  
    }

    public getUser(): void{
      this.userService.getMoreUser().subscribe(
        (response: MoreUser[]) =>{
          this.moreuser = response.find(item => item.id === this.applicationIdToFind);
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }
    
}





