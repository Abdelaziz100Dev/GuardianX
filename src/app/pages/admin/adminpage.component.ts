import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-adminpage',
  templateUrl: '../Templates/admin/index.html',
  // styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  response! : string
  Admin = "Admin";
  constructor(private  userService:UserService) { }
  ngOnInit(): void {
    this.userService.getAdminMessage().subscribe({
      next: (data) => {
        this.response = data.message;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  logout() {
    this.userService.logout();
  }
}
