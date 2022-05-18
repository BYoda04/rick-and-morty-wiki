
const Title = ({dimension,residents}) => {

    return (
        <div>
            <div className="title">
                <h2>{dimension?.name}</h2>
            </div>
            <div className="info-container">
                <p>Type: {dimension?.type}</p>
                <p>Dimension: {dimension?.dimension}</p>
                <p>Poblation: {residents?.length}</p>
            </div>
        </div>
    );
};

export default Title;