import { Component, OnInit } from '@angular/core';
import {ChildComponent} from "../../components/child/child.component";
import {FatherComponent} from "../../components/father/father.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    FatherComponent,
    ChildComponent
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
