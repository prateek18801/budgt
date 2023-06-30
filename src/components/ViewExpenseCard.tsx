import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

type props = {
    id: string,
    title: string,
    amount: string,
    category: string,
    date: string,
    notes: string
};

const ViewExpenseCard: React.FC<props> = (props) => {

    const navigate = useNavigate();

    return (
        <Card className='mb-1'>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <div style={{ width: '45%' }}>{props.title}</div>
                <div style={{ width: '25%' }}><Badge bg='secondary'>₹{props.amount}</Badge></div>
                <div>
                    <Button variant='success' className='me-1' onClick={() => { navigate('/edit', { state: props }) }}>E</Button>
                    <Button variant='danger'>D</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ViewExpenseCard;
