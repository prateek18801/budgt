import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BottomNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Container className='text-center bg-light py-3'>
            <Row>
                <Col><Button onClick={() => { navigate('/view') }}>View</Button></Col>
                <Col><Button onClick={() => { navigate('/') }}>Add</Button></Col>
                <Col><Button onClick={() => { navigate('/stats') }}>Stats</Button></Col>
            </Row>
        </Container>
    );
}

export default BottomNav;
