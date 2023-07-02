import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TopNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Row className='text-center bg-white py-4 d-flex align-items-center'>
            <Col><Button onClick={() => { navigate(-1) }}>Back</Button></Col>
            <Col><h1>CashTrack</h1></Col>
            <Col><Button onClick={() => { navigate('/config') }}>Config</Button></Col>
        </Row>
    );
}

export default TopNav;
