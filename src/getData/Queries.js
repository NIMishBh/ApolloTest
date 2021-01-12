import { gql } from "@apollo/client";

export const usersData = gql`
query MyQuery {
    users {
      Name
      email
      id
      posts {
        postTitle
        postBody
        created_at
      }
    }
  }

`