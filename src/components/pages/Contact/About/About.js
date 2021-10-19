import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import './About.css'
const About = () => {
  const{person}=useAuth();
  return (
    <div className="main_service_quality">
      <div className="container p-5 ">
        <div className="row">
            <h1 className="text-center service_quality">Service Quality</h1>
{ person.email?<span> </span>:
  <span className="text-center service_quality">login and see our services</span>
}          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src="https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">World Best Doctors</h5>
                <p className="card-text">
                We are given the best treatment in the world here. Doctors are very intelligent and honest. All patients recover very quickly.
                </p>
                <button type="button" className="btn btn-outline-success"> <Link to="/service">{person.email? <Link to="/services"> Let's Started</Link>:<Link to="/login">Let's Started</Link>}</Link> </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src="https://image.freepik.com/free-psd/smiley-nurse-having-stethoscope_23-2148444830.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Our Medical Team</h5>
                <p className="card-text">
                We are given all kinds of medical facilities. Everyone is very happy with our service and the patients get well very quickly.
                </p>
                <button type="button" className="btn btn-outline-success"><Link to="/service">{person.email? <Link to="/services"> Let's Started</Link>:<Link to="/login">Let's Started</Link>}</Link></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src="https://img.freepik.com/free-vector/thank-you-doctors-nurses_52683-36501.jpg?size=338&ext=jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Our Services</h5>
                <p className="card-text">
                We provide you with 24 hours service. Patients are served here with great care.
                </p>
                <button type="button" className="btn btn-outline-success">{person.email? <Link to="/services"> Let's Started</Link>:<Link to="/login">Let's Started</Link>}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
