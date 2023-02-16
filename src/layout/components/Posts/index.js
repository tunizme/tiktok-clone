import classNames from 'classnames/bind';
import styles from './Posts.module.scss';
import PostItem from '~/components/PostItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Posts() {
    const [posts, setPosts] = useState([]);

    const [perPage, setperPage] = useState(1);

    useEffect(() => {
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you`, {
                params: { page: 1 },
            })
            .then((res) => {
                setPosts(res.data.data);
            });
    }, [perPage]);

    return (
        <div className={cx('wrapper')}>
            <div>
                {posts.map((result) => (
                    <div>
                        <PostItem data={result} key={result.id} />
                        <div className={cx('line')}> </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
