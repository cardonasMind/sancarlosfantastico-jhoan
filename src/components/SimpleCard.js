import React from "react";

const SimpleCard = ({ image, text }) => {
    return(
        <div className="simpleCard paper">
            <div className="cardImageOverlay">
                <h2>{text}</h2>
            </div>

            <style jsx>{`
                .simpleCard {
                    background: #f0f0f0;
                    background-image: url(${image});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 12rem;
                    position: relative;
                    transition: .4s;
                    overflow: hidden;
                    margin: 1rem 0;
                }

                .simpleCard:hover {
                    transform: scale(.94);
                }

                .cardImageOverlay {
                    background: linear-gradient(transparent, #121212, #121212);
                    color: white;
                    padding: 1rem;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
            
            
            `}</style>
        </div>
    )
}

export default SimpleCard;