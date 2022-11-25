import { useState, useEffect } from 'react';
import axios from 'axios';

const useTimeBetween = async (antal) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3123/products').then((response) => {
      const res = response.data;
      setData(res);
    });
  }, []);
  // console.log(data);
  const disableDays = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      let x = 0;
      let from = await data[i]?.from;
      let to = await data[i]?.to;
      if (from) {
        from = from.split('.');
        to = to.split('.');
        console.log(from);
        for (let y = from[0]; y <= to[0]; y++) {
          disableDays.push(
            new Date(
              parseInt(from[2]),
              parseInt(from[1]) - 1,
              parseInt(from[0]) + x
            )
          );
          x++;
        }
      }
    }
  }
  console.log(disableDays);
  const counts = {};
  disableDays.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  const disable = [];
  for (var days in counts) {
    disable.push([days, counts[days]]);
  }

  disable.sort(function (a, b) {
    return b[1] - a[1];
  });
  // console.log(disableDays);
  const disableNow = [];
  for (let i = 0; i < disable.length; i++) {
    if (disable[i][1] + antal > data.length) {
      disableNow.push(new Date(disable[i][0]));
    }
  }
  if (typeof disableNow !== 'undefined' && disableNow.length > 0) {
    return disableNow;
  }
};

export { useTimeBetween };
