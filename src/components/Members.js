import React from 'react'
import { useModal } from 'react-hooks-use-modal';

const submitModal = (e) => {
  e.preventDefault();
  console.log("kjsdhf")
}

const Members = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  return (
    <div className="members-div">
      <form>
      <input type="search" name="search-members" />
      </form>
    
        <div className="members">
          <h3>Members</h3>

          <button onClick={open} className="add-member-btn">Add Member</button>
          <Modal>
        <div className="add-member-modal">
          <form className="members-form">
          <h3>fill out the form </h3>

          <input type="text" name="name"  placeholder='name' />
          <input type="number" name="age"  placeholder='age' />
          <input type="text" name="github"  placeholder='github' />
          <input type="text" name="linkedIn"  placeholder='linkedIn' />

          <div className="skill">
          <h5>Choose more than oen skill</h5>
            <input type="checkbox" id="react" name="react" value="react" />
            <label htmlFor="vehicle1"> ReactJS</label>
            <input type="checkbox" id="express" name="express" value="express" />
            <label htmlFor="vehicle2"> ExpressJS </label>
            <input type="checkbox" id="javascript" name="javascript" value="javascript" />
            <label htmlFor="vehicle3">Vanilla JavaScript</label>
          </div>
          <div className="language">
            <h5>Choose your language</h5>
            <input type="checkbox" id="persian" name="persian" value="persian" />
            <label htmlFor="vehicle1">Persian</label>
            <input type="checkbox" id="english" name="english" value="english" />
            <label htmlFor="vehicle2"> English</label>
            <input type="checkbox" id="other" name="other" value="other" />
            <label htmlFor="vehicle3"> Other...</label>
          </div>

          <input type="file" name="image" />
          
          <button onClick={close} className="close-btn"><i class="fa-solid fa-xmark"></i></button>
          <button type="submit" onSubmit={submitModal} className="submit-btn">submit</button>
          </form>
        </div>
      </Modal>

        </div>

    </div>
  )
}

export default Members