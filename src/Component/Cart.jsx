import React from 'react';

const Cart = ({ selectedCard, remaining, total, credit}) => {
    
    return (
        <div>
            <h6 className="text-xl font-semibold pb-8 text-blue-500">Credit Hour Remaining {remaining} hr</h6>

            <h6 className="font-bold text-left pl-8 mb-5 text-2xl">Course Name</h6>
            {
                selectedCard.map((cartItem) => (
                    <li key={cartItem.id} className="py-2 text-left px-8">{cartItem.title}</li>
                ))
            }
            <p className="py-6 font-semibold">Total Credit Hour: {credit}</p>
            <p className="font-semibold">Total Price: {total} USD </p>
        </div>
    );
};

export default Cart;