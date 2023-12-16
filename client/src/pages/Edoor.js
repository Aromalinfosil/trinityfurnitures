import React, { useContext, useEffect, useState } from 'react';

import {  useParams } from 'react-router-dom';

import cartContext from '../contexts/cart/cartContext';
import useActive from '../hooks/useActive';
import Header from '../components/common/Header';
import RelatedSlider from '../components/sliders/RelatedSlider';
import RelatedProduct from '../components/sliders/RelatedProduct';
import axios from 'axios';
import useDocTitle from '../hooks/useDocTitle';

const Edoor = () => {

    useDocTitle('Product Details');

    const { handleActive, activeClass } = useActive(0);

    const { addItem } = useContext(cartContext);

    const { id } = useParams();
    const [product, setProduct] = useState([null]);
    
    const {  ratings, rateCount } = product;



   
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [name, setName] = useState([]);
    const [category, setCategory] = useState([]);
    const[model_no,setModel_no] =useState([]);


   
    useEffect(() => {
        getProduct();
      }, []);
    
      function getProduct() {
        axios.get(`http://65.1.134.51:3001/product/${id}`)
          .then((response) => {
            console.log(response.data);
            setProduct(response.data);
            setName(response.data.name);
            setCategory(response.data.category);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setImage(response.data.image);
            setModel_no(response.data.model_no)
          })
          .catch((error) => {
            console.error('Error fetching product:', error);
            console.log("Product not found");
          });
      }


    return (
        
        <main> <Header /><br/><br/><br/><br></br><br></br>
     
			


     <br></br>
     <div class="image-container">
  <img src="../ass/images/door90.png" alt="Your Image" class="responsive-image"/>
</div>

<br></br>



<section id="featured" className="">
<div class="a21"><center>New Arrivals...
</center></div><br></br>

<RelatedSlider category="Door" />
<div class="a21"><center>Doors<hr/>
</center></div><br></br><br></br>
<RelatedProduct category="Door" />               
            </section>
        </main>
    );
};

export default Edoor;