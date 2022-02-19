
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import { Home } from "../containers/Home/Home";
import { Albums } from "../containers/Albums/Albums";
import { Tracks } from "../containers/Tracks/Tracks";

export const AppRouter = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/albums/:artistId" element={<Albums/>} />
        <Route path="/album/:albumId/tracks" element={<Tracks/>}/>

        <Route path="/*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </div>
  </Router>
  )
}
