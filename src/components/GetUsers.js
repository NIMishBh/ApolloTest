import React, {useEffect , useState} from 'react'
import { useQuery } from '@apollo/client';
import { usersData } from '../getData/Queries';

function GetUsers() {

    const {error, loading, data} = useQuery(usersData);

    const[usersD, setUsers] = useState([]);
    
    useEffect(() => {
        if (data) {
          setUsers(data.users);
        }
      }, [data]);

      console.log(data);
    
    return (
        <div>
           {usersD.map((val)=>{
            return <h1>{val.Name}</h1>;
           })}
        </div>
    );
}

export default GetUsers
