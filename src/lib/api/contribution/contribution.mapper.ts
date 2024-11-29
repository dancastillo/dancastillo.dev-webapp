import { ErrorResponse } from '../common/error'

/**
 * Expected Contribution Data from API
 */
export type ContributionData = {
  createdAt: Date
  url: string
  type: string
  title: string
  repositoryUrl: string
  repositoryName: string
}

export type ContributionResponse = {
  data: ContributionData[]
  errors: ErrorResponse[]
}

export type Contribution = {
  createdAt: Date
  url: string
  type: string
  title: string
  repositoryUrl: string
  repositoryName: string
}

export function mapContribution(contribution: ContributionData): Contribution {
  return {
    createdAt: contribution.createdAt,
    url: contribution.url,
    type: contribution.type,
    title: contribution.title,
    repositoryUrl: contribution.repositoryUrl,
    repositoryName: contribution.repositoryName,
  }
}
