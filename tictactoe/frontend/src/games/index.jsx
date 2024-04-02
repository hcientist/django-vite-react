import React, { useEffect } from 'react';


function GameList() {
  useEffect(() => {
    const BASE_URL = 'https://canvas.jmu.edu'
    let ignore = false;
    if (socialAccount) {
      fetch(`${BASE_URL}/api/v1/users/${socialAccount.uid}/enrollments`)
        .then(response => response.json())
        .then(data => {
          if (!ignore) {
            console.log('data', data)
          }
        })
    }
    // const results = await fetch(`${BASE_URL}/api/v1/users/:user_id/enrollments `)
    return () => {
      ignore = true;
    }
  }, [])

  return <ul className="list-group">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li>
  </ul>
}

export {
  GameList
}