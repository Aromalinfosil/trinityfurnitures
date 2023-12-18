import React, { useState } from 'react';
import axios from 'axios';

function Asofas() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const [registerStatus, setRegisterStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData);
      setRegisterStatus(response.data.message);
    } catch (error) {
      console.error('Error during registration:', error);
      setRegisterStatus('Failed to register. Please try again.');
    }
  };


    
  return (
   <>
  <section className="" style={{ backgroundColor: '#eee' }}>
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="fname"
                              className="form-control"
                              value={formData.fname}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="fname">
                              First Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lname"
                              className="form-control"
                              value={formData.lname}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="lname">
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              value={formData.password}
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="">
                          <center>
                            <input className="custom-btn btn-1" type="submit" onClick={register} />
                          </center>
                          <div style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>
                            {registerStatus}
                          </div>
                        </div>
                      </form>
                    </div>
              
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>
   
   
   
   
   </>
  )
}

export default Asofas