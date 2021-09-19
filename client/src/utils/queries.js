import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                description
                author
                image
                url
            }
        }
    }
`;

export const QUERY_DELETE_BOOK = gql`


`;