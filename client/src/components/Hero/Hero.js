import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutComp from '../../components/AboutComp/AboutComp';
import MediaPartners from '../../components/MediaPartners/MediaPartners';
import Jury from '../../components/Jury/Jury';
import './Hero.css';
import { COMPETITION_END_DATE, WINNERS_ANNOUNCEMENT_DATE } from '../../config/config';  // Import the competition and winners announcement date

const Hero = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isCompetitionOpen, setCompetitionOpen] = useState(true);  // Track if competition is open
    const [isWinnersAnnounced, setWinnersAnnounced] = useState(false); // Track if winners have been announced
    const navigate = useNavigate();

    // Check the competition and winners announcement dates
    useEffect(() => {
        const currentDate = new Date();

        // Check if the competition has ended
        if (currentDate >= COMPETITION_END_DATE) {
            setCompetitionOpen(false);  // Mark competition as closed
        }

        // Check if the winners have been announced
        if (currentDate >= WINNERS_ANNOUNCEMENT_DATE) {
            setWinnersAnnounced(true);
        }
    }, []);

    const handleButtonClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/docs/bpdf.pdf'; 
        link.download = 'bpdf.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleViewWinnersClick = () => {
        navigate('/winners');
    };

    return (
        <div className="App">
            <div className='hero'>
                <div className='hero-content'>
                    <div className="hero-text text-box">
                        <h1>Design with Curves: <br/>Ultimate Fluidity Challenge <br/>(First Edition)</h1>

                        {isCompetitionOpen ? (
                            <>
                                <button className='hero-button' onClick={handleButtonClick}>Join Now</button>
                            </>
                        ) : isWinnersAnnounced ? (
                            <div className="competition-message">
                                <h2>Winners Announced!</h2>
                                <p>The winners have been announced! Check out the winners page for more details.</p>
                                <button onClick={handleViewWinnersClick}>View Winners</button>
                            </div>
                        ) : (
                            <h2 className="competition-closed">Competition Closed</h2>
                        )}
                    </div>
                </div>
            </div>
            
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={handleClosePopup}>✖</button>
                        <button className="popup-button" onClick={handleDownload}>Download Brief</button>
                        <button className="popup-button" onClick={handleRegisterClick}>Register/Sign In</button>
                    </div>
                </div>
            )}

            <AboutComp />
            <MediaPartners />
            <Jury />
        </div>
    );
};

export default Hero;
