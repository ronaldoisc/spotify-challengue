
import {Link} from 'react-router-dom';
import { parseDuration } from '../../helper/parseDuration';
import { Table } from './styles';


export const TableTracks = ({ tracks }) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Duration (m)</th>
                    <th>Preview</th>
                </tr>
            </thead>
            <tbody>
                {
                    tracks.map((track, i) => {
                        return <tr key={track.id}>
                            <td>{i + 1}</td>
                            <td>
                                <Link to={`/track/${track.id}`}>{track.name}</Link>
                            </td>
                            <td>{parseDuration(track.duration)}</td>
                            <td>
                                <audio  src={track.previewUrl} controls ></audio>
                            </td>
                        </tr>

                    })
                }
            </tbody>
        </Table>


    )
}
