import * as React from "react";

/* NOTICE url по получению данных из api */
const url = "http://api.weatherapi.com/v1/forecast.json";
/* NOTICE ключ по которму можно обращаться к api*/
const accessKey = "1d32e563a00248ceb9a55651240703";
/* NOTICE параметр для установки названия города*/
const q = "";
/* NOTICE кол-во дней для получения данных*/
const days = "";
/* NOTICE русский язык для данных */
const lang = "ru";

/* TODO описать типы */
const weather = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    last_updated_epoch: 0,
    last_updated: "",
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
  },
  forecast: {
    forecastday: [
      {
        date: "2024-03-11",
        date_epoch: 1710115200,
        day: {},
      },
    ],
  },
};

function App() {
  return <>app</>;
}

export default App;
