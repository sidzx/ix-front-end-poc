import React from 'react'
import Navi from './Navi'
import { useState, useEffect } from 'react'
import { fetchproducts } from '../services/apicalls'
import { Await } from 'react-router-dom'
import { getSignedUrl } from '@aws-sdk/cloudfront-signer'


function Viewproduct() {


    const [product, setProduct] = useState()

    const fetch = async () => {
        const result = await fetchproducts()
        console.log(result)
        console.log(result.data.body.data)
        setProduct(result.data.body.data)

    }
    console.log(product)

    const extractName = (url) => {
        return url.substring(url.lastIndexOf("/") + 1)
    }


    

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Navi />
            <div style={{
                backgroundColor: "#d0f0c0",
                height:"10"
            }} className='row d-flex justify-content-evenly '>

                {product?.map((item) => {
                       const imageName = extractName(item.image_url);

                        console.log(imageName)
                    return (

                        <div className="product-card  col mt-2 my-lg-5 mx-2 col-lg-2">

                            <img
                                src={`https://d3cceuazvytzw7.cloudfront.net/uploads/${imageName}`}
                                alt=""
                                className="product-image" />
                            <h3
                                style={{
                                    color: "black"
                                }}
                                className="product-name mt-5">{item.name}</h3>
                            <p className="product-price">{item.description}</p>
                            <p className="product-price">${item.price}</p>
                            <button
                                onClick={() => navcart(item)}
                                className="add-to-cart-btn mx-2">Add to Cart</button>
                            {/* <Button><i class="fa-solid fa-heart-circle-plus"></i></Button> */}
                            <button
                                onClick={
                                    () => wish(item)}
                                className=""
                                style={{
                                    color: "white",
                                    backgroundColor: "#C8BDE5",
                                    border: " none",
                                    padding: " 8px 16px",
                                    borderRadius: "4px"
                                }}

                            > Buy Now</button>
                        </div>)
                })}


            </div>


        </>




    )
}

export default Viewproduct