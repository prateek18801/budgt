import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BottomNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Row className='text-center bg-white py-4 align-items-center'>
            <Col>
                <div onClick={() => { navigate('/view') }}>
                    <span className='material-symbols-rounded'>receipt_long</span>
                </div>
            </Col>
            <Col>
                <div onClick={() => { navigate('/') }}>
                    <span className='material-symbols-rounded'>add_shopping_cart</span>
                </div>
            </Col>
            <Col>
                <div onClick={() => { navigate('/stats') }}>
                    <span className='material-symbols-rounded'>monitoring</span>
                </div>
            </Col>
        </Row>
    );
}

export default BottomNav;
