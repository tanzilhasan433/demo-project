import React, {useState} from 'react';
import './Home.css';
import image1 from '../../images/image-1.webp';
import image2 from '../../images/image-2.webp';
import image3 from '../../images/image-3.webp';
import image4 from '../../images/image-4.webp';
import image5 from '../../images/image-5.webp';
import image6 from '../../images/image-6.webp';
import image7 from '../../images/image-7.webp';
import image8 from '../../images/image-8.webp';
import image9 from '../../images/image-9.webp';
import image10 from '../../images/image-10.jpeg';
import image11 from '../../images/image-11.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

   
const Home = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
        
      };

     const removeAllProducts = () => {
        localStorage.removeItem(clickCount);  
        setClickCount([]);                
      };

    return (
        <div>
            <div className="navbar">
                <div className="left-side">
                    <p className='file-selection'>File Selection : {clickCount} </p>
                </div>
                <div className="right-side">
                    <button onClick={removeAllProducts}>Delete</button>
                </div>
            </div>
            <div className='card-container'>
                <Card>                    
                    <Card.Img  className='first-card'  variant="top" src={image1} alt="Image 1"   />
                    <Button className='first-btn' onClick={handleClick} variant="primary">Selected</Button>                                                                  
                </Card>
                <Card >
                    <Card.Img className='last-card' variant="top" src={image2} alt="Image 2" />                                            
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image3} alt="Image 3" />                                            
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image4} alt="Image 4" />                                            
                        <Button onClick={handleClick} variant="primary">Selected</Button>
                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image5} alt="Image 5" />                                          
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image6} alt="Image 6" />                    
                       <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image7} alt="Image7" />                                           
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image8} alt="Image 8" />                                            
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image9} alt="Image 9" />                                            
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image10} alt="Image 10" />                                            
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>
                <Card>
                    <Card.Img  className='last-card' variant="top" src={image11} alt="Image 11" />                                        
                        <Button onClick={handleClick} variant="primary">Selected</Button>                    
                </Card>                
            </div>
        </div>
    );
};

export default Home;


