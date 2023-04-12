import { Link } from "react-router-dom"
import "./PricingStyles.css"

import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="cards">
                <h3>Premium</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>5-Days</p>
                <p>pages</p>
                <p>purchase</p>
                <p>design</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="cards">
                <h3>Business</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>10-Days</p>
                <p>15pages</p>
                <p>purchase</p>
                <p>design</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="cards">
                <h3>Basic</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>Days</p>
                <p>pages</p>
                <p>purchase</p>
                <p>design</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing