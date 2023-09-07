import { useState } from "react";
import {Link} from "react-router-dom";
const loggedInUser = ()=>{
    //API call to check authentication
    return true;
};
const Title =()=>(
    <div>
        <a href="/"/>
        <img 
            alt="logo" 
            className="logo" 
            src={"https://yt3.googleusercontent.com/j6zhKk_4mK6gMh6f4Sgjhfjk3AGIRV8qgX-mbckWSSkKUCAT3C-u2WM1LAzPXjD_rtL4KfClJkc=s900-c-k-c0x00ffffff-no-rj"} height={300} width={300}
        />
    </div>
   
)
const Header =()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
           <Title/> 
            <div className="nav-items">
                <ul>
                    <Link to = "/">
                    <li className="link">Home</li>
                    </Link>
                    <Link to = "/about">
                        <li className="link">About</li>
                    </Link>
                    <Link to ="contact">
                        <li className="link">Contact us</li>
                    </Link>
                    <li className="link">Cart</li>
                </ul>
            </div>
            {(isLoggedIn)?<button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>: <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>}
           
            
        </div>
    )
};
export default Header;