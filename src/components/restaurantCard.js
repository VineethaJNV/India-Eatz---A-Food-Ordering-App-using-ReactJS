import {IMG_CDN_URL} from "../config"

export const RestaurantCard =({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating
})=>{
    return (
        <div className="card">
            {/* link = "res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kx2ghnwagcnąjtmd5jbc"+restaurentList[0].info?.cloudinaryImageId
           <img src={link} alt="React Image" /> */}
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="React Image" />
            <h2>{name}</h2>
            <h3 className="cuisines">{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}
export default RestaurantCard
