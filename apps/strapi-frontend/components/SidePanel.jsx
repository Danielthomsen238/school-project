import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SidePanel = () => {
  const [data, setData] = useState([]);
  const base_url = 'http://localhost:1337';
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  useEffect(() => {
    axios
      .get(`${base_url}/api/blogs?populate=*`, config)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log('data', data);
  return (
    <>
      {data.data?.map((blog) => {
        return (
          <>
            {' '}
            <Link href={`/blogs/${blog.id}`}>
              <a>{blog.attributes.Title}</a>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default SidePanel;
