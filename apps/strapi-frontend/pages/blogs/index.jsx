import axios from 'axios';
import { useEffect, useState } from 'react';
import Blog from '../../components/Blog';
import Image from 'next/image';
import {
  StyledImages,
  StyledSide,
  StyledContainer,
  StyledButton,
  StyledBtnContainer,
} from '../../src/styles/styledcomponents';
import SidePanel from '../../components/SidePanel';

const Blogs = () => {
  const [runeEffect, setRuneEffect] = useState(false);
  const [btnActive, setBtnActiv] = useState(false);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [sort, setSort] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const base_url = 'http://localhost:1337';
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        `${base_url}/api/blogs?pagination[page]=${page}&pagination[pageSize]=2${sort}${search}&populate=*`,
        config
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [runeEffect]);
  return (
    <>
      <StyledSide>
        <p>Blogs</p>
        <SidePanel />
      </StyledSide>
      <StyledContainer>
        <div className="search_container">
          <input
            type="text"
            placeholder="Search titles"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              console.log(searchInput);
            }}
            onKeyUp={() => {
              if (searchInput.length == 0) {
                setBtnActiv(false);
                setSearch('');
                setRuneEffect((state) => !state);
              }
            }}
          />
          <StyledButton
            onClick={() => {
              setRuneEffect((state) => !state);
              setSearch(`&filters[Title][$contains]=${searchInput}`);
              if (searchInput.length > 0) {
                setBtnActiv(true);
              }
            }}
          >
            Search
          </StyledButton>
        </div>
        <StyledButton
          onClick={() => {
            setSort('&sort=Title');
            setRuneEffect((state) => !state);
          }}
        >
          Sortere på Titler
        </StyledButton>
        {data.data?.map((blog, idx) => {
          const string = blog.attributes.publishedAt;
          const newArray = string.split('T');
          return (
            <>
              <Blog
                key={idx}
                title={blog.attributes.Title}
                author={blog.attributes.author.data.attributes.Title}
                date={newArray[0]}
                content={blog.attributes.Content}
                categori={blog.attributes.category.data.attributes.category}
              />
              <StyledImages>
                {blog.attributes.Images.data.map((image, idx) => {
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
            </>
          );
        })}
        <StyledBtnContainer
          style={
            btnActive == false ? { display: 'block' } : { display: 'none' }
          }
        >
          <StyledButton
            className="prev"
            style={page == 1 ? { display: 'none' } : { display: 'block' }}
            onClick={() => {
              setPage((state) => {
                if (state >= 1) {
                  return state - 1;
                } else {
                  return;
                }
              });
              setRuneEffect((state) => !state);
            }}
          >
            Prev
          </StyledButton>
          <StyledButton
            className="next"
            style={page >= 3 ? { display: 'none' } : { display: 'block' }}
            onClick={() => {
              setPage((state) => {
                if (state >= 0 && state < 3) {
                  return state + 1;
                } else {
                  return state;
                }
              });
              setRuneEffect((state) => !state);
            }}
          >
            Next
          </StyledButton>
        </StyledBtnContainer>
      </StyledContainer>
    </>
  );
};

export default Blogs;
