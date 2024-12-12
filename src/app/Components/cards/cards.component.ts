import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';



import { FollowUp, Post } from '../../Interfaces/Post.interface';


@Component({
	selector: 'app-cards',
	imports: [GLOBAL_IMPORTS],
	templateUrl: './cards.component.html',
	styleUrl: './cards.component.css'
})
export class CardsComponent{ 

	@Input() post!: Post;
  @Output() addReply = new EventEmitter<string>();
  @Output() addFollow = new EventEmitter<string>();

  followContent: string = '';
  replyContent: string = '';
  openReply: boolean = false;
  openFollow: boolean = false;

  sendReply() {
    if (this.replyContent.trim()) {
      this.addReply.emit(this.replyContent);
      this.replyContent = '';
      this.openReply = false;
    }
  }

  addFollowToPost() {
    if (this.followContent.trim()) {
      this.addFollow.emit(this.followContent);
      this.followContent = '';
      this.openFollow = false;
    }
  }

  toggleReply() {
    this.openReply = !this.openReply;
    if (this.openReply) this.openFollow = false;
  }

  toggleFollow() {
    this.openFollow = !this.openFollow;
    if (this.openFollow) this.openReply = false;
  }
	

}
