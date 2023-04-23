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
    <div>
      { isLoading && <p>Is loading ...</p>}
      {
        userData && <>
          <p>{userData.name}</p>
          <p>{userData.phone}</p>
          <p>{userData.email}</p>
        </>
      }
    </div>
  )
}

export default UserDetail;
