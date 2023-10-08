import './hotels.css'

import hotel1 from './img/hotel1.png'
import hotel2 from './img/hotel2.png'
import hotel3 from './img/hotel3.png'
import hotel4 from './img/hotel4.png'

const Hotels = () => {
    return ( 
        <div className='hotels'>
            <div className='container'>
                <div className='hotelsContent'>
                    <div className='hotelsTitle'>
                        <p>Find deals on hotels, homes and much more...</p>
                    </div>
                    <p className='hotelCardTitle'>4 Hotels Found</p>
                    <div className='hotelsCard'>
                        <div className='hotelsCardItem'>
                            <img src={hotel1} />
                            <div className='hotelsCardItemText'>
                                <h1>Estate de la Newcastle</h1>
                                <p>Newcastle City Centre, Newcastle upon Tyne
                                    <br/>
                                    <span>0.1km from centre</span>
                                    <br/>
                                    Situated in Newcastle City Centre, Maldron Hotel features free WiFi and a private court yard.</p>
                            </div>
                        </div>
                        <div className='hotelsCardItem'>
                            <img src={hotel2} />
                            <div className='hotelsCardItemText'>
                                <h1>Maldron Hotel Newcastle</h1>
                                <p>Newcastle City Centre, Newcastle upon Tyne
                                    <br />
                                    <span>0.3km from centre</span>
                                    <br />
                                    Situated in Newcastle City Centre, Maldron Hotel features free WiFi and a private court yard.</p>
                            </div>
                        </div>
                        <div className='hotelsCardItem'>
                            <img src={hotel3} />
                            <div className='hotelsCardItemText'>
                                <h1>Newcastle Premier Hotel</h1>
                                <p>Newcastle City Centre, Newcastle upon Tyne
                                    <br />
                                    <span>1.5km from centre</span>
                                    <br />
                                    Situated in Newcastle City Centre, Maldron Hotel feature a private court yard.</p>
                            </div>
                        </div>
                        <div className='hotelsCardItem'>
                            <img src={hotel4} />
                            <div className='hotelsCardItemText'>
                                <h1>AirBnB Residence Newcastle</h1>
                                <p>City Centre, Newcastle upon Tyne
                                    <br />
                                    <span>2.2km from centre</span>
                                    <br />
                                    Situated in Newcastle City Centre, Maldron Hotel feature free WiFi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hotels;