import { gql } from "graphql-tag";


// ! sign means required
export const GET_ANIME_PAGE = gql`
    query GetAnimePage($page: Int!, $perPage: Int!) { 
        Page(page:$page, perPage: $perPage) {
            media {
                id
                description
                title {
                    english
                }
                coverImage {
                    extraLarge
                }
            }
        }

    }
`;