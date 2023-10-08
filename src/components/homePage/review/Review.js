import './review.css'

import person1 from './img/person1.png'
import person2 from './img/person2.png'
import person3 from './img/person3.png'

const Review = () => {
    return ( 
        <div className='review'>
            <div className='container'>
                <div className='reviewContent'>
                    <p className='reviewName'>TESTIMONIALS</p>
                    <h1 className='reviewTitle'>Let’s see what fans of Travelulu have to say</h1>
                    <div className='reviewCardList'>
                        <div className='reviewCard'>
                            <div className='reviewCardItem'>
                                <img src={person1} />
                                <div className='reviewCardText'>
                                    <div className='reviewCardTextTitle'>
                                        <p>Joe Blo</p>
                                        <p>Visited: France</p>
                                    </div>
                                    <div className='reviewCardTextDescription'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”</div>
                                </div>
                            </div>
                        </div>
                        <div className='reviewCard'>
                            <div className='reviewCardItem'>
                                <img src={person2} />
                                <div className='reviewCardText'>
                                    <div className='reviewCardTextTitle'>
                                        <p>Jane Blo </p>
                                        <p>Visited: France</p>
                                    </div>
                                    <div className='reviewCardTextDescription'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”</div>
                                </div>
                            </div>
                        </div>
                        <div className='reviewCard'>
                            <div className='reviewCardItem'>
                                <img src={person3} />
                                <div className='reviewCardText'>
                                    <div className='reviewCardTextTitle'>
                                        <p>Joe Blo </p>
                                        <p>Visited: France</p>
                                    </div>
                                    <div className='reviewCardTextDescription'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Review;