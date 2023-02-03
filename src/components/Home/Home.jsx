import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListMovies, MovieItem } from './home.styled';
import { getTrendingMovies } from '../../shared/services/api';
import css from './home.module.css';
import { ColorRing } from 'react-loader-spinner';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ListMovies>
        <h2 className={css.title}>Trending movies:</h2>
        {loading ? (
          <div className={css.loading}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ margin: 'auto' }}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        ) : (
          data.map(({ title, id }) => (
            <MovieItem key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movieItem}
              >
                {title}
              </Link>
            </MovieItem>
          ))
        )}
      </ListMovies>
    </>
  );
};

export default Home;
