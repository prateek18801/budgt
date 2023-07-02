import { PieChart, Pie, Cell, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

const CHART_COLORS = {
    food: '#A52A2A',
    travel: '#00BFFF',
    groceries: '#7FFF00',
    bills: '#808080',
    rent: '#FF0000',
    health: '#FFFF00',
    investment: '#800080',
    clothing: '#000000',
    loan: '#FFA500',
    others: '#FF4500'
};

const ExpenseAnalysis: React.FC = () => {

    const [expenses, setExpenses] = useLocalStorage('EXPENSES', []);

    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const categoryAmountSum = {};
    const dateAmountSum = {};

    expenses.forEach(expense => {
        if (month === +expense.date.split('-')[1] && year === +expense.date.split('-')[0]) {
            // distribute by category for pi chart
            if (expense.category in categoryAmountSum) categoryAmountSum[expense.category] += (+expense.amount);
            else categoryAmountSum[expense.category] = +expense.amount;

            // distribute by date for line chart
            if (expense.date in dateAmountSum) dateAmountSum[expense.date] += (+expense.amount);
            else dateAmountSum[expense.date] = +expense.amount;
        }
    });

    const piChartData = Object.keys(categoryAmountSum).map(key => ({ category: key, amount: categoryAmountSum[key] }));
    const lineChartData = Object.keys(dateAmountSum).map(key => ({ date: key, amount: dateAmountSum[key] }));

    // render pi chart labels
    const RADIAN = Math.PI / 180;
    const renderPiChartLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central' style={{ fontSize: '10px' }}>
                {`${piChartData[index].category} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='m-3'>
            <h3 className='mb-4'>Spend Analysis</h3>
            <Form.Group className='mb-4'>
                <Row>
                    <Col>
                        <Form.Select>
                            <option value='' hidden>Month</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option value='' hidden>Year</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>
            <h6 className='text-center'>Monthly category wise analysis</h6>
            <PieChart
                width={350}
                height={350}
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                <Pie
                    data={piChartData}
                    dataKey='amount'
                    outerRadius={140}
                    label={renderPiChartLabel}
                    labelLine={false}
                >
                    {piChartData.map((category, index) => (
                        <Cell key={index} fill={CHART_COLORS[category.category]} />
                    ))}
                </Pie>
            </PieChart>
            <h6 className='mb-5 text-center'>Monthly day wise analysis</h6>
            <LineChart
                width={350}
                height={300}
                data={lineChartData}
                style={{ left: '50%', transform: 'translateX(-50%)', fontSize: '12px' }}
                margin={{ left: -20, right: 20 }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='amount' stroke='#8884d8' activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}

export default ExpenseAnalysis;
