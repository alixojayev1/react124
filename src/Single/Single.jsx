import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import '../Single/Single.css';

const Single = () => {
    const [data, setData] = useState([]);
    const { name } = useParams();
    let url = `https://restcountries.com/v3.1/name/${name}`;

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [url]);

    return (
        <>
            {data.map((singleData, index) => (
                <div key={index} className="countrist">
                    <img src={singleData.flags.png} alt={singleData.flags.alt} />
                    <h4 className="country">Country: {singleData.name.common}</h4>
                    <h5 className="capital">Capital: {singleData.capital}</h5>

                    <NavLink to="/">BACK</NavLink>

                </div>
            ))}
        </>
    );
};

export default Single;