import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"

export default function App() {
    const experiences = data.map((card, index)=>{
        return <Card
                    key={index}
                    cardInfo={card}
                />
    })

    return (
        <>
            <Header/>
            <section className="cards-list">
                {experiences}
            </section>
        </>
    )
}