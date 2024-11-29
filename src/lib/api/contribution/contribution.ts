import { ENV_VARS, getEnv } from '../env'
import { ROUTES } from '../routes'
import { Contribution, ContributionData, ContributionResponse, mapContribution } from './contribution.mapper'

export async function getContributions(): Promise<Contribution[]> {
  try {
    const apiUrl = getEnv(ENV_VARS.API_URL)
    const route = ROUTES.CONTRIBUTIONS

    console.log('${apiUrl}${route}', `${apiUrl}${route}`)
    const res = await fetch(`${apiUrl}${route}`)
    const data = (await res.json()) as ContributionResponse

    if (data.errors.length > 0) {
      console.error('Error fetching contributions:', data.errors)
      return []
    }

    console.log('data', data)
    return data.data.map((contribution: ContributionData): Contribution => mapContribution(contribution))
  } catch (err) {
    console.error('Error fetching contributions:', err)
    return []
  }
}
