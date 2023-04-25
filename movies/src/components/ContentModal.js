import { Form, Input, Button, Modal, Image, Header } from 'semantic-ui-react'
import { useState,useEffect } from 'react';
import movieImage from '../assets/movies.png';
import serieImage from '../assets/series.png';

function ContentModal({item,showImage}) {
    const [open, setOpen] = useState(false)

    
    const displayImageFunction = () => {
        if (showImage && item['images']){
            return item['images']['Poster Art']['url']
        }else if (item['programType']=='movie' || item['programType']=='mainMovies'){
            return movieImage
        }else if (item['programType']=='series' || item['programType']=='mainSeries'){
            return serieImage
        }
    }

    return(
        <Modal
            onClose={()=> setOpen(false)}
            onOpen={()=> setOpen(true)}
            open={open}
            trigger={<Button>Show Modal</Button>}
            >
                <Modal.Content image>
                    <Image size='medium' src={displayImageFunction()}/>
                    <Modal.Description>
                        <Header>{item['title']}</Header>
                        <p>
                            {item['description']}
                        </p>
                        <p>
                            Release Year: {item['releaseYear']}
                        </p>
                    </Modal.Description>
                </Modal.Content>
        </Modal>
    )

}

export default ContentModal;