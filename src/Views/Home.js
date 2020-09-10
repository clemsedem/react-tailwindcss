import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import {useAxiosGet} from "../Hooks/HttpRequest";

function Home() {
    const url = `https://5f5a2e5b28ad7a00160558e9.mockapi.io/api/v1/products?page=2&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.error) {
        content =
            <div>
                <h1 className="text-3xl font-bold mb-3 text-center">Product not Found!</h1>
            </div>
    }



    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
    }


    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home;