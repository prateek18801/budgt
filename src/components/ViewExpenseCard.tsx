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
    notes: string,
    handleDelete: () => void
};

const ViewExpenseCard: React.FC<props> = ({ id, title, amount, category, date, notes, handleDelete }) => {

    const navigate = useNavigate();

    return (
        <Card className='mb-1'>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <div style={{ width: '45%' }}>{title}</div>
                <div style={{ width: '25%' }}><Badge bg='secondary'>₹{amount}</Badge></div>
                <div>
                    <Button variant='success' className='me-1' onClick={() => { navigate('/edit', { state: { id, title, amount, category, date, notes } }) }}>E</Button>
                    <Button variant='danger' onClick={handleDelete}>D</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ViewExpenseCard;
