import { Title, Wrapper } from './styles';
import { ReleaseCard } from './ReleaseCard';

export const Releases = ({ releases }: any) => {

    return (
        <>
            <Title className="animate__animated animate__fadeIn">New Releases</Title>
            <Wrapper>
                {
                    releases.map(release => {
                        return <ReleaseCard key={release.id} release={release} />
                    })
                }
            </Wrapper>

        </>
    )
}
