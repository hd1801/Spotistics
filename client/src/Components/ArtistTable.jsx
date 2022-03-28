import {Title,Table,ScrollArea,Card,Avatar} from "@mantine/core";
const ArtistTable = (props)=>{
    const tableHead =(
        <tr>
        <th>Artist</th>
        <th>Name</th>
        <th>Followers</th>
        </tr>
        )
        const getRows= (element)=>{
            return element.items.map((item,index)=>{
                let src;
                if(item.images[0])
                src= item.images[0].url ;
                else 
                src =  null;

                 return(
                     <tr key={index}>
                     <td><Avatar src={src}  color="indigo" /></td>
                     {/* {!element.loading && <td>{item.images[0].url}</td> } */}
                     <td>{item.name}</td>
                     <td>{item.followers.total}</td>
                     </tr>
                 )})
         }
    return  <Card shadow="lg" p="sm" style={{backgroundColor:"#070d17",width:"55rem"}} > 
        <Title mb="1rem" order={3}>{props.Title}</Title>
        <ScrollArea style={{ height: 250 }} type="auto" scrollbarSize={12} scrollHideDelay={0}>
        <Table striped highlightOnHover>
        <thead>{tableHead}</thead>
        <tbody>{!props.Artist.loading && getRows(props.Artist)}</tbody>
        </Table>
        </ScrollArea>
        </Card>
}
export default ArtistTable;