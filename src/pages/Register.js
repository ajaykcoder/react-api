import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
const Wrap = styled.div`

`;

const Login = ({page}) => {
    return (
        <Layout page={page}>
            <Wrap>
                <h1>Register</h1>
            </Wrap>
        </Layout>
    );
}
export default Login;