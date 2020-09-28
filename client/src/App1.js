import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { localsName } from 'ejs'


const App = () => {

    const [imageState, setImageState] = useState({
        images: [],
        imageUpload: '',
        singleImage: ''
    })

    imageState.handleInputChange = event => {
        setImageState({ ...imageState, [event.target.name]: event.target.value })
    }

    // Seperate handler for file upload to read properly
    imageState.handleUpload = event => {
        setImageState({ ...imageState, imageUpload: event.target.files[0]})
    }


    imageState.handleUploadImage = event => {
        event.preventDefault()
        console.log('Upload starting...')
        const formData = new FormData()
        formData.append("name", imageState.name)
        formData.append("description", imageState.description)
        formData.append("player", imageState.player)
        formData.append("image", imageState.imageUpload)
        axios.post('/api/images', formData)
            .then(image => {
                console.log('image uploaded')
                // console.log(image)
            })
            .catch(err => {
                console.log('upload has failed')
                console.log(err)})
    }

    useEffect(() => {
        axios.get('/api/users/myself', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('user')}`
            }})
            .then(({data}) => {
                setImageState({ ...imageState, player: data._id})
            })
            .catch(err => console.log(err))
        

        // axios.get('/api/images/5f6e5f6b54eb5217ac0a971f')
        // .then(({ data }) => {
        //     console.log(data)
        //     // console.log(Base64.fromUint8Array(new Uint8Array(data[0].image.data)))
        //     setImageState({...imageState, singleImage: data.image})
        //     // console.log(imageState.images)
        // })
        // .catch(err => console.log(err))
    }, []) 


    return (
        <>
<<<<<<< HEAD
          {imageState.images.map(({data}) => <img src={`data:image/jpeg;base64,${data}`} />)}
                            
=======
            <h1>Photo testing</h1>
            {<img src={`data:${imageState.singleImage.contentType};base64,` + `${imageState.singleImage.data}`} />}
            {/* {imageState.images.map(({image}) => {
            return(<img src={`data:${image.contentType};base64,` + `${image.data}`} />)
            })} */}

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

>>>>>>> 526d918b65c0eaf338aaad7c0fd4b7b7da2096f7
        </>
    )
}
export default App