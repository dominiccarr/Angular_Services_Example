import { Component } from '@angular/core';
import { CatService }  from '../cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  catURL!: string;

  constructor(public catService : CatService) {
  }

  ngOnInit(): void {
    this.getCat()

  }

  getCat(){
    this.catService.getCat().subscribe(data => {
      console.log(data);
      this.catURL = data[0].url;
    })
  }

  newCat(){
    console.log("button pressed")
    this.getCat();
  }
}
