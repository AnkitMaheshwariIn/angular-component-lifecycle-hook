import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Comments } from '../comments';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  @Output() commentCreated = new EventEmitter<Comments>();

  constructor() { }

  ngOnInit() {
  }

  createJoke(title: string, description: string) {
    this.commentCreated.emit(new Comments(title, description));
  }

}
