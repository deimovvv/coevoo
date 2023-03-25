import { Routes, Route } from "react-router-dom";
import CoevoRoutes from '../routes/CoevoRoutes'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CoevoRoutes/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
