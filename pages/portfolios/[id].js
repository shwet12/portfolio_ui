import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import axios from 'axios';
import { useGetUser } from '../../actions/index';

import { withRouter } from 'next/router';

const Portfolio = ({portfolio}) => {
  const { data: dataU, loading: loadingU } = useGetUser();
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        <h1>I am Portfolio page</h1>
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  )
}
Portfolio.getInitialProps = async ({query}) => {
  let post = {};
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch(e) {
    console.error(e);
  }
  return { portfolio: post };
}

export default withRouter(Portfolio);