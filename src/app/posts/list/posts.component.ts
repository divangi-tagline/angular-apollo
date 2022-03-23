import { Component, OnInit } from '@angular/core';

import { Apollo, gql } from 'apollo-angular';

const Get_Posts = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allPosts: any = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.getPostsList();
  }

  getPostsList(){
    this.apollo
    .watchQuery<any>({
      query: Get_Posts,
    })
    .valueChanges.subscribe(({ data, loading }) => {
      this.allPosts = data.posts.data;
      console.log('this.allPosts ====>', this.allPosts);
    });
  }

  addProduct(){
  }

}
