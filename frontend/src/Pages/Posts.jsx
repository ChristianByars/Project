import { Link } from 'react-router-dom'
import Cat from '../assets/cat.jpg'
import Mail from '../assets/mail.jpg'
import Notifications from '../assets/notifications.jpg'
import { useState, useEffect } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
import { v4 } from 'uuid'
import '../IMG.css'

export function Posts() {
    const iamgeListRef = ref(storage, "images/")
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const uploadImage = () => {
        if (imageUpload == null)
            return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then(() => {
            getImageList();
        })

    };
    const getImageList = () => {
        setImageList([])
        listAll(iamgeListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }

    useEffect(() => {
        getImageList()
    }, [])


    return (

        <div className="Posts">

            <input type="file" id='FileButton' onChange={(event) => { setImageUpload(event.target.files[0]) }} />
            <button id="Post" onClick={uploadImage}>Post</button>
            {imageList.map((url => {
                return <img src={url} className='img' />
            }))}
        </div>
    )
}