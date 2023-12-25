import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./ShimmerUI";
let json;
const RestaurantMenu = ()=>{
    const {resId} = useParams();
    
    const [restaurant, setRestaurant] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        json =  await data.json();
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.item?.card?.info?.itemBadge?.name);
        // setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        // Check if the necessary properties exist before setting the state
        if (json?.data?.cards?.length > 0 && json.data.cards[0]?.card?.card?.info) {
            setRestaurant(json.data.cards[0].card.card.info);
        } else {
            console.error('Required data structure not found in the response.');
        }
    }

    if(!restaurant){
        return <Shimmer/>;
    }
    return (
        <div className="menu">
           <div>
           <h1>Restaurant id : {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src = {IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.locality}</h3>
            <h3>{restaurant.avgRating}stars</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
            {/* <h3>{restaurant.cuisines.join(",")}</h3> */}
           </div>
           <div>
            <h1>Menu</h1>
            <ul>
                {json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards &&Object.values(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item)=>(
                    <li key = {item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))};
            </ul>
           </div>
        </div>
    );
};

export default RestaurantMenu;