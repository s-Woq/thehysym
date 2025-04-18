import model from "./../../../thehysym/img/model.png"
function Landing() {
    return(
        <div className="flex ">
        <div className="l-side text-5xl">
            <div><img src={model} alt="clothes model" /></div>
            <p>Siguientes</p>
            <p>lanzamientos</p>
            <p>101</p>

        </div>
        <div className="r-side">
        <p>Elen</p>
        <p>New</p>
        <p>Store</p>
        </div>
        </div>

    );
}
export default Landing;