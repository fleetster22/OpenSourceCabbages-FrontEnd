import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { url, Title, Image } from "../../Global";
import styled from "styled-components";
import "./Product.css";

export default function Product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/product`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const Container = styled.div`
    padding: 20px;
    margin: 20px;
  `;

  const EachProduct = styled.div`
    background-color: #94d1ab;
    box-shadow: 0 14px 26px -10px rgba(51, 51, 51, 0.4),
      0 4px 23px 0px rgba(0, 0, 0, 0.12), 2px 8px 10px 1px rgba(51, 51, 51, 0.4);
    padding: 5px;
    margin: 20px;
  `;

  const Description = styled.section`
    display: inline-block;
    justify-content: flex-start;
    width: 700px;
    margin-left: 80px;
    margin-top: 40px;
  `;

  const Price = styled.section`
    display: inline-block;
    width: 200px;
    text-align: center;
    margin-top: 50px;
    margin-left: 50px;
  `;

  const Stock = styled.section`
    float: right;
    padding: 10px;
    color: #aa2a31;
  `;

  const ProductName = styled.p`
    padding: 5px;
    display: block;
  `;

  return (
    <>
      <Title>Products Page</Title>
      <Container>
        {products.map((product) => (
          <EachProduct key={product.productId}>
            <Image src={product.imageUrl} />
            <Description>{product.description}</Description>
            <Price>Price: {"$" + product.price}</Price>
            <Stock>{product.inventory} in Stock </Stock>
            <Link to="/cart" className="link">
              Add to cart
            </Link>
            <ProductName>{product.productName}</ProductName>
          </EachProduct>
        ))}
      </Container>
    </>
  );
}
