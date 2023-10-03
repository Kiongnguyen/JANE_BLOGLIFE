import React, { useState } from 'react';
import './style.scss';

const Advertise = () => {
    const [showAdv, setShowAdv] = useState(1);
    setTimeout(() => {
        showAdv === 3 ? setShowAdv(showAdv - 2) : setShowAdv(showAdv + 1);
    }, 5000);
    return (
        <div className="Advertise">
            <div className="h4">
                <h4>Advertise</h4>
            </div>
            <div className="adv">
                <img
                    alt="adidas"
                    className={`mySlides ${
                        showAdv === 1 ? 'active' : 'hidden'
                    } `}
                    src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"
                ></img>
                <img
                    alt="nike"
                    className={`mySlides ${
                        showAdv === 2 ? 'active' : 'hidden'
                    } `}
                    src="https://cimg.co/news/94757/236517/image.jpg"
                ></img>
                <img
                    alt="puma"
                    className={`mySlides ${
                        showAdv === 3 ? 'active' : 'hidden'
                    } `}
                    src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Puma_logo.svg/1200px-Puma_logo.svg.png"
                ></img>
            </div>
        </div>
    );
};

export default Advertise;
