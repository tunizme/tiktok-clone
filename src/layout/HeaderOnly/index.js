import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../../components/Sidebar';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
