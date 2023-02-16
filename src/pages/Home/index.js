import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Posts from '~/layout/components/Posts';
const cx = classNames.bind(styles);

function Home() {
    return <Posts />;
}

export default Home;
