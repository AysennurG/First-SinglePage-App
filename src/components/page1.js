import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ()=>{

    return(
        <div className="Home" >
            <h1>hello from page1 press the button please</h1>
        <Link to = "/greeting">
        <button>change the page</button>
        </Link>
        </div>
    )
}
export default Home;