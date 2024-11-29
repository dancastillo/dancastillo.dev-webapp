import { ENV_VARS, getEnv } from '../env'
import { ROUTES } from '../routes'
import { Contribution, ContributionData, ContributionResponse, mapContribution } from './contribution.mapper'

export async function getContributions(): Promise<Contribution[]> {
  try {
    const apiUrl = getEnv(ENV_VARS.API_URL)
    const route = ROUTES.CONTRIBUTIONS

    const response = await fetch(`${apiUrl}${route}`)
    const json = (await response.json()) as ContributionResponse

    if (json.errors.length > 0) {
      return []
    }

    return json.data.map((contribution: ContributionData): Contribution => mapContribution(contribution))
  } catch (err) {
    console.error('Error fetching contributions:', err)
    return []
  }
}
