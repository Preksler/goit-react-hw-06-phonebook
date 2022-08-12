import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import css from "./ContactFilter.module.css"

const ContactFilter = ({ title }) => {
    const dispatch = useDispatch();

    return (
        <label className={css.form__lable}>
            {title}
            <input
                className={css.form__input}
                type="text"
                name='filter'
                onChange={e => dispatch(filterContacts(e.target.value))}>
            </input>
        </label>
    )
}

ContactFilter.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ContactFilter;