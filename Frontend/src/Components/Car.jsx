import React,{useState, useEffect} from 'react'

const Car = () => {
    const [car, setCar] = useState([]);
    const fetchCarData = async() => {
      let url =`https://freetestapi.com/api/v1/cars`;
      let data = await fetch(url)
      let parseDate =  await data.json()
      console.log(parseDate)
      setCar(parseDate)
    };

    useEffect(()=>{
        fetchCarData()
      },[])
  return (
    <div>
      <div className="container py-4">
      <div className="row">
        {car && car.map((e,index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={e.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.make}  {e.model}</h5>
                  <p className="card-text">{e.color}</p>
                  <a href={e.url} target="blank" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default Car
