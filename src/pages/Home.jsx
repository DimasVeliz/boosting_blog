import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Sample Title 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor varius nulla in ullamcorper. Aliquam faucibus maximus odio. Suspendisse potenti.",
      image: "https://via.placeholder.com/300x200.png?text=Sample+Image+1",
    },
    {
      id: 2,
      title: "Sample Title 2",
      desc: "Maecenas tristique quam vel est rhoncus, vel dignissim dolor pulvinar. Sed lacinia sagittis metus in euismod. Fusce pharetra, libero quis vestibulum varius, augue sapien laoreet magna, vitae bibendum turpis nisi in ex.",
      image: "https://via.placeholder.com/300x200.png?text=Sample+Image+2",
    },
    {
      id: 3,
      title: "Sample Title 3",
      desc: "Pellentesque id malesuada massa. Vestibulum at velit massa. Aenean euismod nibh non est interdum, sit amet imperdiet ipsum laoreet. Fusce ac blandit sapien.",
      image: "https://via.placeholder.com/300x200.png?text=Sample+Image+3",
    },
    {
      id: 4,
      title: "Sample Title 4",
      desc: "Donec ornare, metus sit amet varius posuere, nunc neque gravida metus, id sagittis augue nisi eget mauris. Sed vitae eleifend libero. Mauris ultrices volutpat malesuada.",
      image: "https://via.placeholder.com/300x200.png?text=Sample+Image+4",
    },
    {
      id: 5,
      title: "Sample Title 5",
      desc: "Nullam vel tincidunt velit. Integer malesuada, sapien at congue ultrices, lectus turpis tincidunt eros, in bibendum quam est a eros. Sed et mauris sit amet ex suscipit faucibus nec quis sapien.",
      image: "https://via.placeholder.com/300x200.png?text=Sample+Image+5",
    }
  ]
  return (
    <div className='home'>
      <div className='post'>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.image} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home