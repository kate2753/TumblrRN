const API_KEY = 'Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV';
const URL_PREFIX = 'https://api.tumblr.com/v2';
const POSTS_URL = `${URL_PREFIX}/blog/humansofnewyork.tumblr.com/posts/photo?api_key=${API_KEY}`;

function fetchPosts() {
  return fetch(POSTS_URL)
      .then(response => response.json())
      .then(response => response.response.posts.map(post => (
        {
          caption: post.caption
          .replace(/<[^>]*>/g, '')
          .replace(/&frac12;/g, '1/2')
          .replace(/&frac14;/g, '1/4')
          .replace(/&frac34;/g, '3/4')
          .trim(),
          imageURL: post.photos[0].original_size.url,
        }
      )));
}

export {
  fetchPosts,
};
