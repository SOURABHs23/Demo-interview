import React from "react";

const Js = () => {
  async function testing() {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved");
      }, 3000);
    });
    console.log(p);

    p.then((data) => {
      console.log(data);
    });

    // const data = await p;
    // console.log(data);
  }
  testing();

  return <div className="m-3">Js</div>;
};

export default Js;
