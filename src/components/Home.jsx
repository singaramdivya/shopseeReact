import React from 'react'
import Card from 'react-bootstrap/Card';
// import banner from './banner.png'
// import Products from './Products';

const Home = () => {
    return (
        <div className='home-banner'>
            <Card className="bg-dark text-dark border-0">
                <Card.Img src="https://shop.thelabellife.com/cdn/shop/files/Desktop-HP_Vday_Malaika_cebc7897-916b-4d89-bc7e-974ddb53f98c.jpg?v=1707988711&width=1500" alt="banner" />
                <Card.ImgOverlay>
                  <div className="container mt-5">
                  <Card.Title className='display-5 fw-bolder'>Hurry ! Last Chance</Card.Title>
                    <Card.Text className='lead fs-1'>
                       Sales Ends Today
                    </Card.Text>
                    <Card.Text className='lead fs-4'>Buy Before It's Over</Card.Text>
                    <Card.Text className='lead fs-2'>Shop Now <i className='fa fa-shopping-bag'></i></Card.Text>
                  </div>
                </Card.ImgOverlay>
            </Card>
            {/* <Products/> */}
        </div>
    )
}

export default Home