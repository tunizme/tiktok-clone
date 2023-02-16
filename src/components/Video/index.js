import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useRef, useState } from 'react';
import useElementOnScreen from '../AutoPlayVideo';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faPause, faPlay, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Video({ data }) {
    // const [volume, setVolume] = useState(0);
    // const controlCircle = useRef();
    // const controlBar = useRef();
    // const controlProgress = useRef();

    const video = useRef();

    const [isPlaying, setIsPlaying] = useState(false);

    // const handlePlay = () => {
    //     setIsPlaying(!isPlaying);
    //     setVolume(0.5);
    //     video.current.play();
    // };

    // const handlePause = () => {
    //     setIsPlaying(!isPlaying);

    //     video.current.pause();
    // };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
    };
    const isVisibile = useElementOnScreen(options, video);
    useEffect(() => {
        if (isVisibile) {
            if (!isPlaying) {
                video.current.play();
                setIsPlaying(true);
            }
        } else {
            if (isPlaying) {
                video.current.load();
                video.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div
            className={cx('container-control')}
            style={
                data.meta.video.resolution_x > 592
                    ? { width: 'calc(450px + (100vw - 768px) / 1152 * 100)' }
                    : { height: 'calc(450px + (100vw - 768px) / 1152 * 100)' }
            }
        >
            <img className={cx('image-preview')} alt="" src={data.thumb_url} />
            <div className={cx('video')}>
                <video
                    preload="auto"
                    loop
                    controls
                    ref={video}
                    tabindex="2"
                    mediatype="video"
                    src={data.file_url}
                ></video>
                {/* <div className={cx('volume')}>
                    <div className={cx('volume-input')}>
                        <div ref={controlProgress} className={cx('control-progress')}></div>
                        <div ref={controlCircle} className={cx('control-circle')}></div>
                        <div ref={controlBar} className={cx('control-bar')}></div>
                    </div>
                    <div className={cx('volume-icon')}>
                        {volume ? <FontAwesomeIcon icon={faVolumeHigh} /> : <FontAwesomeIcon icon={faVolumeMute} />}
                    </div>
                </div>
                <div className={cx('controls')}>
                    {!isPlaying && (
                        <div className={'play'} onClick={handlePlay}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    )}
                    {isPlaying && (
                        <div className={'pause'} onClick={handlePause}>
                            <FontAwesomeIcon icon={faPause} />
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    );
}

export default Video;
