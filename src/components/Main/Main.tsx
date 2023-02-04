import { Route, Routes } from "react-router-dom";
import { Homepage, Error404, Weather } from "..";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/q/:query" element={<Weather />} />
        <Route path="/gps" element={<Weather />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default Main;
