import className from 'classnames/bind';

import styles from './DefaultLayoutmodule.scss';
import Header from '~/components/Layout/components/Header';
import SideBar from './SideBar';

const cx = className.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
