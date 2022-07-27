import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  user!: User;
  name!: String;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {

    this.route.data
      .subscribe(data => {

        const user: User = data['user'];

        this.name = user.name;
        this.user = user;

      });

  }


}
