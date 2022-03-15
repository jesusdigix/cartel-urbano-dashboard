import React ,{useEffect , Fragment} from 'react';
import Breadcrumb from '../../common/breadcrumb';
import { DollarSign, Tag, ShoppingBag, MessageCircle, MinusCircle, ThumbsUp, MessageSquare, Briefcase, MoreHorizontal, Send, Activity, Anchor, Compass, Cpu, Slack, Umbrella, Box, Book } from 'react-feather';
import { calcultionOptions, calcultionData } from '../../../data/default'
import ChartistGraph from 'react-chartist';
import EventCharts from './eventCharts';
import configDB from '../../../data/customizer/config';
import {New,NewSale,NewMessage,NewVisits,TotalProfit,AllCustomIncome,All,TotalInvestment,TotalReview,CustomerReview,Change,Online,MarshiKisteen,Dashboard,Ui,Xi,Message,Portfolio,NewUser,Month,Today,NickStone,Follow,WiltorNoice,NewReport,TotalFeedback,MilanoEsco,AnnaStrong,RecentNotification,Order,Download, Trash,ByKan,ByKaint,ByTailer,ByWaiter,ByComman,Calculation,TotalIncome,TotalLoss,Conversations,View,Media,Search,SellingUpdate,Shipping,Purchase,TotalSell,Feedback,ByCall,Activitys} from '../../../constant'

var Knob = require('knob')// browserify require
var primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;

const Default = () => {

    useEffect(() => {
        var profit = Knob({
            value: 35,
            left: 1,
            angleOffset: 90,
            className: "review",
            thickness: 0.2,
            width: 270,
            height: 270,
            fgColor: primary,
            readOnly: false,
            dynamicDraw: false,
            tickColorizeValues: true,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious:true
        })
        //document.getElementById('profit').appendChild(profit);
    },[]);
    return (
        <Fragment>
            <Breadcrumb   parent = "Dashboard" title = "Default" />
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 xl-100">
                            <div className="row">
                                <EventCharts />
                            </div>
                        </div>
                        <div className="col-xl-4 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{Activitys}</h5>
                                </div>
                                <div className="card-body activity-scroll">
                                    <div className="activity">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 gradient-round m-r-30 gradient-line-1">
                                                <ShoppingBag />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 gradient-round m-r-30 gradient-line-1">
                                                <MessageCircle />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 gradient-round m-r-30 small-line">
                                                <MinusCircle />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p className="activity-xl">{"Lorem Ipsum is simply dummy text."}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 gradient-round m-r-30 gradient-line-1">
                                                <ShoppingBag />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 gradient-round m-r-30 medium-line">
                                                <Tag />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    

                        
                    </div>
                </div>

        </Fragment>
    );
};

export default Default;