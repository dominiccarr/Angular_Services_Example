import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data!: any[];
  topic : string = "devops"
  num: number = 5;

  constructor(public dataService : DataService) {
  }

  ngOnInit(): void {
    this.getNewNews()

  }

  getNewNews(){
    this.dataService.getNews(this.topic).subscribe(data => {
      console.log(data);
      this.data = data.articles;
    })
  }

}