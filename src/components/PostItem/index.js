import classNames from 'classnames/bind';
import styles from './PostItem.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Video from '../Video';

const cx = classNames.bind(styles);

function PostItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <a href="/nickname" className={cx('container-avatar')}>
                <Image className={cx('avatar')} alt={data.user.nickname} src={data.user.avatar} />
            </a>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <a href="/nickname" className={cx('name')}>
                        <h3 className={cx('nickname')}>
                            {data.user.nickname}
                            {data.user.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                        </h3>
                        <h4 className={cx('fullname')}> {`${data.user.first_name} ${data.user.last_name}`}</h4>
                    </a>
                </div>
                <div className={cx('follow-btn')}>
                    <Button small primary outline>
                        Follow
                    </Button>
                </div>
                <div className={cx('container-description')}>
                    <span className={cx('title')}>{data.user.description}</span>
                    <a href="https://www.tiktok.com/">
                        <strong>#lenhutquan</strong>
                    </a>
                    <a href="https://www.tiktok.com/">
                        <strong>#khuaaoxanh</strong>
                    </a>
                    <a href="https://www.tiktok.com/">
                        <strong>#saonuocmatcuroi</strong>
                    </a>
                    <a href="https://www.tiktok.com/">
                        <strong>#saonuocmatcuroi</strong>
                    </a>
                    <a href="https://www.tiktok.com/">
                        <strong>#saonuocmatcuroi</strong>
                    </a>
                    <a href="https://www.tiktok.com/">
                        <strong>#saonuocmatcuroi</strong>
                    </a>
                    <a href="https://www.tiktok.com/">
                        <strong>#saonuocmatcuroi</strong>
                    </a>
                </div>
                <h4>
                    <a href="https://www.tiktok.com/" className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        {data.music}
                    </a>
                </h4>
                <div className={cx('container-video')}>
                    <Video data={data} />
                    <div className={cx('interact')}>
                        <button className={cx('heart-react')}>
                            <span>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <strong>{data.likes_count}</strong>
                        </button>
                        <button className={cx('comments')}>
                            <span>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </span>
                            <strong>{data.comments_count}</strong>
                        </button>
                        <button className={cx('share')}>
                            <span>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <strong>{data.shares_count ? data.shares_count : 'Chia sẻ'}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
