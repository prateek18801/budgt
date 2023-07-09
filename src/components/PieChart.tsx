import { PieChart, Pie, Cell } from 'recharts';

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

type props = {
    pieChartData: { category: string, amount: number }[]
}

const CustomPieChart: React.FC<props> = ({ pieChartData }) => {

    const RADIAN = Math.PI / 180;
    const renderPieChartLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central' style={{ fontSize: '10px' }}>
                {`${pieChartData[index].category} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart
            width={350}
            height={350}
            style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
            <Pie
                data={pieChartData}
                dataKey='amount'
                outerRadius={140}
                label={renderPieChartLabel}
                labelLine={false}
            >
                {pieChartData.map((record, index) => (
                    <Cell key={index} fill={CHART_COLORS[record.category]} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default CustomPieChart;
