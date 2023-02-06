import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faToggleOn,
    faCoins,
    faVideoCamera,
    faGear,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Search from '../Search';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            href: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark mode',
            iconRight: <FontAwesomeIcon icon={faToggleOn} />,
        },
    ];

    const MENU_ITEMS_USER = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            href: '/@username',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            href: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideoCamera} />,
            title: 'LIVE Studio',
            href: '/studio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            href: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            href: '/logout',
            className: 'logout',
        },
    ];

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}>
                        <svg height="42" width="118" alt="TikTok">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M9.87537 16.842V15.7233C9.49211 15.6721 9.10246 15.6401 8.70003 15.6401C3.90288 15.6338 0 19.5399 0 24.3475C0 27.2947 1.46917 29.9031 3.71764 31.4822C2.26763 29.9287 1.37974 27.8381 1.37974 25.5494C1.37974 20.8121 5.17403 16.9507 9.87537 16.842Z"
                                    fill="#25F4EE"
                                ></path>
                                <path
                                    d="M10.0862 29.5259C12.2261 29.5259 13.9763 27.819 14.053 25.6965L14.0594 6.72822H17.5215C17.4512 6.33824 17.4129 5.93548 17.4129 5.52632H12.686L12.6796 24.4946C12.603 26.6171 10.8527 28.324 8.71286 28.324C8.04854 28.324 7.42255 28.1578 6.86682 27.8637C7.58224 28.8674 8.75758 29.5259 10.0862 29.5259Z"
                                    fill="#25F4EE"
                                ></path>
                                <path
                                    d="M23.9923 13.166V12.1112C22.6701 12.1112 21.4436 11.7212 20.4088 11.0435C21.3286 12.0984 22.5742 12.8656 23.9923 13.166Z"
                                    fill="#25F4EE"
                                ></path>
                                <path
                                    d="M20.4088 11.0435C19.3995 9.88639 18.7927 8.37762 18.7927 6.72821H17.528C17.8537 8.53106 18.9269 10.0782 20.4088 11.0435Z"
                                    fill="#FE2C55"
                                ></path>
                                <path
                                    d="M8.70642 20.3646C6.51544 20.3646 4.73328 22.1483 4.73328 24.3411C4.73328 25.8691 5.602 27.1988 6.86676 27.8637C6.39408 27.2116 6.11302 26.4125 6.11302 25.543C6.11302 23.3502 7.89518 21.5665 10.0862 21.5665C10.495 21.5665 10.891 21.6368 11.2615 21.7519V16.9188C10.8782 16.8676 10.4886 16.8356 10.0862 16.8356C10.0159 16.8356 9.95202 16.842 9.88175 16.842V20.55C9.50488 20.4349 9.11523 20.3646 8.70642 20.3646Z"
                                    fill="#FE2C55"
                                ></path>
                                <path
                                    d="M23.9921 13.166V16.842C21.5392 16.842 19.2652 16.0557 17.4127 14.7259V24.3475C17.4127 29.1487 13.5099 33.0613 8.70631 33.0613C6.85388 33.0613 5.12921 32.4731 3.71753 31.4822C5.30806 33.1891 7.57569 34.2632 10.0861 34.2632C14.8832 34.2632 18.7925 30.357 18.7925 25.5494V15.9278C20.6449 17.2576 22.9189 18.0439 25.3718 18.0439V13.3131C24.8927 13.3131 24.4328 13.2619 23.9921 13.166Z"
                                    fill="#FE2C55"
                                ></path>
                                <path
                                    d="M17.4127 24.3475V14.7259C19.2652 16.0557 21.5392 16.842 23.9921 16.842V13.166C22.574 12.8656 21.3284 12.0984 20.4086 11.0435C18.9266 10.0782 17.8599 8.53106 17.5213 6.72821H14.0592L14.0528 25.6964C13.9762 27.8189 12.2259 29.5259 10.0861 29.5259C8.75742 29.5259 7.58847 28.8674 6.86028 27.8701C5.59551 27.1988 4.72679 25.8755 4.72679 24.3475C4.72679 22.1547 6.50895 20.371 8.69993 20.371C9.10874 20.371 9.50478 20.4413 9.87527 20.5564V16.8484C5.17393 16.9507 1.37964 20.8121 1.37964 25.5494C1.37964 27.8381 2.26753 29.9223 3.71753 31.4822C5.12921 32.4731 6.85389 33.0613 8.70632 33.0613C13.5035 33.0613 17.4127 29.1487 17.4127 24.3475Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M30.0477 13.1787H44.8225L43.4683 17.411H39.6357V33.0548H34.8577V17.411L30.0541 17.4173L30.0477 13.1787Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M69.0317 13.1787H84.1514L82.7972 17.411H78.6261V33.0548H73.8417V17.411L69.0381 17.4173L69.0317 13.1787Z"
                                    fill="black"
                                ></path>
                                <path d="M45.7295 19.5015H50.4628V33.0548H45.755L45.7295 19.5015Z" fill="black"></path>
                                <path
                                    d="M52.347 13.1277H57.0802V22.3848L61.7688 17.7754H67.4155L61.4814 23.5356L68.1246 33.0548H62.9122L58.4791 26.4572L57.0739 27.8189V33.0548H52.3406V13.1277H52.347Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M102.49 13.1277H107.224V22.3848L111.912 17.7754H117.559L111.625 23.5356L118.268 33.0548H113.062L108.629 26.4572L107.224 27.8189V33.0548H102.49V13.1277Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M48.0929 17.9544C49.4088 17.9544 50.4755 16.8867 50.4755 15.5697C50.4755 14.2528 49.4088 13.1851 48.0929 13.1851C46.7771 13.1851 45.7103 14.2528 45.7103 15.5697C45.7103 16.8867 46.7771 17.9544 48.0929 17.9544Z"
                                    fill="black"
                                ></path>
                                <path
                                    d="M83.5445 24.942C83.5445 20.6779 86.8342 17.1808 91.0181 16.8548C90.8073 16.8356 90.5199 16.8292 90.3091 16.8292C85.8313 16.8292 82.2031 20.4605 82.2031 24.942C82.2031 29.4236 85.8313 33.0548 90.3091 33.0548C90.5199 33.0548 90.8073 33.042 91.0181 33.0293C86.8406 32.7032 83.5445 29.2062 83.5445 24.942Z"
                                    fill="#25F4EE"
                                ></path>
                                <path
                                    d="M92.8579 16.8292C92.6407 16.8292 92.3532 16.842 92.1425 16.8548C96.32 17.1808 99.6097 20.6779 99.6097 24.942C99.6097 29.2062 96.32 32.7032 92.1425 33.0293C92.3532 33.0484 92.6407 33.0548 92.8579 33.0548C97.3356 33.0548 100.964 29.4236 100.964 24.942C100.964 20.4605 97.3356 16.8292 92.8579 16.8292Z"
                                    fill="#FE2C55"
                                ></path>
                                <path
                                    d="M91.5803 28.8866C89.4021 28.8866 87.6391 27.1221 87.6391 24.942C87.6391 22.762 89.4021 20.9975 91.5803 20.9975C93.7585 20.9975 95.5215 22.762 95.5215 24.942C95.5215 27.1221 93.7522 28.8866 91.5803 28.8866ZM91.5803 16.8292C87.1026 16.8292 83.4744 20.4605 83.4744 24.942C83.4744 29.4236 87.1026 33.0548 91.5803 33.0548C96.0581 33.0548 99.6863 29.4236 99.6863 24.942C99.6863 20.4605 96.0581 16.8292 91.5803 16.8292Z"
                                    fill="black"
                                ></path>
                            </g>
                        </svg>
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Button text>
                        <FontAwesomeIcon icon={faPlus} />
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" content="Messages" interactive="true">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Notification" interactive="true">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_ITEMS_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1598710737386497.jpeg?x-expires=1675609200&x-signature=2FN1xYYwi4773NRi7Jr3iLE3xhc%3D"
                                className={cx('user-avatar')}
                                alt="Tran Anh Vu"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
