
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getMoviesByPerson, getPersonDetails} from '../../../api/getMovies';
import Poster from 'components/MovieCards/Poster';
import MovieCards from 'components/MovieCards/MovieCards';

import ScrollButton from '../../ScrollButton/ScrollButton';

import css from './Person.module.css';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';
import { Oval } from 'react-loader-spinner';

const Person = () => {
  const { personId } = useParams();
  // console.log(personId);
  const [items, setItems] = useState([]);
  const [state, setState] = useState({
    name: '',
    birthday: '',
    biography: '',
    place_of_birth: '',
    profile_path: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  // console.log(location.state.from);
  const goBack = () => navigate(from);

  useEffect(() => {

    getPersonDetails(personId).then(response => {
      // console.log(response);
      const { name, birthday, biography, place_of_birth, profile_path } = response;
      setState({
        name: name,
        birthday: birthday,
        biography: biography,
        place_of_birth: place_of_birth,
        profile_path: profile_path,
      })
    })

    getMoviesByPerson(personId).then(response => {
      // console.log(response.cast);
      setItems(response.cast);
    })

  }, [personId]);

  return <>
    <div className={css.go_back} onClick={goBack}>
      <p><MdArrowBackIos className={css.arrow}/>back</p>
    </div>
    <div className={css.container}>
      {state.name ? <article className={css.person}>
        <div className={css.photo}>
          <Poster poster={state.profile_path} alt={state.name} />
        </div>
        <div className={css.info}>
          <h2 className={css.name}>{state.name}</h2>
          <p className={css.birthday}>
          <FaBirthdayCake className={css.cake} />
          {state.birthday === null ? 'No info' : state.birthday}</p>
          <p className={css.place}>{state.place_of_birth === null ? 'No info' : state.place_of_birth}</p>
          <p className={css.biography}>{state.biography === '' ? 'No info' : state.biography}</p>
        </div>
      </article> : <Oval
          className={css.loader}
          height={50}
          width={50}
          color="#AC8BCC"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#C2B6D1"
          strokeWidth={6}
          strokeWidthSecondary={6}
        />}
    <h3 className={css.title}>Movies with {state.name}</h3>
    <MovieCards items={items} />
    <ScrollButton/>
  </div>
  </>
}

export default Person;