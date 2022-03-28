import {Title,Table,ScrollArea,Card} from "@mantine/core";
const TrackTable = (props)=>{
    const tableHead =(
        <tr>
        <th>Track</th>
        <th>Artist</th>
        <th>Played At</th>
        </tr>
        )
        const getRows= (element)=>{
            return element.items.map((item,index)=>{
                 return(
                     <tr key={index}>
                     <td>{item.track.name}</td>
                     <td>{item.track.artists[0].name}</td>
                     <td>{item.played_at}</td>
                     </tr>
                 )})
         }
    return  <Card shadow="lg" p="sm" style={{backgroundColor:"#070d17"}} > 
        <Title mb="1rem" order={3}>{props.Title}</Title>
        <ScrollArea style={{ height: 250 }} type="auto" scrollbarSize={12} scrollHideDelay={0}>
        <Table striped highlightOnHover>
        <thead>{tableHead}</thead>
        <tbody>{getRows(props.Tracks)}</tbody>
        </Table>
        </ScrollArea>
        </Card>
}
export default TrackTable;