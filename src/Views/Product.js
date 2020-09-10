import React, {useEffect, useState} from "react"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from "../components/Loader";
import {useAxiosGet} from "../Hooks/HttpRequest";


function Product() {
    const {id} = useParams()
    const url = `https://5f5a2e5b28ad7a00160558e9.mockapi.io/api/v1/products/${id}`

    let product = useAxiosGet(url)

    let content = null


    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.error){
        content =
            <div>
                <h1 className="text-3xl font-bold mb-3 text-center">Product not Found!</h1>
            </div>
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product

