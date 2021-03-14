import React, { useEffect, useState } from "react";

function Rates() {

    const [rates, setRates] = useState([{
        origin: "",
        originZone: "",
        dest: "",
        destZone: "",
        transitAirport: "",
        transitCarrier: "",
        fromDate: "",
        untilDate: "",

        rateCode: "",
        kgLb: ""
    }]);

    {/* contact: "",
        sellBuy: "",
        remarksInt: "",
        remarksExt: "",
        salesRegion: "",
        currency: "",
        forCarrier: "",
        serviceLevel: "",
        agent: "",
        dealCode: "",
        shipper: "",
        priceTemplate: "",
        priceClass: "",
        prepaidCollect: "",
        uldType: "",
        flightGroup: "",
        weekday: "",
        premium: "",
        reference: "",
        shcAddon: "",
        allotPrice: "",
        minAmount: "",
        n: "",
        q45: "",
        q100: "",
        q300: "",
        q500: "",
        q1000: "",
        q3000: "",
        allIn: "",
        expired: "",
        revisedDate: "" 
        */}


    useEffect(() => {
        fetch("/rates").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setRates(jsonRes));
    })

    return <div className="container">
        <h1>Rates</h1>
        {rates.map(rate =>
            <div key={rates.id}>
                <p>{rate.origin}</p>
                <p>{rate.originZone}</p>
                <p>{rate.dest}</p>
                <p>{rate.destZone}</p>
                <p>{rate.transitAirport}</p>
                <p>{rate.transitCarrier}</p>
                <p>{rate.fromDate}</p>
                <p>{rate.untilDate}</p>

                <h1>{rate.rateCode}</h1>
                <p>{rate.kgLb}</p>

                {/*
                <p>{rate.contact}</p>
                <p>{rate.sellBuy}</p>
                <p>{rate.remarksInt}</p>
                <p>{rate.remarksExt}</p>
                <p>{rate.salesRegion}</p>
                <p>{rate.currency}</p>
                <p>{rate.forCarrier}</p>
                <p>{rate.serviceLevel}</p>
                <p>{rate.agent}</p>
                <p>{rate.dealCode}</p>
                <p>{rate.shipper}</p>
                <p>{rate.priceTemplate}</p>
                <p>{rate.priceClass}</p>
                <p>{rate.prepaidCollect}</p>
                <p>{rate.uldType}</p>
                <p>{rate.flightGroup}</p>
                <p>{rate.weekday}</p>
                <p>{rate.premium}</p>
                <p>{rate.reference}</p>
                <p>{rate.shcAddon}</p>
                <p>{rate.allotPrice}</p>
                <p>{rate.minAmount}</p>
                <p>{rate.n}</p>
                <p>{rate.q45}</p>
                <p>{rate.q100}</p>
                <p>{rate.q300}</p>
                <p>{rate.q500}</p>
                <p>{rate.q1000}</p>
                <p>{rate.q3000}</p>
                <p>{rate.allIn}</p>
                <p>{rate.expired}</p>
                <p>{rate.revisedDate}</p> 
                */}

            </div>
        )}
    </div>
}

export default Rates;
