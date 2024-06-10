import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

  return (
      <div className='joinOuterContainer'>
          <div className='joinInnerContainer'>
              <h1 className='heading'>Join</h1>
              {/* input field for entering name and room */}
              <div>
                  <input placeholder='' className='joinInput' type='text' onChange={(event) => setName(event.target.value) } />
              </div>
              <div>
                  <input placeholder='' className='' type='text' onChange={(event) => setRoom(event.target.value)}/>
              </div>
              {/* sign in button */}
              <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                  <button className='button mt-20' type='submit'>Sign In</button>
              </Link>
          </div>
    </div>
  )
}

export default Join