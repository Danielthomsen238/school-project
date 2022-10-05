import { StyledBlog } from '../src/styles/styledcomponents';

const Blog = (props) => {
  const { author, date, content, title, categori } = props;
  return (
    <>
      <StyledBlog>
        <h2>{title}</h2>
        <p>Dato for udgivelse: {date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <p>Udgiver: {author}</p>
        <p>Kategori: {categori}</p>
      </StyledBlog>
    </>
  );
};

export default Blog;
