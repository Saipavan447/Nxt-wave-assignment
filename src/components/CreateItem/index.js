import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const CreateItem = () => {
  const submitHandler = event => {
    event.preventDefault()
    const name = event.target.name.value
    const link = event.target.link.value
    const resourceName = event.target.resourceName.value
    const description = event.target.description.value
    const data = {name, link, resourceName, description}

    axios
      .post('https://636f3003f2ed5cb047d748f8.mockapi.io/data', data)
      .then(response => {
        console.log(response.status)
        event.target.reset()
        if (response.status === 201) {
          toast.success('Item Created', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        }
      })
      .catch(error => {
        console.log(error)
        toast.error('Item not Created', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      })
  }
  return (
    <div className="create-item-container">
      <nav className="create-header-container">
        <img
          src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
          alt="logo"
          className="logo"
        />
        <div>
          <img
            src="https://i.ibb.co/Jj9QYXP/image.png"
            className="create-profile-user"
            alt="user"
          />
        </div>
      </nav>
      <hr className="create-horizontal-line" />
      <div className="create-form-container">
        <div className="form-container">
          <NavLink className="user-page" to="/users">
            <AiOutlineLeft />
            Users
          </NavLink>
          <form
            className="add-resources"
            id="contactForm"
            onSubmit={submitHandler}
          >
            <h1 className="heading">Item Details</h1>
            <p className="labels">ITEM NAME</p>
            <input
              className="input"
              placeholder="Enter item name..."
              id="name"
              name="name"
              required
            />
            <p className="labels">LINK</p>
            <input
              className="input"
              placeholder="Enter link ..."
              id="link"
              name="link"
              required
            />
            <p className="labels">RESOURCES</p>
            <input
              className="input"
              placeholder="Enter resources name..."
              id="resourceName"
              name="resourceName"
              required
            />
            <p className="labels">Description</p>
            <textarea
              className="text"
              placeholder="Enter description..."
              id="description"
              name="description"
              required
            />
            <button type="submit" className="create-button">
              Create
            </button>
          </form>
        </div>
        <img
          src="https://i.ibb.co/LPgtCj3/image-9.png"
          className="create-image"
          alt="create"
        />
      </div>
    </div>
  )
}
export default CreateItem
