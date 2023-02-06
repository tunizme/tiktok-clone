import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            to={data.to}
            href={data.href}
            className={cx('menu-item', { logout: data.className, language: data.type })}
            onClick={onClick}
        >
            <div>
                {data.icon}
                {data.title}
            </div>
            <div className={cx('rightIcon')}>{data.iconRight}</div>
        </Button>
    );
}

export default MenuItem;
