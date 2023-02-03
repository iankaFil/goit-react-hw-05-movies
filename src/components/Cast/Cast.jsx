import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../shared/services/api';
import css from './cast.module.css';
import PropTypes from 'prop-types';
import { ColorRing } from 'react-loader-spinner';

import userImg from '../../img/user.jpg';

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
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <div className={css.loading}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ margin: '0 auto' }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : data && data.length > 0 ? (
        <div className={css.listWrap}>
          <ul className={css.list}>
            {data.map(({ name, character, profile_path, id }) => (
              <li key={id} className={css.listItem}>
                {profile_path ? (
                  <img
                    className={css.listImg}
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                  />
                ) : (
                  <img className={css.listImg} alt={name} src={userImg} />
                )}

                <p className={css.listName}>{name}</p>
                <p className={css.listCharacter}>{character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={css.error}>No data found</p>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;
