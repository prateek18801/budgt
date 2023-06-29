import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type props = {
    title: string,
    amount: number
};

const ViewExpenseCard: React.FC<props> = ({ title, amount }) => {
    return (
        <Card className='mb-1'>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <Card.Subtitle>{title}</Card.Subtitle>
                <Card.Subtitle>{amount}</Card.Subtitle>
                <div>
                    <Button variant='success' className='me-1'>E</Button>
                    <Button variant='danger'>D</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ViewExpenseCard;
