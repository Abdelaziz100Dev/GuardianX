import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-userpage',
  templateUrl: '../Templates/admin/index.html',
  // styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
    response! : string
    Admin = "User";
  constructor(private  userService:UserService) { }
  ngOnInit(): void {
      this.userService.getMessage().subscribe({
        next: (data) => {
          this.response = data.message;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }


}
