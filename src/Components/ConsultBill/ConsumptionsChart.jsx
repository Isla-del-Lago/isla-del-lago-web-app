import React from 'react';
import { Chart } from 'react-chartjs-2';
import arrowIcon from '../../Assets/back_arrow.svg'

import {
    Chart as ChartJS,
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement,
    LineController,
    BarElement,
    BarController,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement,
    LineController,
    BarElement,
    BarController
);

export default function ConsumptionsChart(props) {
    const { values, labels } = props
    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                lineTension: 0.3,
                label: 'Linea',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                borderWidth: 1.5,
                data: values.map((data) => data),
            },
            {
                type: 'bar',
                label: 'Barra',

                backgroundColor: 'rgb(255,255,255,0.2)',
                data: values.map((data) => data),
                borderColor: 'rgb(255,255,255,0.2)',
                borderWidth: 2,
            }
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            xAxis: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#fff',
                    font: {
                        size: 10,
                        family: 'Roboto',
                        // weight: 'bold'
                    }
                },
            },
            yAxis: {
                grid: {
                    color: 'rgb(255,255,255,0.2)'
                },
                ticks: {
                    display: false
                }
            }
        }
    }
    return (
        <div className="chart-container">
            <img src={arrowIcon} alt={arrowIcon} onClick={props.onGoBack}/>
            <p className='chart-subtitle'>Total a pagar</p>
            <h1 className='chart-title' >$120.000,53</h1>
            <p className='chart-date' >25/11/2022</p>
            <Chart type='bar' options={options} data={data} />
        </div>
    )
}