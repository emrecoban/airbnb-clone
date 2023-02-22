import React from "react";

export default function Card({cardInfo}){
    let badgeText
    if (cardInfo.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (cardInfo.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={"/images/"+cardInfo.coverImg} className="card--img"/>
            <p className="card--line1"><img src="/images/star.png"/> {cardInfo.stats.rating} <span>({cardInfo.stats.reviewCount}) - {cardInfo.location}</span></p>
            <p className="card--line2">{cardInfo.title}</p>
            <p className="card--line3"><span>From ${cardInfo.price} /</span> person</p>
        </div>
    )
}