import React, { Suspense } from "react";
import Bottles from "./components/Bottles";

const App = () => {
  const bottleData = fetch("/bottle.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold text-gray-700 mt-12">
        By Bottle Best Bottle
      </h1>
      <Suspense fallback={<h2>Loading..........</h2>}>
        <Bottles bottleData={bottleData} />
      </Suspense>
    </div>
  );
};

export default App;
