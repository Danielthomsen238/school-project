import axios from 'axios';
import Blog from '../../components/Blog';
import SidePanel from '../../components/SidePanel';
import {
  StyledContainer,
  StyledImages,
  StyledSide,
} from 'apps/strapi-frontend/src/styles/styledcomponents';
import Image from 'next/image';
const base_url = 'http://localhost:1337';

export const getStaticPaths = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    };
    const result = await axios.get(`${base_url}/api/blogs`, config);
    const data = result.data;
    const paths = data.data?.map((blog) => {
      return {
        params: { id: blog.id.toString() },
      };
    });
    return {
      paths: paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    const base_url = 'http://localhost:1337';
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    };
    const result = await axios.get(
      `${base_url}/api/blogs/${id}?populate=*`,
      config
    );
    const data = result.data;
    console.log(data);
    return {
      props: {
        blogs: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const Details = ({ blogs }) => {
  console.log({ blogs });
  return (
    <>
      {' '}
      <StyledSide>
        <p>Blogs</p>
        <SidePanel />
      </StyledSide>
      <StyledContainer>
        <Blog
          title={blogs.data.attributes.Title}
          author={blogs.data.attributes.author.data.attributes.Title}
          date={blogs.data.attributes.publishedAt}
          content={blogs.data.attributes.Content}
          categori={blogs.data.attributes.category.data.attributes.category}
        />
        <StyledImages>
          {blogs.data.attributes.Images.data.map((image, idx) => {
            return (
              <>
                <Image
                  src={`${base_url}${image.attributes.url}`}
                  width={600}
                  height={300}
                  alt="frame_work_img"
                />
              </>
            );
          })}
        </StyledImages>
      </StyledContainer>
    </>
  );
};

export default Details;
