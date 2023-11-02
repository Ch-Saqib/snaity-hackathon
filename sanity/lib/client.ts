import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2023-10-28",
  dataset:"production",
  projectId:"98gpd2tu",
  token:"",
  useCdn:true,
})
  