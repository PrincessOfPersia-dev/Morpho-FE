// src/components/Jury.js
import React from 'react';
import './Jury.css'; // We'll create this CSS file next

const Jury = () => {
    return (
        <div className="jury">
            <div className="jury-title">
            <h2>The Jury</h2>
            </div>
            <div className="jury-grid">
                {/* Replace with your actual image paths and captions */}
                <div className="jury-item">
                    <img src={require('../../assets/jury1.png')} alt="Jury Member 1" />
                    <caption>Jury Member 1</caption>
                </div>
                <div className="jury-item">
                    <img src={require('../../assets/jury2.png')} alt="Jury Member 2" />
                    <caption>Jury Member 2</caption>
                </div>
                <div className="jury-item">
                    <img src={require('../../assets/jury3.png')} alt="Jury Member 3" />
                    <caption>Jury Member 3</caption>
                </div>
                <div className="jury-item">
                    <img src={require('../../assets/jury4.png')} alt="Jury Member 4" />
                    <caption>Jury Member 4</caption>
                </div>
                <div className="jury-item">
                    <img src={require('../../assets/jury5.png')} alt="Jury Member 5" />
                    <caption>Jury Member 5</caption>
                </div>
                <div className="jury-item">
                    <img src={require('../../assets/jury6.png')} alt="Jury Member 6" />
                    <caption>Jury Member 6</caption>
                </div>
            </div>
        </div>
    );
};

export default Jury;
