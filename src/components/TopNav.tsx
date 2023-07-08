import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TopNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Row className='text-center bg-white py-4 d-flex align-items-center'>
            <Col>
                <div onClick={() => { navigate(-1) }}>
                    <span className='material-symbols-rounded'>arrow_back_ios</span>
                </div>
            </Col>
            <Col><h1>CashTrack</h1></Col>
            <Col>
                <div onClick={() => { navigate('/config') }}>
                    <span className='material-symbols-rounded'>settings</span>
                </div>
            </Col>
        </Row>
    );
}

export default TopNav;
