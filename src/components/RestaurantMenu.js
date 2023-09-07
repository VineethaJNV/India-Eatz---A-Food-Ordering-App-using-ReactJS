import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
const RestaurantMenu = ()=>{
    const {resId} = useParams();
    
    const [restaurant, setRestaurant] = useState({});
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&catalog_qa=undefined&submitAction=ENTER");
        const json =  await data.json();
        console.log(json);
        setRestaurant(json.data.cards[0].card.card.info)
    }

    return (
        <div>
           <div>
           <h1>Restaurant id : {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src = {IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.locality}</h3>
            <h3>{restaurant.avgRating}stars</h3>
            <h3>{restaurant.costForTwoMessage}</h3>
            <h3>{restaurant.cuisines.join(",")}</h3>
           </div>
           <div>
            {console.log(restaurant)}
            {/*console.log(json.data.cards[2].groupedCard.cardGroupMap); */}
           </div>
        </div>
    );
};

export default RestaurantMenu;