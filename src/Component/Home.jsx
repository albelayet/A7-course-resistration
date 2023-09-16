/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "./Cart";


const Home = () => {

    const [card, setCard] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [total, setTotal] = useState(0);
    const [credit, setCredit] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);

    const handleCardBtn = (btnItem)=>{
        const alreadyExist = selectedCard.find((existItem)=>existItem.id === btnItem.id);
        let count =btnItem.price
        let creditCount = btnItem.credit

        if(alreadyExist){
            return alert('Already Booked Please Select Another');
        }
        else{

            selectedCard.forEach((item)=>{
                count+=item.price;
                creditCount += item.credit

            })
            if(creditCount>20){
                return alert("Already cross the limit!!")
            }
            const remainingCredit = 20-creditCount;
            setRemaining(remainingCredit);
            setTotal(count);
            setCredit(creditCount);


            setSelectedCard([...selectedCard, btnItem]);
        }

    }

    return (
        <div className='flex justify-around mt-10'>
            <div className="grid grid-cols-3 gap-5">
                {
                    card.map((item) => (
                        <div key={item.id} className="card">
                            <div className="card w-96 bg-gray-200 shadow-xl">
                                <figure className="px-5 pt-5">
                                    <img src={item.cover_image} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title"> {item.title} </h2>
                                    <p>{item.description}</p>
                                    <div className="flex gap-20">
                                        <p>Price: {item.price}</p>
                                        <p>Credit: {item.credit}</p>
                                    </div>
                                    <div className="card-actions">
                                        <button onClick={()=> handleCardBtn(item)} className="btn btn-primary px-20 mt-5">Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex card w-80 bg-gray-200 shadow-xl text-center h-3/4 py-10">
                <Cart selectedCard={selectedCard} remaining={remaining} total={total} credit = {credit}></Cart>
            </div>
        </div>
    );
};

export default Home;