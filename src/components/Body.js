import {restaurentList} from "../config"
import  RestaurantCard from "./restaurantCard"
import {useState, useEffect} from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnLine from "../utils/useOnline";

function filterData(searchInput, restaurants){
    const filterData = restaurants.filter((restaurant) =>restaurant?.info?.name?.toLowerCase()?.includes  (searchInput.toLowerCase()));
    return filterData;
}
const Body =()=>{
    // const [restaurants, setRestaurants] = useState(restaurentList);//hardcoded data
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState();

    useEffect(()=>{
        getRestaurants();
    }, [])

    // const isOnLine = useOnLine();

    // if(!isOnLine){
    //     return <h1>Offline, please check your interet connection!!</h1>
    // }

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING%22");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(!allRestaurants) return null //early return
    
    
    return allRestaurants?.length === 0 ? <Shimmer/> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" vlaue = {searchInput} onChange={(e) =>{
                    setSearchInput(e.target.value)
                }}/>
                <button className="search-btn"
                onClick={()=>{
                    //need to filter the data
                    const data = filterData(searchInput, allRestaurants);
                    
                    setFilteredRestaurants(data);
                   
                }}>Search</button>
            </div>
            <div className="restaurent-list">
                {/* {(filteredRestaurants.length === 0)? <h1>No match found!! : null </h1>} */}
                {filteredRestaurants.map((restaurent) =>{
                        return(<Link to = {"/restaurant/"+restaurent.info.id} key = {restaurent.info.id}>
                             <RestaurantCard{...restaurent.info}/>;
                        </Link>);
                }
                )}

            </div>
        </>
    );
};

export default Body