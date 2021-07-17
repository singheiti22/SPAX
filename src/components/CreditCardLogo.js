import React, { useEffect, useState } from "react";
import visa from "../assets/images/visa.png";
import amex from "../assets/images/amex.png";
import dinersclub from "../assets/images/dinersclub.png";
import discover from "../assets/images/discover.png";
import jcb from "../assets/images/jcb.png";
import maestro from "../assets/images/maestro.png";
import rupay from "../assets/images/rupay.png";
import mastercard from "../assets/images/mastercard.png";
import unionpay from "../assets/images/unionpay.png";
import invalid from "../assets/images/invalid.jpeg";
import { getCardTypes } from "./utils/getCardTypes";

const CreditCardLogo = ({className, cardNumber}) => {
    const [cardType, setCardType] = useState("visa");
    useEffect(() => {
        var cardTypeTemp = getCardTypes(cardNumber)
        if(cardTypeTemp !== "") {
            if(cardTypeTemp.toLowerCase() !== cardType)
                setCardType(cardTypeTemp.toLowerCase())
        }
    }, [cardNumber])

    return <>
        {
            cardType === "visa" ? <img src={visa} className="card-type-image" alt="card-type" /> :
            cardType === "discover" ? <img src={discover} className="card-type-image" alt="card-type" /> :
            cardType === "amex" ? <img src={amex} className="card-type-image" alt="card-type" /> :
            cardType === "dinersclub" ? <img src={dinersclub} className="card-type-image" alt="card-type" /> :
            cardType === "maestro" ? <img src={maestro} className="card-type-image" alt="card-type" /> :
            cardType === "mastercard" ? <img src={mastercard} className="card-type-image" alt="card-type" /> :
            cardType === "rupay" ? <img src={rupay} className="card-type-image" alt="card-type" /> :
            cardType === "unionpay" ? <img src={unionpay} className="card-type-image" alt="card-type" /> :
            cardType === "jcb" ? <img src={jcb} className="card-type-image" alt="card-type" /> :
            <img src={invalid} className="card-type-image" alt="card-type" />
        }
    </>
}

export default CreditCardLogo;