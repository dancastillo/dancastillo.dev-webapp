const GITHUB_API_URL = 'https://api.github.com/users/dancastillo'

export async function getGitHubUserProfileUrl(): Promise<string> {
  try {
    const res = await fetch(GITHUB_API_URL)
    const data = await res.json()

    return data.avatar_url
  } catch (err) {
    console.error('Error fetching posts:', err)
    throw new Error('Error fetching GitHub profile image')
  }
}
