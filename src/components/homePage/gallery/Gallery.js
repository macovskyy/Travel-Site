import './gallery.css'

import photo1 from './img/photo1.png'
import photo2 from './img/photo2.png'
import photo3 from './img/photo3.png'

const Gallery = () => {
    return ( 
        <div className='gallery'>
            <div className='container'>
                <div className='galleryContent'>
                    <p className='galleryName'>PHOTO GALLERY</p>
                    <h1 className='galleryTitle'>View the wonderful places you can visit</h1>
                    <div className='galleryList'>
                        <img src={photo1} className='galleryListItem' />
                        <img src={photo2} className='galleryListItem' />
                        <img src={photo3} className='galleryListItem' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;