import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setUserData(data);
      })
  };

  return (
    <div data-testid="user-detail">
      { isLoading && <p data-testid="is-loading">Is loading ...</p>}
      {
        userData && <div data-testid='user-info'>
          <p>{userData.name}</p>
          <p>{userData.phone}</p>
          <p>{userData.email}</p>
        </div>
      }
    </div>
  )
}

export default UserDetail;
