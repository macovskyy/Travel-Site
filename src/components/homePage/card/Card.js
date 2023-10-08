import './card.css'

import clock from './img/clock.png'
import plane from './img/plane.png'
import money from './img/money.png'

const Card = () => {
    return ( 
        <div className='card'>
            <div className='container'>
                <div className='cardContent'>
                    <p className='cardName'>Tool List</p>
                    <h1 className='cardTitle'>Use our assortment of travel plan tools</h1>
                    <div className='cardList'>
                        <div className='cardItem'>
                            <img src={clock}/>
                            <h1>Plan Trip Dates</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <button className='cardBtn'>LEARN MORE</button>
                        </div>
                        <div className='cardItem'>
                            <img src={plane}/>
                            <h1>Pay For Your Flights</h1>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <button className='cardBtn'>LEARN MORE</button>
                        </div>
                        <div className='cardItem'>
                            <img src={money}/>
                            <h1>Plan Your Finances</h1>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <button className='cardBtn'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;