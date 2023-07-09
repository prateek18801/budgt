import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

type props = {
    lineChartData: { date: string, amount: number }[]
};

const CustomLineChart: React.FC<props> = ({ lineChartData }) => {
    return (
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
            <Line type='monotone' dataKey='amount' stroke='#8884d8' activeDot={{ r: 6 }} />
        </LineChart>
    );
}

export default CustomLineChart; 
