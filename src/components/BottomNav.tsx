import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import monitoring from '../assets/icons/monitoring.png';
import receipt_long from '../assets/icons/receipt_long.png';
import add_shopping_cart from '../assets/icons/add_shopping_cart.png';

const BottomNav: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Row className='text-center bg-white py-4 align-items-center'>
            <Col>
                <div onClick={() => { navigate('/view') }}>
                    <img src={receipt_long} height="25" alt="history" />
                </div>
            </Col>
            <Col>
                <div onClick={() => { navigate('/') }}>
                    <img src={add_shopping_cart} height="25" alt="create" />
                </div>
            </Col>
            <Col>
                <div onClick={() => { navigate('/stats') }}>
                    <img src={monitoring} height="25" alt="stats" />
                </div>
            </Col>
        </Row>
    );
}

export default BottomNav;
