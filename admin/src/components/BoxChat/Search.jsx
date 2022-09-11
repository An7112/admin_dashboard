import React from 'react'
import { useState } from 'react'
import user1 from '../../data/avatar2.jpg'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const { currentUser } = useSelector(state => state.stateReducer)
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username))
    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    }catch(err) {

    }
    setUser(null)
    setUsername("")
  }
  return (
    <div className='border-b-1 border-[gray]'>
      <div className=''>
        <input type='text' placeholder='Find a user' className=' bg-transparent border-0 text-white outline-none placeholder:text-slate-300' onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className='p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-[#2f2d52]' onClick={handleSelect}>
          <img src={user.photoURL} alt='' className='w-12 h-12 rounded-full object-cover' />
          <div className=''>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search