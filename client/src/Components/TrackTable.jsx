import {Title,Table,ScrollArea,Card} from "@mantine/core";
const TrackTable = (props)=>{
    const tableHead =(
        <tr>
        <th>Track</th>
        <th>Artist</th>
        </tr>
        )
        const getRows= (element)=>{
            return element.items.map((item,index)=>{
                 return(
                     <tr key={index}>
                     <td>{"track" in item ? item.track.name : item.name}</td>
                     <td>{"track" in item ? item.track.artists[0].name : item.artists[0].name }</td>
                     </tr>
                 )})
         }
    return  <Card shadow="lg" p="sm" style={{backgroundColor:"#070d17",width:"55rem"}} > 
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