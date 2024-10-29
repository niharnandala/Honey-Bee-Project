import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logoUrl:string="/assets/images/background img.jpg";

  contents=[
    {
      image:"/assets/images/media1.jpg",
      heading:"Profile and User Accounts: ",
      description:"Social media platforms allow usersto create personal profiles or user accounts.Users can typically customize their profiles by adding information about themselves, such as a profile picture, bio, interests, and links to external websites.",
      class:"bg-primary bg-opacity-50"
    },
    {
      image:"/assets/images/media2.png",
      heading:"News Feed or Timeline: ",
      description:"The news feed or timeline is a central feature of social media platforms.It displays a continuously updating stream of content from the user's connections or the accounts they follow.The news feed may include posts, photos, videos, articles, and advertisements",
      class:"bg-warning bg-opacity-50"
    },
    {
      image:"/assets/images/media3.jpg",
      heading:"Posting and Sharing: ",
      description:"Social media enables users to create and share various types of content, such as text posts, photos, videos, links, and multimedia. Users can express themselves,share updates, or contribute to ongoing conversations by posting content on their profiles or in groups and communities.",
      class:"bg-info bg-opacity-50"
    },
    {
      image:"/assets/images/media4.png",
      heading:"Likes, Comments, and Sharing: ",
      description:"Social media platforms typically offer interactive features that allow users to engage with content. Users can 'like' or react to posts, comment on them, and share them with their connections.",
      class:"bg-danger bg-opacity-50"
    },
    {
      image:"/assets/images/media5.jpg",
      heading:"Networking and Connections: ",
      description:"Social media platforms are designed to connect individuals and facilitate networking.Users can search for and connect with other users, build a network of connections, and expand their social circles. ",
      class:"bg-success bg-opacity-50"
    },
    {
      image:"/assets/images/media6.jpg",
      heading:"Messaging and Chat: ",
      description:"These features enable one-on-one or group conversations, file sharing, and the exchange of multimedia content.Messaging features enhance the social aspect of the platforms and promote direct communication between users.",
      class:"bg-secondary bg-opacity-50" 
    }
  ]
}
