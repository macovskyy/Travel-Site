import './infoSection.css';

import GlobeHemisphereEast from './img/GlobeHemisphereEast.png';
import Bicycle from './img/Bicycle.png';
import AirplaneTilt from './img/AirplaneTilt.png';

const InfoSection = () => {
    return (
        <div className="infoSection">
            <div className="container">
                <div className="infoSectionContent">
                    <div className='infoSectionCard'>
                        <img src={AirplaneTilt} className='infoSectionCardImg' alt='AirplaneTilt' />
                        <div className='infoSectionCardText'>
                            <h1>23,973</h1>
                            <p>Travel to over 23 thousand locations around the world.</p>
                        </div>
                    </div>

                    <div className='infoSectionCard'>
                        <img src={GlobeHemisphereEast} className='infoSectionCardImg' alt='GlobeHemisphereEast' />
                        <div className='infoSectionCardText'>
                            <h1>82,000</h1>
                            <p>Read tens of thousands of reviews of destinations.</p>
                        </div>
                    </div>

                    <div className='infoSectionCard'>
                        <img src={Bicycle} className='infoSectionCardImg' alt='Bicycle' />
                        <div className='infoSectionCardText'>
                            <h1>4,000,000</h1>
                            <p>Visited by millions of travellers every single day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
