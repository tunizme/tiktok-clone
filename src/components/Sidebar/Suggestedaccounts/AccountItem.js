import PropTypes from 'prop-types';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Suggestedaccounts.module.scss';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex={-1} {...props}>
                <div>
                    <AccountPreview data={data} />
                </div>
            </div>
        );
    };

    return (
        <Tippy offset={[-60, 0]} interactive="true" delay={[800, 500]} placement="bottom" render={renderPreview}>
            <Link to={`/@${data.nickname}`} className={cx('accounts-wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                    </p>
                    <span className={cx('username')}>{`${data.first_name} ${data.last_name} `}</span>
                </div>
            </Link>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
