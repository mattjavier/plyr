import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64'


const App = () => {
    const [imageState, setImageState] = useState({
        images: []
    })

    useEffect(() => {
        axios.get('/api/images')
        .then(({ data }) => {
            console.log(data)
            // console.log(Base64.fromUint8Array(new Uint8Array(data[0].image.data)))
            setImageState({...imageState, images: data})
            // console.log(imageState.images)
        })
        .catch(err => console.log(err))
    }, []) 

    return (
        <>
            <h1>Photo testing</h1>
            {/* <img src={imageState.images[0].data}/> */}
            {imageState.images.map(({image}) => {
            return(<img src={`data:${image.contentType};base64,` + `${image.data}`} />)
            })}


        </>
    )
}
export default App