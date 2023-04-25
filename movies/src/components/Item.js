import {Image, List, Segment,Header} from 'semantic-ui-react';
import {useEffect, useState} from 'react';
import movieImage from '../assets/movies.png';
import serieImage from '../assets/series.png';
import {Link} from 'react-router-dom';
import ContentModal from './ContentModal';

export default function Item({item}) {
    const [showImage, setShowImage] = useState(false)

    useEffect(() =>{
        setShowImage(false)
        if (item['images']){
            fetch(item['images']['Poster Art']['url']).then((response) =>{
                if (response.status !== 404){
                    setShowImage(true)
                }
            }).catch((e)=>{
                setShowImage(false)
            })
        }
    },[showImage, item])
    
    const displayImageFunction = () => {
        if (showImage && item['images']){
            return item['images']['Poster Art']['url']
        }else if (item['programType']=='movie' || item['programType']=='mainMovies'){
            return movieImage
        }else if (item['programType']=='series' || item['programType']=='mainSeries'){
            return serieImage
        }
    }

    var mainContent = ()=>{
        return(
        <List.Item style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}> 
            < Image size='medium' src={displayImageFunction()}/>
            <List.Content>
                <List.Header>
                    <Header as='h1'> {item['title']}</Header>
                </List.Header>
            </List.Content>
        </List.Item>)
    }
    
    return (
       (item['programType']=='mainMovies' || item['programType']=='mainSeries')?
       ((item['programType']=='mainMovies')?
       (<Link to='/movies'>{mainContent()}</Link>):(<Link to='/series'>{mainContent()}</Link>)
    ):(<div>{mainContent()} <ContentModal item={item} showImage={showImage}/></div>))
}