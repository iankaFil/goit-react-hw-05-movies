import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../shared/services/api';
import css from './cast.module.css';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setData(cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : data && data.length > 0 ? (
        <ul className={css.list}>
          {data.map(({ name, profile_path, id }) => (
            <li key={id} className={css.listItem}>
              <p className={css.listDescr}>{name}</p>
              {profile_path && (
                <img
                  className={css.listImg}
                  alt={name}
                  src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.error}>No data found</p>
      )}
    </>
  );
};

export default Cast;
