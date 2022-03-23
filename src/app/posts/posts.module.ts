import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './list/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './add/edit/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
