

const Header = ({dimension,name,residents,type}) => {

    return (
        <>
            <div className='info'>
                <div className='title'>
                    <h2>{name}</h2>
                </div>
                <div className='content'>
                    <p>Type: {type}</p>
                    <p>Dimension: {dimension}</p>
                    <p>Poblation: {residents}</p>
                </div>
            </div>
        </>
    );
};

export default Header;