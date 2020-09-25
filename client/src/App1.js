import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64'


const App = () => {

    const [imageState, setImageState] = useState({
        images: []
    })

    imageState.handleInputChange = event => {
        setImageState({ ...imageState, [event.target.name]: event.target.value })
    }

    imageState.handleUpload = event => {
        setImageState({ ...imageState, image: event.target.files[0]})
    }

    imageState.handleUploadImage = event => {
        event.preventDefault()
        console.log('will upload')
        const formData = new FormData()
        formData.append("name", imageState.name)
        formData.append("description", imageState.description)
        formData.append("image", imageState.image)
        console.log(formData)
        axios.post('/api/images', formData)
            .then(image => {
                console.log(image)
            })
            .catch(err => console.log(err))
    }

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

            <hr />

            <h1>Image uploading</h1>
            <form encType="multipart/form-data">
                <p>
                    <label>File Name: </label>
                    <input type="text" name="name" onChange={imageState.handleInputChange} />
                </p>
                <p>
                    <label>File Description: </label>
                    <input type="text" name="description" onChange={imageState.handleInputChange} />
                </p>
                <p>
                    <label>File: </label>
                    <input type="file" name="image" onChange={imageState.handleUpload} />
                </p>
                <p>
                    <button onClick={imageState.handleUploadImage}>Upload</button>
                </p>
            </form> 

        </>
    )
}
export default App