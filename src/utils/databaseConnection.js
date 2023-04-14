import database from "../../tina/database"
import {resolve} from "@tinacms/datalayer"

const generateRequester = client => {
  return async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars
    })

    return {data: data?.data, query: doc, variables: vars || {}}
  }
}


const queries = (client) => {
  const requester = generateRequester(client)
  return getSdk(requester)
}

export async function databaseRequest({ query, variables }) {
  const config = {
    useRelativeMedia: true,
  }

  const result = await resolve({
    config,
    database,
    query,
    variables,
    verbose: true,
  })

  return result
}

export function getDatabaseConnection({queries}) {
  const request = async ({ query, variables }) => {
    const data = await databaseRequest({ query, variables })
    return { data: data.data, query, variables, errors: data.errors }
  }

  const q = queries({
    request,
  })

  return { queries: q, request }
}

export const dbConnection = getDatabaseConnection({ queries })
