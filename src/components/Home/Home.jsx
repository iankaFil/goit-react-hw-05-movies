import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ListMovies, MovieItem } from './home.styled';
import { getTrendingMovies } from '../../shared/services/api';
import css from './home.module.css';
import Paginator from 'components/Pagination/Paginator';
import { ColorRing } from 'react-loader-spinner';

const imgPlaceholder = './src/img/no-poster-available.jpg';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);
  const [totalPages, settotalPages] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies(page);
        setMovies(data.results);
        settotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

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
          movies.map(({ title, id, poster_path }) => (
            <MovieItem key={id} className={css.movieItem}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
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
      <Paginator
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        params={params}
        currentPage={Number(params?.page - 1) || 0}
      />
    </>
  );
};

export default Home;
