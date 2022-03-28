import { Container,Title,Group, Card, Text} from "@mantine/core";
import TrackTable from "./TrackTable";
import useFetch from "../hooks/useFetch";
import ArtistTable from "./ArtistTable";


const Home = () =>{
    const userURL = "https://api.spotify.com/v1/me"
    const recentURL = "https://api.spotify.com/v1/me/player/recently-played"
    const likedURL = "https://api.spotify.com/v1/me/tracks"
    const timeRange = "long_term";
    const artistURL = `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`
    const topTrackURL = `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`;
    const topArtist = useFetch(artistURL)
    const likedTracks = useFetch(likedURL);
    const recentTracks  = useFetch(recentURL);
    const userData = useFetch(userURL);
    const topTracks = useFetch(topTrackURL);
    console.log(topTracks);

    return <Container mt="4rem" p={0} mx={0} fluid>
            <Card shadow="lg" style={{backgroundColor:"#070d17"}}    >
            <Title order={2}> Welcome to Spotistics, {userData.items.display_name}</Title>
            <Text> Here is a summary for your spotify profile. </Text>
            
            </Card>
            
            <Group mt="md" position="apart" grow>
            <TrackTable Title="Recently Played" Tracks={recentTracks}/>
            <TrackTable Title="Saved Tracks" Tracks={likedTracks}/>
            </Group>
            <Group mt="md" position="apart" grow>
            <ArtistTable Title="Top Artists" Artist={topArtist}/>
            <TrackTable Title="Top Tracks" Tracks={topTracks}/>
            </Group>
            
    </Container>
    
}
export default Home;