import { Link } from 'react-router-dom'
import Cat from '../assets/cat.jpg'
import Mail from '../assets/mail.jpg'
import Notifications from '../assets/notifications.jpg'
import PFP from '../assets/blankPFP.webp'
import '../IMG.css'
import { useEffect, useState } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from 'uuid'
import { HashTable } from '../utils/HashTable'
import { LinkedList, Node } from '../utils/LinkedList'
import { auth } from '../firebase'
import { getAuth } from 'firebase/auth'



export function Profile() {
    const [profilePic, setProfilePic] = useState(PFP);
    const [file, setFile] = useState(null);
    const [bio, setBio] = useState('');
    const [savedBio, setSavedBio] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [followersList, setFollowersList] = useState([]);
    const [message, setMessage] = useState('');

    const followers = new HashTable();
    const messages = new LinkedList();

    function followUser() {
        const userToFollow = searchEmail;
        const Follow = auth.currentUser;
        if (!Follow) {
            alert("Field Empty");
            return;
        }
       
            let followingList = followers.get(userToFollow);
            if (!followingList.includes(userToFollow)) {
                followingList.push(userToFollow);
                followers.set(currEmail, followingList);
                setFollowersList(followingList);
                messages.addMessage('You followed ${userToFollow}')
                setMessage(`You followed ${userToFollow}.`);
            }
        
    }
            function handleChange(event) {
                const selectedFile = event.target.files[0];
                if (selectedFile) {
                    setFile(selectedFile);
                }
            }
            function handleBio(event) {
                setBio(event.target.value);
            }
            function bioSubmit() {
                setSavedBio(bio);
            }

            function handleClick() {
                if (!file) {
                    alert("Please select an image first.");
                    return;
                }

                const fileRef = ref(storage, `PFP/${v4()}_${file.name}`);

                uploadBytes(fileRef, file).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        setProfilePic(url);
                    });
                })
            }
            return (
                <div className="Profile">
                    <Link to='/Profile'>
                        <button className="CatButton">
                            <img src={Cat} alt='cattt' id='CatLogo' />
                        </button>
                    </Link>
                    <Link to='/Notifications'>
                        <button className="NotifsButton">
                            <img src={Notifications} alt='Notifs' id='NotifsLogo' />
                        </button>
                    </Link>
                    <Link to='/Messages'>
                        <button className="DMButton">
                            <img src={Mail} alt='Messa' id='DMLogo' />
                        </button>
                    </Link>

                    <input
                        type="email"
                        id='SearchBar'
                        placeholder='Search'
                        value={searchEmail}
                        onChange={(e => setSearchEmail(e.target.value))}
                    />
                    <button onClick = {followUser}></button>
                    <input
                        type="file"
                        id='BrowsePFP'
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Upload</button>
                    <img src={profilePic} alt="profilePIC" id='ProfilePFP' />
                    <br />
                    <textarea
                        id='bio'
                        rows="4"
                        cols="50"
                        value={bio}
                        onChange={handleBio}
                        placeholder="Bio"
                    />
                    <button onClick={bioSubmit}>Submit Bio</button>
                    <p>{savedBio}</p>
                    <Link to='/Posts'>Posts</Link>
                    <Link to='/Followers'>Followers</Link>
                    <ul>
                    {followersList.length > 0 ? (
                        followersList.map((follower, index) => (
                            <li key={index}>{follower}</li> 
                        ))
                    ) : (
                        <p>No followers yet.</p>
                    )}
                </ul>
                </div>
            )
        }
    
