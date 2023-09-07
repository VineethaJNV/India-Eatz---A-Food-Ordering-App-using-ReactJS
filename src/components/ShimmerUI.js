const Shimmer = () =>{
    return (
        <div className="restaurent-list">
            {/*In JSX, the HTML-like elements need to be returned explicitly from the arrow function*/}
            {Array(20).fill("").map((e, index) =>{
               return <div key={index} className="shimmer-card"></div>
            })}  
        </div>
    );
};
export default Shimmer;