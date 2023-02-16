import PropTypes from 'prop-types';
function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('label')}>{label}</span>
        </div>
    );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discover;
