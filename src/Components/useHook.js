import { useEffect, useState } from "react";

export default function useHook(url) {
  const [data, SetData] = useState([]);
  useEffect(() => {
    async function getData() {
      const call = await fetch(url);
      const res = await call.json();
      SetData(res);
    }
    getData();
    console.log("call")
  },[]);
  return [data];
}
