import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts-slice';
import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = event => dispatch(changeFilter(event.currentTarget.value));

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFieldFilter}
      />
    </label>
  );
}


export default Filter;