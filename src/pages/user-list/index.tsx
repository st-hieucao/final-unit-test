import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  };

  const handleRemove = (user: any) => {
    const indexUser = users.findIndex((item: any) => item.id === user.id);
    const newList = [...users];
    newList.splice(indexUser, 1);
    setUsers(newList);
  };

  return (
    <div>
      <ul data-testid="user-list">
        { isLoading && <p data-testid="is-loading">Is loading ...</p>}
        {
          users.map((user : any) =>
          <li key={user.id} data-testid={'user-' + user.id}>
            <Link to={'/user/' + user.id} className='nav-link'>{user.name}</Link>
            <button data-testid="delete-button" onClick={() => handleRemove(user)} style={{marginLeft: '1rem'}}>Remove</button>
          </li>)
        }
      </ul>
    </div>
  );
};

export default UserList;
