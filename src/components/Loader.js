import portal from "../img/portal.png";

const Loader = () => {

    return (
        <div className='loader'>
            <div className='loader-img'>
                <img src={portal} alt="loading..."/>
            </div>
        </div>
    );
};

export default Loader;