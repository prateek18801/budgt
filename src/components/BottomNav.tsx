import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BottomNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Row className='text-center bg-white py-4 align-items-center'>
            <Col><Button onClick={() => { navigate('/view') }}>View</Button></Col>
            <Col><Button onClick={() => { navigate('/') }}>Add</Button></Col>
            <Col><Button onClick={() => { navigate('/stats') }}>Stats</Button></Col>
        </Row>
    );
}

export default BottomNav;
