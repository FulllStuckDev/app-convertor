import React from "react";

export const Header = ({priceUSD, priceEUR}) => {
    
    return (
        <div className="Header">
        <p>1 USD - {priceUSD} UAH</p>
        <p>1 EUR - {priceEUR} UAH</p>
    </div>
    )
    
}