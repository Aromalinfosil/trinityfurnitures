import React, { useContext, useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';




const Footer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [post, SetPost] = useState("")
    const [registerStatus, setRegisterStatus] = useState("");
    const Uid = sessionStorage.getItem('useid');
	const [loginStatus, setLoginStatus] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState('');



    const register = (e) => {
        e.preventDefault();
        Axios.post("http://65.1.134.51:3001/newsletter", {
          name: name,
          email: email,
          post: post
        }).then((response) => {
          console.log(response.data);
      
          if (response.data.message) {
            setRegisterStatus(response.data.message);
          } else {
            setRegisterStatus("subscribed successfully");
            // Assuming the server returns the username in response.data.username
            const username = response.data.username;
            // Display a welcome message with the username
            setRegisterStatus(`Welcome, ${username}! Subscribed successfully.`);
            // Redirect or perform other actions if needed
            window.location.href = "/";
          }
        });
      };
      

             useEffect(() => {
                const storedLoggedInState = localStorage.getItem('isLoggedIn');
                 if (storedLoggedInState === 'true') {
                   setIsLoggedIn(true);
                   const storedUsername = sessionStorage.getItem('username');
                   setUsername(storedUsername); // Set the username
                 }
                 }, []);
   


    return (
        <>
        <br></br>
      <div class="container-fluid bgfooter  py-5 px-sm-3 px-lg-5" >
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand">
                  <h2 class="ftext"></h2>
                </a>
                <p><font color="#fff"></font></p><br></br>
                <h6 class="text-white text-uppercase mt-4 mb-3" >Follow Us</h6>
                <div class="d-flex justify-content-start">
                   <h4><a class="text-white"><i class="fab fa-twitter"></i></a></h4>  &nbsp;  &nbsp;
                   <h4><a class="text-white"><i class="fab fa-facebook-f"></i></a></h4> &nbsp;   &nbsp;
                   <h4><a class="text-white" href="#"><i class="fab fa-linkedin-in"></i></a></h4> &nbsp;  &nbsp;
                   <h4><a class="text-white" href="#"><i class="fab fa-instagram"></i></a></h4> &nbsp;  &nbsp;<br></br><br></br>
                  
                </div>


                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Subscribe
</button>




                 

                 <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-xl">
    
    <div class="">
      <div class="">
       
        
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-content">
      <div class="">
      <div class="login">
         <div class="container">
         <img src="../ass/images/logo12.png" className="subimg" alt="" /><br></br>
         <img src="../ass/images/logotit.png" class="subimg1" alt="" />
   <h5> SUBSCRIBE TO THE TRINITY</h5><br></br>
   <h7>And experience the scandinavian passion</h7><br></br><br></br>
   <input type="text" placeholder="Name" onChange={(e) =>{setName(e.target.value)}}/> 
   <input type="text" placeholder="Email" onChange={(e) =>{setEmail(e.target.value)}}/> 
   <input type="text" placeholder="Postcode" onChange={(e) =>{SetPost(e.target.value)}}/> 
              
             
              <button type="submit"  class="custom-btn btn-1" value="submit"  onClick={register} >Subscribe</button>

              <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
              
          
           
            
         </div>
      </div>
      <div class="register">
        
      </div>  
    </div>
      </div>
     
    </div>
  </div>
</div>










            </div>
            <div class="col-lg-3 col-md-6 mb-5">
            <h5 class="text-white text-uppercase mb-4" >Our Services</h5>
            <div class="d-flex flex-column justify-content-start">
            <a class="text-white mb-2" href="/About"><i class="fa fa-angle-right mr-2"></i>About</a>
            <a class="text-white mb-2" href="/Service"><i class="fa fa-angle-right mr-2"></i>Service</a>     
            <a class="text-white mb-2" href="/all-products"><i class="fa fa-angle-right mr-2"></i>Products</a>
            <a class="text-white mb-2" href="/Contact"><i class="fa fa-angle-right mr-2"></i>Contact US</a>
                  
                    
            </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
            <h5 class="text-white text-uppercase mb-4">Support</h5>
            <div class="d-flex flex-column justify-content-start">
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Privacy Policy</a>        
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Contact US</a>
                   
                  
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4" >Contact Us</h5>
                <p><font color="#fff"><i class="fa fa-map-marker-alt mr-2"></i>ABN 47620213283
Address : 50, Manderston Ave, Derrimut, VIC, 3026</font></p>
                <p><font color="#fff"><i class="fa fa-phone-alt mr-2"></i>########</font></p>
                <p><font color="#fff"><i class="fa fa-envelope mr-2"></i>sales@trinityfurnitures.com.au</font></p>
               
                <div class="w-100">
                   
                </div>
            </div>
        </div>
  
       <div class="" >
        <div class="row">
        <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white-50">Copyright &copy; 2023 <a href="#">Trinity Furnitures </a>
                </p>
            </div>
            <div class="col-lg-6 text-center text-md-right">
                <p class="m-0 text-white-50">Designed by <a href="https://www.infosiltechnolabs.com/"> Infosil Technolabs Pvt Ltd</a>
                </p>
            </div>
        </div>
    </div>  </div>
            </>
    );
};

export default Footer;