import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback:any=[]
  constructor(private _feedbackService: FeedbackService) { }

  ngOnInit(){
    this._feedbackService.getFeedback()
    .subscribe(
      res => this.feedback = res,
      err => console.log(err)
    )
  }

}
