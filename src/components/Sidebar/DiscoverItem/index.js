import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './DiscoverItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DiscoverItem({ label, to, hastagIcon = false, musicIcon = false, text }) {
    return (
        <>
            <button className={cx('wrapper')} to={to}>
                <span>{hastagIcon && <FontAwesomeIcon icon={faHashtag} />}</span>
                <span>{musicIcon && <FontAwesomeIcon icon={faMusic} />}</span>
                <p className={cx('text')}>{text}</p>
            </button>
        </>
    );
}

DiscoverItem.propTypes = {
    to: PropTypes.string.isRequired,
    hastagIcon: PropTypes.bool,
    musicIcon: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default DiscoverItem;
