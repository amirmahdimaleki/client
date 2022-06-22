import React from 'react'
import { useModal } from 'react-hooks-use-modal';



const Members = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  return (
    <div>
      <form>
      <input type="search" name="search-members" value=""/>
      </form>
    
        <div className="members">
          <h3>Members</h3>

          <button onClick={open} className="add-member-btn">Add Member</button>
          <Modal>
        <div className="add-member-modal">
          <h3>fill out the form </h3>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>

        </div>

    </div>
  )
}

export default Members