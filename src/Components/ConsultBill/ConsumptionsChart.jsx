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
import { useEffect } from 'react';
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
    const { fullLabels, fullValues, endDateOfBillSelected, billDetails } = props
    const labels = fullLabels.slice(fullLabels.length - 4, fullLabels.length)
    const values = fullValues.slice(fullValues.length - 4, fullValues.length)
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
            <img src={arrowIcon} alt={arrowIcon} onClick={props.onGoBack} />
            <p className='chart-subtitle'>Total a pagar</p>
            <h1 className='chart-title' >${parseFloat(billDetails.total).toFixed(2)}</h1>
            <p className='chart-date' >{endDateOfBillSelected}</p>
            <Chart type='bar' options={options} data={data} />
        </div>
    )
}