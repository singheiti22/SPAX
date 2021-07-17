import React, { useEffect, useState } from "react";
import CardImage from "../assets/images/card.jpeg";
import ChipImage from "../assets/images/chip.png";
import Dropdown from "./Dropdown";
import Input from "./Input";
import CreditCardLogo from "./CreditCardLogo";

const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState("");
    const randomNumber =  Array(16).fill(0).map((e,i)=>  i+1);
    const [cardHolder, setCardHolder] = useState("");
    const [cvv, setCvv] = useState("");
    const [month, setMonth] = useState("Month");
    const [year, setYear] = useState("Year");
    const monthOptions = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    const [showFrontSide, setShowFrontSide] = useState(true);
    const numbers =  Array(100).fill(0).map((e,i)=>  i+1);
    const yearOptions = numbers.map(item => {
        if(item <= 9) {
            return "200" + item
        } else if(item >= 10 && item <= 99){
            return "20" + item;
        } else return "3000";
    })

    return <div style={{position:"relative"}}>
        <div className="credit-card-details">
            <div onClick={() => setShowFrontSide(true)}>
                <Input inputLength={16} label="Card Number" width="100%" value={cardNumber} setValue={setCardNumber} />
            </div>
            <br />
            <div onClick={() => setShowFrontSide(true)}>
                <Input  onClick={() => setShowFrontSide(true)} inputLength={21} label="Card Holders" width="100%" value={cardHolder} setValue={setCardHolder} />
            </div>
            <br />
            <div className="d-flex">
                <span onClick={() => setShowFrontSide(true)}>
                    <label className="expiration-label">Expiration date</label>
                    <div style={{marginTop:"3px"}}>
                        <Dropdown value={month} setValue={setMonth} options={monthOptions} />
                        </div>
                </span>
                <span className="ml-70" style={{marginTop:"20px"}} onClick={() => setShowFrontSide(true)}>
                    <Dropdown value={year} setValue={setYear} options={yearOptions} />
                 </span>
                <span 
                    className="ml-70" 
                    onClick={() => setShowFrontSide(false)}
                >
                    <Input value={cvv} setValue={setCvv} inputLength={3} label="CVV" width="123%" />
                </span>
            </div>
            <br />
            <button className="submit-button">Submit</button>
        </div>
        <div className="image"> 
            <img src={CardImage} className="credit-card-image" alt="credit-card" />
            {showFrontSide ?
            <>
            <img src={ChipImage} className="chip-image" alt="chip" />
            <CreditCardLogo cardNumber={cardNumber} className="card-type-image"/>
            <div className="card-number">
                {randomNumber.map((item, index) => {
                    if(cardNumber[index])
                        return <span key={index} className={`${index!==0 && index%4===0 ? "ml-40" : ""}`}>
                            {cardNumber[index]}
                        </span>
                    else return <span key={index} className={`${index!==0 && index%4===0 ? "ml-40" : ""}`}>
                     #
                    </span>
                })
                }
            </div>
            <div className="card-holder-name">
                <div className="heading">Card Holder</div>
                <div className="data">{cardHolder.trim() === "" ? "FULL NAME" : cardHolder}</div>
            </div>
            <div className="expiry">
                <div className="heading">Expires</div>
                <div className="data">
                    {month === "Month" ? "MM" : month}/{year === "Year" ? "YY" : year.substring(2,4)}
                    </div>
            </div>
            </> : <div className="back-side">
                <div className="black-strip"></div>
                <div className="label">CVV</div>
                <div className="cvv">
                    {cvv && cvv.replace(new RegExp("[0-9]", "g"), "*")}
                </div>
                <div className="logo">
                    <CreditCardLogo cardNumber={cardNumber} className="chip-image"/>
                    {/* <img src={cardType} className="chip-image" alt="card-type" /> */}
                </div>
            </div>}
        </div>
    </div>
}

export default CreditCard;