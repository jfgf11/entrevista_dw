import Item from './Item';
import {useEffect, useState} from 'react';
import {completeItem} from '../models/comleteItem';
import dummy_content from '../data/sample.json';
import {Grid, PlaceholderHeader} from 'semantic-ui-react';




export default function ItemList({type}) {
    const [listContent, setListContent] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [columns, setColumns] = useState(6)
    const completeItemsParsed = completeItem.fromJSON(dummy_content)
    

    
    useEffect(() =>{
        var parsedContent = []
        if (type==='movie' || type==='series'){
            parsedContent = completeItemsParsed['entries'].filter(object => object.programType === type && object.releaseYear>=2010)
            setColumns('10')
        } else{
            parsedContent = [{title: 'Popular Series', programType: 'mainSeries'}, {title: 'Popular Movies', programType: 'mainMovies'}]
            setColumns('6')
        }
        parsedContent.sort((a,b)=>{
            const nameA = a['title'].toUpperCase();
            const nameB = b['title'].toUpperCase();
            if (nameA < nameB){
                return -1
            }
            if (nameA > nameB){
                return 1
            }
            return 0;
        })
        setListContent(parsedContent)
    },[type])

    const renderedList = ()=>{
        const array = listContent.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0,parseInt(columns)));
        return chunks.map((row, i) => {
            return (
            <Grid.Row key={i}>
                {row.map((col,i)=>{
                    return (<Grid.Column key={i}>
                        <Item item={col}/>
                    </Grid.Column>)
                })}
            </Grid.Row>
        )})
    } 
    
    


    return (
        <Grid columns={columns}>
            {renderedList()}
        </Grid>
    )

}