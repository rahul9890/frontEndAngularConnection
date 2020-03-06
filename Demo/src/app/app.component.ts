import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private freeApiServices:freeApiService){}

  listComments:Comments[];
  

  ngOnInit(){
    this.freeApiServices.getComments()
    .subscribe
    (
      data=>
      {
          this.listComments=data;
         
      }
    ),(err: { message: any; }) =>{
      console.log("not going in data");
      console.log(err.message);
    }, ()=>{
      console.log('comppleted');
    }
  }
}
