import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import LinkCard from '../../components/LinkCard/LinkCard';
import Navbar from './../../components/Navbar/Navbar.js';


function Home() {
  const [title, setTitle] = useState('')
  const [target, setTarget] = useState('')
  const [slug, setSlug] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
      setUser(currentUser)
    }
    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])
  const generateLink = async () => {


    if (!title || !slug || !target) {
      toast.error("please enter all details")
      return

    }

    const response = await axios.post(`${process.env.REACT_APP_API_KEY}/link`,
      {
        title,
        slug,
        target,
        user: user._id
      }
    )
    if (response.data.success) {
      toast.success("Link generated successfully");

      setTitle('')
      setSlug('')
      setTarget('')
    }
    else {
      toast.error(response.data.message)
    }

  }

  const [userLinks, setLinks] = useState([])

  const fetchLink = async () => {
    if (!user || !user._id) {
      return
    }
    toast.loading('Loading Links...')
    const response = await axios.get(`${process.env.REACT_APP_API_KEY}/links?userId=${user._id}`);
    toast.dismiss()
    setLinks(response.data.data)
  }

  useEffect(() => {
    fetchLink();
  }, [user])
  return (

    <div>
      <Navbar />

      <h1 className='title-heading title-head'>Shorter URL!</h1>
      <h1 className='title title-ft'>do not waste time to long links...!</h1>
      <div className='main-link-container'>
        <div className='link-container'>
          <form className='url-form'>
            <h3 style={{ textAlign: 'center' }}>Short url in second !</h3>
            <input
              type='text'
              placeholder='Title'
              value={title}
              className='input-url'
              onChange={(e) => setTitle(e.target.value)

              }
            />
            <input
              type='text'
              placeholder='Target'
              value={target}
              className='input-url'
              onChange={(e) => setTarget(e.target.value)

              }
            />
            <input
              type='text'
              placeholder='slug'
              value={slug}
              className='input-url'
              onChange={(e) => setSlug(e.target.value)

              }
            />
            <button type='button' style={{ textDecoration: 'none' }}
              className='btn-link'
              onClick={generateLink}>
              shorten
            </button>

          </form>
        </div>
        <div className='my-link'>
          <h2 className='my-link-title'>My links</h2>
          {
            userLinks.map((links, i) => {
              const { title, target, slug, views, createdAt } = links;
              return <LinkCard
                key={i}
                title={title}
                target={target}
                slug={slug}
                views={views}
                createdAt={createdAt}
              />
            })
          }

        </div>
      </div>
      <Toaster />

    </div>
  )
}

export default Home
