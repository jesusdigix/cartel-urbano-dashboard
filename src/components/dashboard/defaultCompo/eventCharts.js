import React, {  Fragment } from 'react';
import { DollarSign, Tag, ShoppingBag, Sun} from 'react-feather';
import CountUp from 'react-countup';
import ChartistGraph from 'react-chartist';
import { chart1, chartsmall } from '../../../data/default';
import configDB from '../../../data/customizer/config';
import {TotalVisits,TotalSale,TotalValue,TotalTax,TotalEarning,ProductionValuation} from '../../../constant'
const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

const EventCharts = () => {
        return (
            <Fragment>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-widget-dashboard">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h2 className="mt-0 mb-0 f-w-600">
                                            <span >
                                                <CountUp className="counter" end={5} />
                                            </span>
                                        </h2>
                                        <p>{"Total de eventos"}</p>
                                    </div>
                                    <Tag />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-widget-dashboard">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h2 className="mt-0 mb-0 f-w-600">
                                            <span>
                                                <CountUp className="counter" end={10} />
                                            </span>
                                        </h2>
                                        <p>{"Total de productos"}</p>
                                    </div>
                                    <ShoppingBag />
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-widget-dashboard">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h2 className="mt-0 mb-0 f-w-600">
                                            <DollarSign />
                                            <span>
                                                <CountUp className="counter" end={50} />
                                            </span>
                                        </h2>
                                        <p>{"Total de ventas"}</p>
                                    </div>
                                    <Sun />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>{ProductionValuation}</h5>
                        </div>
                        <div className="card-body">
                            <div className="show-value-top d-flex">
                                <div className="value-left d-inline-block">
                                    <div className="square bg-primary d-inline-block"></div><span>{TotalEarning}</span>
                                </div>
                                <div className="value-right d-inline-block">
                                    <div className="square d-inline-block bg-secondary"></div><span>{TotalTax}</span>
                                </div>
                            </div>
                            <div className="smooth-chart flot-chart-container">
                                <ChartistGraph key="1" className="ct-chart-line" data={{
                                    labels: ['2018', '2019', '2020', '2021'],
                                    series: [ [0, 6, 2, 6],
                                    [0, 7, 1, 8]]
                                }} type={'Line'} listener={{
                                    "draw": function (data) {
                                        if (data.type === 'line' || data.type === 'area') {
                                            data.element.animate({
                                                d: {
                                                    begin: 2000 * data.index,
                                                    dur: 2000,
                                                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                                    to: data.path.clone().stringify(),
                                                }
                                            });
                                        }
                                    }
                                }} options={chart1} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

export default EventCharts;