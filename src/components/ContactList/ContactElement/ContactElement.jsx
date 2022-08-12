import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
import css from "./ContactElement.module.css"

const ContactElement = ({ contactItem }) => {
    const { id, name, number } = contactItem;
    const dispatch = useDispatch();
    return (
        <li
            key={id}
            className={css.list__item}>
            <span className={css.list__name}>{name}:</span>
            <span className={css.list__number}>{number}</span>
            <button
                className={css.list__btn}
                type="button"
                id={id}
                onClick={(e) => dispatch(deleteContact(e.target.id))}>
                Delete
            </button>
        </li>
    )
}

ContactElement.propTypes = {
    contactItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

export default ContactElement;