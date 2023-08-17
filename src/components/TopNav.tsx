import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import settings from '../assets/icons/settings.png';
import arrow_back_ios from '../assets/icons/arrow_back_ios.png';

const TopNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Row className='text-center bg-white py-4 d-flex align-items-center'>
            <Col>
                <div onClick={() => { navigate(-1) }}>
                    <img src={arrow_back_ios} height="25" alt="back" />
                </div>
            </Col>
            <Col><h1>CashTrack</h1></Col>
            <Col>
                <div onClick={() => { navigate('/config') }}>
                    <img src={settings} height="25" alt="settings" />
                </div>
            </Col>
        </Row>
    );
}

export default TopNav;
