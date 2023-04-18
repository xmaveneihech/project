import axios from "axios";
import "../../css/cards.css";
import { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jk-tv.netlify.app/war_movies/get_all")
      .then((d) => setData(d.data));
  });
  return (
    <section className="section1">
      <h1 className="movieh1">Боевики</h1>
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

export default Movie;
