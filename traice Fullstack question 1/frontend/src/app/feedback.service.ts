import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private _feedbackUrl="http://http://localhost:3000/api/feedback";

  
  constructor(private http: HttpClient) { }

  getFeedback(){
    return this.http.get<any>(this._feedbackUrl)
  }
}
