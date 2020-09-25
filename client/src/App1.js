import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {
    const [imageState, setImageState] = useState({
        images: []
    })

    useEffect(() => {
        axios.get('/api/images')
        .then(({ data }) => {
            console.log(data)
            setImageState({...imageState, images: data})
            console.log(imageState.images)
        })
        .catch(err => console.log(err))
    }, []) 

    return (
        <>
          {imageState.images.map(({data}) => <img src={`data:image/jpeg;base64,${data}`} />)}
                            
        </>
    )
}
export default App