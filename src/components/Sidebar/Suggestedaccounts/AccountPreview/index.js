import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-preview')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={cx('follow-btn')}>
                    <Button primary>Follow</Button>
                </div>
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h3>{data.nickname}</h3>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                </p>
                <h5 className={cx('username')}>{`${data.first_name} ${data.last_name} `}</h5>
            </div>
            <div className={cx('count-user')}>
                <div className={cx('count-follow')}>
                    <span className={cx('followers')}>{`${data.followers_count}`}</span>
                    <span>Followers</span>
                </div>
                <div className={cx('count-like')}>
                    <span className={cx('likes')}>{`${data.likes_count}`}</span>
                    <span>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
