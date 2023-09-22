import React,{useState,useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
const Wrap = styled.div`
    width:1440px;max-width:100%;margin:0 auto;padding:30px 20px;display:flex;flex-direction:column;row-gap:20px;
    & .head-wrap{
        & h1{background:linear-gradient(#ff2b2b,#c9c149);-webkit-text-fill-color:transparent;-webkit-background-clip:text;}
    }
    & .posts-wrap{
        display:flex;flex-direction:column;row-gap:20px;
        & .item-wrap{
            display:flex;flex-wrap:wrap;gap:20px;
            & .item{
                width:calc(33.33% - 14px);background:linear-gradient(#52fff4,#2d2c61);padding:30px;border-radius:10px;transition:.2s;
                & .title{font-size:24px;font-weight:500;margin:0 0 15px;}
                & .body{font-size:14px;line-height:22px;margin:0 0 15px;}
                & .tag-wrap{
                    display:flex;flex-wrap:wrap;gap:10px;
                    & .tag{font-size:13px;padding:5px 8px;;border-radius:25px;background:linear-gradient(#ff2b2b,#c9c149);}
                }
                &:hover{transform:scale(1.04);z-index:1;}
            }
        }
        & .load-more{font-size:16px;height:38px;padding:0;align-self:center;color:#FFF;border:none;background:linear-gradient(#52fff4,#2d2c61);width:150px;border-radius:5px;cursor:pointer;}
    }
`;

const postApi = "https://dummyjson.com/posts?limit=30";
const Posts = ({page}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getPosts();
    },[]);
    const getPosts = async() => {
        try{
            setLoading(true);
            const {data} = await axios.get(postApi);
            if(data.posts){
                setPosts(data.posts);
            }
        }catch(e){
            console.error("Error Getting Posts :", e);
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <Layout page={page}>
            <Wrap>
                <div className="head-wrap">
                    <h1>Posts</h1>
                </div>
                <div className="posts-wrap">
                    {loading ? (
                        <div id="loader">
                            <div className="inner"><svg viewBox="0 0 38 38" width="40" height="40" stroke="#000"><g fill="none" fillRule="evenodd"><g transform="translate(1 1)" strokeWidth="2"><circle strokeOpacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g></svg></div>
                        </div>
                    ) : (
                        <>
                            <div className="item-wrap">
                                {posts.map(({id, title, body, tags}) => (
                                    <div key={id} className="item">
                                        <div className="title">{title}</div>
                                        <div className="body">{body}</div>
                                        <div className="tag-wrap">
                                            {tags.map((tag, index) => (
                                                <div key={index} className="tag">{tag}</div>
                                            ))}    
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button type="button" className="load-more">Load More</button>
                        </>
                    )}
                </div>
            </Wrap>
        </Layout>
    );
}
export default Posts;