// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieReviews } from '../../shared/services/api';
import css from './reviews.module.css';
// import { ColorRing } from 'react-loader-spinner';

const Reviews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setData(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {data && data.length > 0 ? (
        <div className={css.listWrap}>
          <ul className={css.list}>
            {data.map(({ author, content, id }) => (
              <li key={id} className={css.listItem}>
                <p className={css.listName}>{author}</p>
                {content && content}
              </li>
            ))}
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <p className={css.error}>No reviews found</p>
      )}
    </>
  );
};
//   return (
//     <>
//       {loading ? (
//         <ColorRing
//           visible={true}
//           height="80"
//           width="80"
//           ariaLabel="blocks-loading"
//           wrapperStyle={{ margin: '0 auto' }}
//           wrapperClass="blocks-wrapper"
//           colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//         />
//       ) : data && data.length > 0 ? (
//         <div className={css.listWrap}>
//           <ul className={css.list}>
//             {data.map(({ author, content, id }) => (
//               <li key={id} className={css.listItem}>
//                 <p className={css.listName}>{author}</p>
//                 {content && content}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p className={css.error}>No reviews found</p>
//       )}
//       <Suspense fallback={<div>Loading subpage...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

export default Reviews;
