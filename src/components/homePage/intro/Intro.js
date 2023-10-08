import { NavLink } from 'react-router-dom';
import './intro.css'

const Intro = () => {
    return ( 
        <div className="intro">
            <div className="container">
                <div className='introContent'>
                    <h1 className="introTitle">Plan your next big trip overseas.</h1>
                    <div className='introButtons'>
                        <NavLink to='/sub'>
                        <button className='introBtnBegin'>BEGIN PLANS</button>
                        <button className='introBtnReview'>REVIEW PLANS</button>
                        </NavLink>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Intro;