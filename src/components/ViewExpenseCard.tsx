import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

type props = {
    title: string,
    amount: number
};

const ViewExpenseCard: React.FC<props> = ({ title, amount }) => {
    return (
        <Card className='mb-1'>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <div style={{width: '45%'}}>{title}</div>
                <div style={{width: '25%'}}><Badge bg='secondary'>₹{amount}</Badge></div>
                <div>
                    <Button variant='success' className='me-1'>E</Button>
                    <Button variant='danger'>D</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ViewExpenseCard;
