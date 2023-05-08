import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../Card/Card';


const Home = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all`)
            setData(response.data);
        
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    const myCountries = data.map((country, index) => (
        
        <Card key={index} flag={country.flags.png} 
        alt={country.flags.alt}  name={country.name.common} 
        capital={country.capital}/>

        
    ))
  return (
    <div className="container">
     <div className="row gy-5">
     {myCountries}
     </div>
    </div>
  )
}

export default Home