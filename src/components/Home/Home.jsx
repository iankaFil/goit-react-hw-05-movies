import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListMovies, MovieItem } from './home.styled';
import { getTrendingMovies } from '../../shared/services/api';
import css from './home.module.css';
import { ColorRing } from 'react-loader-spinner';

const imgPlaceholder = './src/img/no-poster-available.jpg';
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
      <h2 className={css.mainTitle}>Trending movies:</h2>
      <ListMovies>
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
          data.map(({ title, id, poster_path }) => (
            <MovieItem key={id} className={css.movieItem}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                // className={css.movieItem}
              >
                <img
                  className={css.poster}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : imgPlaceholder
                  }
                  alt={title}
                />
                <p className={css.title}>{title}</p>
              </Link>
            </MovieItem>
          ))
        )}
      </ListMovies>
    </>
  );
};

export default Home;
