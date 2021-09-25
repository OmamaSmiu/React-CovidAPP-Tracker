import React, { useEffect, useState } from 'react'
import {SiDiscover} from 'react-icons/si'
import '../App.css'

const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch(`https://corona.lmao.ninja/v2/countries`);
            const actualData = await res.json();
            console.log(actualData[151])
            setData(actualData[151])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData()
    }, []);


    return (
        <div className="card-main">
            <h6><SiDiscover color="red" fontSize="10px"/>Live</h6>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <div className="row row-cols-1 row-cols-md-5 g-4" id="card-data">
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-primary card-body">
                            <h5 className="card-title">Our Country</h5>
                            <p className="card-text">{data.country}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-info card-body">
                            <h5 className="card-title">Continent</h5>
                            <p className="card-text">{data.continent}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-dark card-body">
                            <h5 className="card-title">Total Population</h5>
                            <p className="card-text">{data.population}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-black bg-light  card-body">
                            <h5 className="card-title">Total Test</h5>
                            <p className="card-text">{data.tests}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-success card-body">
                            <h5 className="card-title">Total Confirmed</h5>
                            <p className="card-text">{data.cases}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-info card-body">
                            <h5 className="card-title">Total Recovered</h5>
                            <p className="card-text">{data.recovered}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-danger card-body">
                            <h5 className="card-title">Total Death</h5>
                            <p className="card-text">{data.deaths}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-warning card-body">
                            <h5 className="card-title">Active Cases</h5>
                            <p className="card-text">{data.active}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-white bg-secondary card-body">
                            <h5 className="card-title">Critical Cases</h5>
                            <p className="card-text">{data.critical}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card text-black bg-white card-body">
                            <h5 className="card-title">Live Update</h5>
                            <p className="card-text">{data.updated}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Covid
