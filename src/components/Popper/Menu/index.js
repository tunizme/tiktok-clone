import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items = [], ...passProps }) {
    const [level, setLevel] = useState([{ data: items }]);
    const current = level[level.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setLevel((pre) => [...pre, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            {...passProps}
            delay={[0, 700]}
            offset={[12, 14]}
            interactive
            hideOnClick="true"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {level.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => setLevel((pre) => pre.slice(0, pre.length - 1))}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setLevel((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu;
