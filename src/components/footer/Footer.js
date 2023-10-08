import './footer.css'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='container'>
                <div className='footerContent'>
                    <div className='firstBlock'>
                        <h1 className='footerLogo'>Travelulu</h1>
                        <p className='footerDescription'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ullamcorper magna, ac laoreet ex. Integer a consequat lectus. Nullam tortor sem
                            <br />
                            <br />
                            <span>Copyright 2021, All Rights Reserved.</span>
                        </p>
                    </div>
                    <div className='footerList'>
                        <h1 className='footerListTittle'>Services</h1>
                        <ul>
                            <li>Planning</li>
                            <li>Financing</li>
                            <li>Purchasing</li>
                            <li>Meeting</li>
                            <li>Flying</li>
                        </ul>
                    </div>

                    <div className='footerList'>
                        <h1 className='footerListTittle'>Continents</h1>
                        <ul>
                            <li>North America</li>
                            <li>South America</li>
                            <li>Asia</li>
                            <li>Africa</li>
                            <li>Europe</li>
                            <li>Australia</li>
                        </ul>
                    </div>

                    <div className='fourthBlock'>
                        <h1 className='footerListTittle'>Contact</h1>
                        <p className='fourthBlockContact'>travelulu@website.com </p>
                        <p className='fourthBlockDescription'>22 Street Address,
                            Suburb Address
                            Main City, PO Box
                            Country
                            <br />
                            <br />
                            08 8888 88888</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;