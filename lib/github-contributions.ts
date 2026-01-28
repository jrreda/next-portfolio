const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql'

export type ContributionDay = {
  date: string
  count: number
}

type GithubContributionCalendarResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks: {
            contributionDays: {
              date: string
              contributionCount: number
            }[]
          }[]
        }
      }
    }
  }
  errors?: { message: string }[]
}

export async function fetchGithubContributions(
  username: string,
  token: string,
  from: Date,
  to: Date,
): Promise<ContributionDay[]> {
  if (!username || !token) {
    return []
  }

  const query = `
    query ($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  const body = JSON.stringify({
    query,
    variables: {
      login: username,
      from: from.toISOString(),
      to: to.toISOString(),
    },
  })

  try {
    const res = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body,
      // GitHub strongly prefers POST over HTTP/1.1; Next will handle keep-alive.
    })

    if (!res.ok) {
      console.error('GitHub contributions request failed', res.status, await res.text())
      return []
    }

    const json = (await res.json()) as GithubContributionCalendarResponse

    if (json.errors?.length) {
      console.error('GitHub contributions GraphQL errors', json.errors)
      return []
    }

    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? []

    const days: ContributionDay[] = []

    for (const week of weeks) {
      for (const day of week.contributionDays) {
        days.push({
          date: day.date,
          count: day.contributionCount,
        })
      }
    }

    return days
  } catch (error) {
    console.error('Error fetching GitHub contributions', error)
    return []
  }
}

