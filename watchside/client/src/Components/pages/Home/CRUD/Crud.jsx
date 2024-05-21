import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../../../../React-Redux/WatchSlice';
import '../../../../Scss/Crud.scss';

const WatchList = () => {
    const dispatch = useDispatch();
    const { watches, loading, error } = useSelector((state) => state.watches);

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);

    let content;

    if (loading) {
        content = <div>Loading...</div>;
    } else if (error) {
        content = <div>{error}</div>;
    } else {
        content = (
            <ul>
                {watches.map((watch) => (
                    <div className='card' key={watch._id}>
                       <div className='watchimg'>
                           <img src={watch.img} alt={watch.watchname} />
                       </div>
                       <button className='Addcard'>Add To Card</button>
                       <div className="watchname">{watch.watchname}</div>
                       <div className='watchprice'>${watch.price}</div>
                    </div>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h2>Watch List</h2>
            {content}
        </div>
    );
};

export default WatchList;
