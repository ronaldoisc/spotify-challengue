import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startLadingTrackById } from '../../redux/modules/tracks';
import { Navbar } from '../../components/Navbar';
import { Loader } from '../../components/Loader';
import { parseDuration } from '../../helper/parseDuration';
import { Container, Header, HeaderFooter, TrackContent } from './styles';


export const TrackDetails = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLadingTrackById(params.trackId));
    }, [dispatch, params]);

    const { ui: { isLoading }, tracks: { active } } = useSelector((state: RootStateOrAny) => state);

    return (
        <>
            {
                isLoading === true ?
                    <Loader loading={isLoading} />
                    :
                    <div>
                        <Navbar title={"spotify"} />
                        {
                            active &&
                            <Container>
                               <Header>
                                   <p>Sencillo</p>
                                   <h1 className='animate__animated animate__zoomIn'> {active.name}</h1>
                                   <HeaderFooter>
                                       <span>Singer: {active.artist.name}</span>
                                       <span>Duration: {parseDuration(active.duration)} m</span>
                                   </HeaderFooter>
                               </Header>
                               <TrackContent src={`https://open.spotify.com/embed?uri=${active.uri}`} title={active.name} width="1200" height="500"  />
                            </Container>
                        }
                    </div>
            }
        </>
    )
}
