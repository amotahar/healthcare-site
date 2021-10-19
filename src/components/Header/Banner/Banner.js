import React from 'react';
import "./Banner.css"




const Banner = () => {
    return (
        <div className="main_banner">
            <div className="main_title">
                <div className="title ">
                   <h2>
                   Department of Health Services

                   </h2>
                   <p>The overall purpose of the Department of Health Services (DoHS) is to deliver preventive, promotive and curative health services throughout nepal. The DoHS is one of three departments under Ministry of Health & Population(</p>
                    <div className="btns">
                <button type="button" className="btn btn-outline-danger m-3">Get Started</button>
                <button type="button" className="btn btn-outline-success m-3">Read More</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;