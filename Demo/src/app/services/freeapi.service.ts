import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class freeApiService{


    constructor(private httpClient:HttpClient){}

    getComments(): Observable<any>{
        
        return this.httpClient.get("http://localhost:8082/client1");
    }

}