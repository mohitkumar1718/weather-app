import { useContext, useEffect, useState } from "react";
import { options } from "../utils/constant";
import { DataContext } from "../utils/context";

const SearchBar = () => {
  
  const { setName, setTemp, setHumidity } = useContext(DataContext);
  const [city, setCity] = useState('faridabad');

  const fetchData = async (city) => {
    try {
      const data = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options);
      const json = await data.json();
      console.log(json.name + ", " + json.sys.country);
      setName(json.name + ", " + json.sys.country);
      setTemp(json.main.temp);
      setHumidity(json.weather[0].main);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(city);
    setCity('');
  }, []); // Empty dependency array for useEffect to mimic componentDidMount behavior

  const handleSearch = () => {
    fetchData(city);
  };

  return (
    <div className="pt-5 mx-auto text-center">
      <input
        className="rounded-lg border-0 p-1 w-72 h-10"
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="Search for a City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-black h-10 w-14 rounded-lg text-white p-1"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
