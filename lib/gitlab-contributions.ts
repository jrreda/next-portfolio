export type ContributionDay = {
  date: string
  count: number
}

// GitLab exposes a semi-public calendar JSON used by the profile page.
// Example: https://gitlab.com/users/<username>/calendar.json
// It returns an object where keys are ISO date strings and values are counts.

export async function fetchGitlabContributions(username: string): Promise<ContributionDay[]> {
  if (!username) {
    return []
  }

  const url = `https://gitlab.com/users/${encodeURIComponent(username)}/calendar.json`

  try {
    const res = await fetch(url, {
      // Use GET; no auth needed for public profiles.
      method: 'GET',
    })

    if (!res.ok) {
      console.error('GitLab contributions request failed', res.status, await res.text())
      return []
    }

    const json = (await res.json()) as Record<string, number>

    return Object.entries(json).map(([date, count]) => ({
      date,
      count,
    }))
  } catch (error) {
    console.error('Error fetching GitLab contributions', error)
    return []
  }
}

