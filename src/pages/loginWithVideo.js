import React, { Fragment } from 'react';
import comingsoon from '../assets/images/other-images/coming-soon-bg.jpg';
import authVideo from '../assets/video/auth-bg.mp4';
import logo from '../assets/images/icon-cartel.svg';
import { Login,LOGIN,YourName,Password,RememberMe } from '../constant';
import { Link } from 'react-router-dom';

const LoginWithVideo = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page with video background start--> */}
                    <div className="auth-bg-video">
                        <video id="bgvid" poster={comingsoon} playsInline="" autoPlay={true} muted="" loop="" >
                            <source src={authVideo} type="video/mp4" />
                        </video>
                        <div className="authentication-box">
                            <div className="text-center"><img src={logo} alt="" /></div>
                            <div className="card mt-4">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h4>{LOGIN}</h4>
                                        <h6>{"Ingrese su nombre de usuario y contraseña"} </h6>
                                    </div>
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label className="col-form-label pt-0">{YourName}</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">{Password}</label>
                                            <input className="form-control" type="password" required="" />
                                        </div>
                                        <div className="checkbox p-0">
                                            <input id="checkbox1" type="checkbox" />
                                            <label htmlFor="checkbox1">{RememberMe}</label>
                                        </div>
                                        <div className="form-group form-row mt-3 mb-0 d-grid">
                                            <Link to={"/dashboard/events"} className="btn btn-primary" >{Login}</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- login page with video background end--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default LoginWithVideo;