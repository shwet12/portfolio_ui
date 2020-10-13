import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
// import Link from 'next/link';
import Link from 'next/link';
import axios from 'axios';
import BasePage from '../../components/BasePage';
import { useGetUser } from '../../actions/index';

const Portfolios = ({posts}) => {
  const { data: dataU, loading: loadingU } = useGetUser();
  const renderPosts = (posts) => {
    return posts.map(post =>
      <li key={post.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>
            {post.title}
          </a>
        </Link>
      </li>
    )
  }
    

return (
  <BaseLayout user={dataU} loading={loadingU}>
    <BasePage>
      <h1>I am Portfolio Page</h1>
      <ul>
        {renderPosts(posts)}
      </ul>
    </BasePage>
  </BaseLayout>
)
}

Portfolios.getInitialProps = async () => {
let posts = [];
try {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  posts = res.data;
} catch(e) {
  console.error(e);
}

return { posts: posts.slice(0, 10) };
}
export default Portfolios;