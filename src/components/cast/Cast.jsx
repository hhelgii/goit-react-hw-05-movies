import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { getMovieInfoWithParams } from 'services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import defaultProfile from '../../img/default.png'
import 'swiper/css';
import css from './cast.module.css';
const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      const { cast } = await getMovieInfoWithParams(movieId, 'credits');
      setCast(cast);
    };
    fetchCast();
  }, [movieId]);
  // console.log(cast);
  return (
    cast && (
      <>
        {/* <ul className={css.castList}>
            {cast.map(({ id, name,character, profile_path }) => {
              return (
                <li key={id} className={css.castMember}>
                 <div className={css.castMemberImgWrap}> <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className={css.castMemberImg}/></div>
                  <div className={css.castMemberInfo}>
                    <p className={css.castMemberName}>{name}</p>
                    <p className={css.castMemberCharacter}>{character}</p>
                  </div>
                </li>
              );
            })}
        </ul> */}

        
        <Swiper
          className={css.castList}
          modules={[Navigation]}
          slidesPerView={3}
         
         navigation={{ clickable: true }} 
        >
          {cast.map(({ id, name, character, profile_path }) => {
            const image=profile_path?`https://image.tmdb.org/t/p/w500${profile_path}`:`${defaultProfile}`
           
            return (
              <SwiperSlide key={id} className={css.castMember}>
                <div className={css.castMemberImgWrap}>
                  {' '}
                  <img
                    src={image}
                    alt={name}
                    className={css.castMemberImg}
                  />
                </div>
                <div className={css.castMemberInfo}>
                  <p className={css.castMemberName}>{name}</p>
                  <p className={css.castMemberCharacter}>{character}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {cast.length === 0 && <p className={css.message}>We don't have cast for this movie</p>}
      </>
    )
  );
};
Cast.propTypes = {
  movieId: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};

export default Cast;
