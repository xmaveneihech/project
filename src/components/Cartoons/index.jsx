import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/cartoons.css";

const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jk-tv.netlify.app/cartoons/get_all")
      .then((d) => setData(d.data));
  });

  return (
    <section className="section1">
      <h1>Мультфильмы</h1>
      <div className="Cards">
        {data.map((item, index) => (
          <div key={index} className="Card">
            <img src={item.backdropPath} alt="" className="imgcard" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Api;
