import "./App.css";
import MyComponent from "./MyComponent";
import { data } from "./data";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="App flex-col flex overflow-hidden items-center font-thin">
      <div className="text-5xl font-semibold my-5">Everything About Machine Learning</div>
      <div className="my-10 mx-5 w-[95%] flex flex-col gap-5 items-center justify-center">
        {data.map((item, index) => (
          <MyComponent key={index} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}

export default App;
