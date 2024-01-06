import React, { useContext, useRef, useState,useEffect } from 'react';

import Axios from 'axios';

function Asofas() {
  const [emailExists, setEmailExists] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [post, setPost] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

     


  const submit = () =>{
    Axios.post("/register").then((res)=>{
      console.log()
    })
    .catch((err)=>{
      console.log(err)
    })
  }







const register = (e) => {
    e.preventDefault();

if (!fname || !lname || !email || !password) {
        setRegisterStatus('Please fill out all fields.');
        return;
        }

    Axios.get(`http://localhost:3001/check-email?email=${email}`).then((response) => {
        if (response.data.exists) {
            setEmailExists(true);

        } else {

            Axios.post("http://localhost:3001/register", {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      address:address,
      phone:phone,
      post:post,   

      }).then((response) => {
      if (response.data.message) {
      setRegisterStatus(response.data.message);
                } else {
                    setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
                    window.location.href = "/";
                }
                })
                }
                })
                }
    
  return (
  <>
  
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <section class="" style={{backgroundColor:"#eee"}}>
  <div class="container ">
    <div class="row d-flex justify-content-center align-items-center h-100">
    <form action="" method="post">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                  
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">first name</label> &nbsp;
                    <input className="" type="text" name="fname" onChange={(e) =>{setFname(e.target.value)}} placeholder="Enter your First name" required /><br></br>
                 
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                 
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c"> Last name</label> &nbsp;
                    <input className="" type="text" name="lname" onChange={(e) =>{setLname(e.target.value)}} placeholder="Enter your Last name" required /><br></br>
                  
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="form3Example3c">Address</label> &nbsp;
                  <input className="" type="text" name="address" onChange={(e) =>{setAddress(e.target.value)}} placeholder="Enter your Address" required /><br></br>
                
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="form3Example3c">Email</label> &nbsp;
                  <input
  className=""
  type="text"
  name="email"
  onChange={(e) => { setEmail(e.target.value) }}
  placeholder="Enter your Email"
  autoComplete="username" // Add this line
  required
/>
                 
                  </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="form3Example3c"> Phone</label> &nbsp;
                  <input className="" type="number" name="phone" onChange={(e) =>{setPhone(e.target.value)}} placeholder="Enter your Number" required /><br></br>
             
                  </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="form3Example3c"> Postcode</label> &nbsp;
                  <input className="" type="number" name="post" onChange={(e) =>{setPost(e.target.value)}} placeholder="Enter your Postcode" required /><br></br>
             
                  </div>
                  </div>


                  <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c"> Password</label> &nbsp;
                    <input
  className=""
  type="password"
  name="password"
  onChange={(e) => { setPassword(e.target.value) }}
  placeholder="Enter your password"
  autoComplete="current-password" // Add this line
  required
/>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    {/* <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">  Confirm Password</label> &nbsp;
                 <input className='' type="password" name= "password" onChange={(e) => {setPassword (e.target.value)}} placeholder='confirm password' required /> <br></br>
                   
                    </div> */}
                  </div>
{/* 
                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                <div className="input_box gp">  
                <center><input  class="small-btn submit mb-4" type="submit" value="submit" onClick={register}  /></center>
                 </div>
                       <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>     

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
      </form>
    </div>

  </div>
</section>
  
  
  
  
  
  
  
  </>
  )
}

export default Asofas