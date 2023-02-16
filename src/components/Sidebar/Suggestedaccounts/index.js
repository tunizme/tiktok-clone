import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Suggestedaccounts.module.scss';
import AccountItem from './AccountItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);

function Suggestedaccounts({ moreTitle, isFollowed = false }) {
    const [accounts, setAccounts] = useState([]);

    const [followed, setFollowed] = useState([]);

    const [perPage, setPerPage] = useState(5);

    const [hideMoreBtn, setHideMoreBtn] = useState(false);

    useEffect(() => {
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/suggested`, {
                params: { page: 1, per_page: perPage },
            })
            .then((res) => {
                if (isFollowed === res.data.data.is_followed) {
                    setFollowed((pre) => [...pre, ...res.data.data]);
                }
                setAccounts(res.data.data);
            });
    }, [perPage]);

    // useEffect(() => {
    //     axios
    //         .get(`https://tiktok.fullstack.edu.vn/api/me/followings`, {
    //             params: { page: 1 },
    //         })
    //         .then((res) => {
    //             setFollowed(res.data.data);
    //         });
    // }, [followed]);

    const handlSeeMore = () => {
        setHideMoreBtn(true);
        setPerPage(20);
    };
    const handlSeeLess = () => {
        setHideMoreBtn(false);
        setPerPage(5);
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                {isFollowed
                    ? followed.map((result) => <AccountItem key={result.id} data={result} />)
                    : accounts.map((result) => <AccountItem key={result.id} data={result} />)}
            </div>
            {!hideMoreBtn ? (
                <span className={cx('more-btn')} onClick={handlSeeMore}>
                    {moreTitle}
                </span>
            ) : (
                <span className={cx('more-btn')} onClick={handlSeeLess}>
                    See less
                </span>
            )}
        </div>
    );
}

Suggestedaccounts.propTypes = {
    label: PropTypes.string.isRequired,
    moreTitle: PropTypes.string.isRequired,
};

export default Suggestedaccounts;
