
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";



import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startCheckingToken } from "../redux/modules/newReleases";
import { Loader } from "../components/Loader";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
  const dispatch = useDispatch();

  const { checkingToken } = useSelector((state: RootStateOrAny) => state.newReleases);

  useEffect(() => {
    dispatch(startCheckingToken());
  }, [dispatch])

  if (checkingToken) {
    return <Loader loading={checkingToken} />
  }


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={
            <DashboardRoutes/>
          }/>

         
          {/* <Route  path="/" element={<Home />} />
          <Route path="/albums/:artistId" element={<Albums />} />
          <Route path="/album/:albumId/tracks" element={<Tracks />} />
          <Route path="/track/:trackId" element={<TrackDetails />} />
          <Route path="/*" element={<Navigate to={"/"} replace />} /> */}
        </Routes>
      </div>
    </Router>
  )
}
