import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
const Wrap = styled.div`
    width:1400px;max-width:100%;margin:0 auto;padding:30px 20px;display:flex;align-items:center;justify-content:space-between;
    & h1{background:linear-gradient(#ff2b2b, #c9c149);-webkit-text-fill-color:transparent;-webkit-background-clip:text;margin:0;}
`;

const Home = ({page}) => {
    return (
        <Layout page={page}>
            <Wrap>
                <h1>Home Page</h1>
            </Wrap>
        </Layout>
    );
}
export default Home;