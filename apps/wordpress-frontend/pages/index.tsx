import axios from 'axios';
import { useState, useEffect } from 'react';

const Index = () => {
  const [data, setData] = useState([]);
  const [movieImg, setImgData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost/wordpress/wp-json/wp/v2/movies')
      .then((response) => {
        const res = response.data;
        setData(res);
      });
    axios
      .get('http://localhost/wordpress/wp-json/wp/v2/media')
      .then((response) => {
        const res = response.data;
        setImgData(res);
      });
  }, []);

  return (
    <>
      {data.map((movie, idx) => {
        return (
          <div key={idx} className="container">
            <h2 dangerouslySetInnerHTML={{ __html: movie.title.rendered }}></h2>
            <img className="image" src={movieImg[idx].source_url} />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: movie.content.rendered }}
            />
            <ul>
              <li>Actors: {movie.acf.actors}</li>
              <li>Director: {movie.acf.director}</li>
              <li>Duration: {movie.acf.duration} Time</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Index;
