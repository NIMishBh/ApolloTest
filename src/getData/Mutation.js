import { gql } from "@apollo/client";

export const myMutation = gql`
mutation InsertUser($user:users_insert_input!)
{
  insert_users_one(object:$user){
    id
    Name
  }
}
`