// import React from 'react'
// import PropTypes from 'prop-types';
// import './Movie.css';
// import {Link} from 'react-router-dom'

// function Movie(genres,id,poster,summary,title,year) {
//     // console.log(props);
//     // const {genres,id,poster,summary,title,year} = props;
//   return (
    
//     <div className='movie' key={id}>
//       <Link to ={'/detail'} state={{genres,id,poster,summary,title,year}}>
//         <img src={poster} alt={title} title={title} />
//         <div className='movie_data'>
//             <h3 className='movie_title'>{title}</h3>
//             <h4 className='movie_year'>{year}</h4>
//             <ul className='movie_genres'>
//                 {genres.map((genre, index) => {
//                    return (
//                     <li className='movie_genre' key={index}>{genre}</li>
//                     )
//                 })}
//             </ul>
//             <p className='movie_summary'>{summary.slice(0,180)} ...</p>
//         </div>
//         </Link>
//     </div>
    
//   )
  
// }

// Movie.propTypes = {
//     id : PropTypes.number.isRequired,
//     year : PropTypes.number.isRequired,
//     title : PropTypes.string.isRequired,
//     summary : PropTypes.string.isRequired,
//     poster : PropTypes.string.isRequired,
//     genres : PropTypes.arrayOf(PropTypes.string).isRequired,
//                     // arrayOf: 문자열을 원소로 갖는 배열
// }

// export default Movie

// // npm install prop-types


import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';


export default function Movie({key,title, year, summary, poster, genres}) {

  return (
    <div className='movie' key={key}>
      {/* 링크를 클릭할 때 detail로 데이터(props)를 브라우저의 url로 보낸다. */}
      <Link to={'/detail'} state={{title, year, summary, poster, genres}}>
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <h4 className='movie_year'>{year}</h4>
          <ul className='movie_genres'>
            {genres.map((genre, idx) => (
              <li className='movie_genre' key={idx}>
                {genre}
              </li>
            ))}
          </ul>
          <p className='movie_summary'>{summary.slice(0, 200)} ...</p>
        </div>
      </Link>
    </div>
  );
}

/* prop 타입 확인 및 체크 */
// npm install prop-types
// 속성은 첫글자 소문자로 입력 propTypes
Movie.propTyes = {
  title: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  summery: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // arrayOf() : 문자열을 원소로 갖는 배열
  /* isRequired : 필수입력 */
};