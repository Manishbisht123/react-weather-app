import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import "./App.css";

function App() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getwheatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getwheatherDetails(inputCity)
  }


  return (
    <div className="col-md-12">
      <div className="wheatherBg">
        <h1 className="heading" >Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="wheatherIcon"
              src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png" />

            <h5 className="wheatherCity">
              {data?.name}
            </h5>
            <h6 className="wheatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
</div>
        </div>
      }

    </div>
  );
}

export default App;
