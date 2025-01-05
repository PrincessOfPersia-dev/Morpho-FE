// src/components/MediaPartners.js
import React from 'react';
import './MediaPartners.css'; // We'll create this CSS file next

const MediaPartners = () => {
    return (
        <div className="media-partners">
            <div className="media-title">
                <h2>Media Partners</h2>
            </div>
            <div className="media-grid">
                {/* Replace with your actual image paths */}
                <img src={require('../../assets/partner1.png')} alt="Partner 1" />
                <img src={require('../../assets/partner2.png')} alt="Partner 2" />
                <img src={require('../../assets/partner3.png')} alt="Partner 3" />
                <img src={require('../../assets/partner4.png')} alt="Partner 4" />
            </div>
        </div>
    );
};

export default MediaPartners;
