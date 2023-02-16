import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import Suggestedaccounts from './Suggestedaccounts';
import routesConfig from '~/config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { currentUser } from '~/layout/components/Header';
import DiscoverItem from './DiscoverItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('container')}>
            <div className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={routesConfig.home}
                        icon={<FontAwesomeIcon icon={faHouse} width={32} height={32} />}
                    />
                    <MenuItem
                        title="Following"
                        to={routesConfig.following}
                        icon={<FontAwesomeIcon icon={faUserGroup} width={32} height={32} />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={routesConfig.live}
                        icon={<FontAwesomeIcon icon={faVideoCamera} width={32} height={32} />}
                    />
                </Menu>
                {!currentUser && (
                    <div className={cx('recommend-follow')}>
                        <div className={cx('line')}></div>

                        <span className={cx('text-recommend')}>
                            Log in to follow creators, like videos, and view comments.
                        </span>
                        <div className={cx('login-btn')}>
                            <Button className="bold" large outline>
                                Log in
                            </Button>{' '}
                        </div>
                    </div>
                )}
                <div className={cx('suggested-accounts')}>
                    <div className={cx('line')}></div>
                    <span className={cx('label')}>Suggested accounts</span>

                    <Suggestedaccounts moreTitle="See all" label="Suggested accounts" />
                    {currentUser ? (
                        <>
                            <div className={cx('line')}></div>
                            <Suggestedaccounts isFollowed={true} moreTitle="See more" label="Following accounts" />
                            <div className={cx('line')}></div>
                        </>
                    ) : (
                        <>
                            <div className={cx('line')}></div>
                            <span className={cx('label')}>Discover</span>
                        </>
                    )}
                </div>
                <div className={cx('discover')}>
                    <DiscoverItem to="" hastagIcon text="haycuvui" />
                    <DiscoverItem to="" hastagIcon text="haycuvuilenemoi" />
                    <DiscoverItem to="" hastagIcon text="haycuvuilenemoi" />
                    <DiscoverItem to="" hastagIcon text="chilakhongyeuthuongthoisaonuocmatcuroi" />
                    <DiscoverItem to="" musicIcon text="chilakhongyeuthuongthoisaonuocmatcuroi" />
                    <DiscoverItem to="" musicIcon text="dungbuonemoianhtin" />
                </div>
                <div className={cx('line')}></div>
                <div className={cx('footer')}>
                    <div>
                        <a alt="" target="_blank" href="https://www.tiktok.com/about?lang=en">
                            About
                        </a>
                        <a alt="" target="_blank" href="https://newsroom.tiktok.com/vi-vn/">
                            Newsroom
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/about/contact?lang=en">
                            Contact
                        </a>
                        <a alt="" target="_blank" href="https://careers.tiktok.com/">
                            Careers
                        </a>
                        <a alt="" target="_blank" href="https://www.bytedance.com/">
                            ByteDance
                        </a>
                    </div>
                    <div>
                        <a alt="" target="_blank" href="https://www.tiktok.com/forgood">
                            TikTok for Good
                        </a>
                        <a
                            alt=""
                            target="_blank"
                            href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1"
                        >
                            Advertise
                        </a>
                        <a alt="" target="_blank" href="https://developers.tiktok.com/?refer=tiktok_web">
                            Developers
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/transparency/en/">
                            Transparency
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/tiktok-rewards/eligibility/">
                            TikTok Rewards
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/browse">
                            TikTok Browse
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/embed">
                            TikTok Embeds
                        </a>
                    </div>
                    <div>
                        <a alt="" target="_blank" href="https://support.tiktok.com/en">
                            Help
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/safety/en/">
                            Safety
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/legal/page/row/terms-of-service/en">
                            Terms
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/legal/page/row/privacy-policy/en">
                            Privacy
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/creators/creator-portal/en-us/">
                            Creator Portal
                        </a>
                        <a alt="" target="_blank" href="https://www.tiktok.com/community-guidelines?lang=en">
                            Community Guidelines
                        </a>
                    </div>
                    <span>© 2023 TikTok</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
