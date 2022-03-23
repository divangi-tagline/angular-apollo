import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './add/edit/post/post.component';
import { PostsComponent } from './list/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'add',
    component: PostComponent
  },
  {
    path: 'update/:id',
    component: PostComponent
  },
  {
    path: 'detail/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
