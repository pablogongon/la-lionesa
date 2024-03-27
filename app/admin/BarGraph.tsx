'use client'

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarGraphProps{
    data: GraphData[]
}

type GraphData ={
    day: string;
    date: string;
    totalAmount: number;
}

const BarGraph:React.FC<BarGraphProps> = ({data}) => {
    const labels = data.map(item => item.day)
    const amounts = data.map(item => item.totalAmount)

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Importe de Venta',
                data: amounts,
                backgroundColor:'rgba(179, 111, 9, 0.6)',
                borderColor: 'rgba(179, 111, 9, 1)',
                borderWidth: 1
            }
        ]
    }

    const options = {
        scales: {
            y:{
                beginAtZero: true
            }
        }
    }

    return ( <Bar data={chartData} options={options}></Bar> );
}
 
export default BarGraph;