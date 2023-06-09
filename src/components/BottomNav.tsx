import { Dispatch, SetStateAction } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

type props = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>
};

const BottomNav: React.FC<props> = ({ page, setPage }) => {
    return (
        <Container className='text-center bg-light py-3'>
            <Row>
                <Col><Button variant={page === 1 ? 'success' : 'outline-success'} onClick={() => { setPage(1) }}>Edit</Button></Col>
                <Col><Button variant={page === 0 ? 'success' : 'outline-success'} onClick={() => { setPage(0) }}>Add</Button></Col>
                <Col><Button variant={page === 2 ? 'success' : 'outline-success'} onClick={() => { setPage(2) }}>Stats</Button></Col>
            </Row>
        </Container>
    );
}

export default BottomNav;
