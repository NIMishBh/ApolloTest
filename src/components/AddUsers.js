import React from 'react'
import {useMutation} from "@apollo/client";
import {myMutation} from "../getData/Mutation";

function AddUsers() {

    /** this does not call the mutation immediately (UNLIKE `useQuery`) */
    const [InsertUser, { data }] = useMutation(myMutation);

    /** took out variables JUST to make code more readable in `onClick` */
    const variables = {
        "user":{
            Name: "Naruto",
            email: "Na@g.com"
        }
    };

    return (
        <div>
            <button
                type="submit"
                onClick={() => {
                    /** This calls the mutation with variables */
                    InsertUser({ variables });
                }}
            >Add Data</button>
        </div>
    )
}

export default AddUsers
