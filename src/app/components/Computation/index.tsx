import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Iframe from "@/app/iframe/page";

function Computation({ devLink, designLink, setActiveStep }: any) {
  const [devData, setDevData] = useState(null);

  // const { data, mutate, isLoading } = useMutation(() => fetchApiData());

  // mutate();

  // const fetchApiData = () => {
  //   return axios.post("/api/ai", {
  //     devData,
  //   });
  // };

  const testFn = async () => {
    fetch("https://localhost:3000/button")
      .then((res) => res.text())
      .then((responseText) => {
        const doc = new DOMParser().parseFromString(responseText, "text/html");
        const button = doc.querySelector("#button");
        console.log("button", button);
      });
  };

  testFn();

  return (
    <section>
      Computation Step:
      <ul>
        <li>Dev Link: {devLink} - pass/fail</li>
        <li>Design Link: {designLink} - pass/fail</li>

        <li>Combine</li>
        <li>Send to AI</li>
        <li>Get AI result</li>
        <button onClick={() => setActiveStep(2)}>Submit</button>
      </ul>
      {/* <p>{isLoading ? "loading" : JSON.stringify(data?.data?.res?.text)}</p> */}
      {/* <Iframe /> */}
    </section>
  );
}

export default Computation;
