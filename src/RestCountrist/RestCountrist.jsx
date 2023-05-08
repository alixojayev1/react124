import '../RestCountrist/Restcountrist.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from 'react-bootstrap';






const RestCountrist = () => {

  const [countrist, setCountrist] = useState('posts');
  const [data, setData] = useState([]);


  const dataFetch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {

    dataFetch();
  }, [countrist]);

  const countristClick = async (e) => {
    if (e.target.value === "all") {
      const respons = await axios.get("https://restcountries.com/v3.1/all");
      setData(respons.data);
    } else {
      const respons = await axios.get(
        `https://restcountries.com/v3.1/name/${e.target.value}`
      );
      setData(respons.data);
    }
  };

  const myData = data.map((info, index) => (
      

          <Col lg={4} md={4} sm={6} xs={12}>
            <div className="card" key={index}  >
              <img src={info.flags.png} alt="tittle" />
              <h3 className='common'>{info.name.common}</h3>
              <h5 className='capital'>{info.capital}</h5>
             
            </div>
          </Col>
     
     ));
    


  return (
    <Container>
    <div className='btn_card'>
     
      <button className='btn_countrist' value={"uzbekistan"} onClick={countristClick}>Uzbekistan</button>
      <button className='btn_countrist' value={"mexico"} onClick={countristClick}>Mexico</button>
      <button className='btn_countrist' value={"all"} onClick={countristClick}>All</button>

      <div className='flex items-center justify-center' >
  
          <div >
          <Row >
             {
              myData
             }
          </Row>
          </div>
        
      </div>
     

    </div>
    </Container>
  )
}

export default RestCountrist;