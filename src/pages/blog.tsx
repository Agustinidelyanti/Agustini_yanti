// import * as React from "react";
// import BlogDesc from "../components/Atoms/Descriptions/BlogDesc";
// import ComingSoon from "../components/Atoms/NotFound/ComingSoon";

// export default function blog() {
//   return (
//     <section id="blog">
//       {/* Blog Title */}
//       <BlogDesc />
//       <ComingSoon />
//     </section>
//   );
// }


// Import necessary components
import { Component } from '@angular/core';
import { PostService } from './PostService'; // Assuming PostService is defined elsewhere

// Interface for BlogPost data structure
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
}

@Component({
  selector: 'app-blog', // Adjust selector if needed (e.g., 'blog-section')
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts: BlogPost[] = []; // Array to hold blog posts
  isLoading: boolean = true; // Flag to indicate data loading state

  constructor(private postService: PostService) {
    this.fetchData(); // Fetch posts on component initialization
  }

  async fetchData() {
    try {
      this.posts = await this.postService.getAllPosts(); // Fetch posts from service
      this.isLoading = false; // Data loaded, set flag to false
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Handle errors appropriately, e.g., display an error message
    }
  }
}
