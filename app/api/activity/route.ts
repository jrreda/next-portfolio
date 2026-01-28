import { NextRequest, NextResponse } from 'next/server'
import { fetchGithubContributions } from '@/lib/github-contributions'
import { fetchGitlabContributions } from '@/lib/gitlab-contributions'

type ActivityDay = {
  date: string
  github: number
  gitlab: number
  total: number
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000
const DAYS_BACK = 365

function getDateRange() {
  const to = new Date()
  // Align to end-of-day-ish to avoid timezone off-by-one issues
  to.setHours(23, 59, 59, 999)
  const from = new Date(to.getTime() - DAYS_BACK * ONE_DAY_MS)
  return { from, to }
}

export async function GET(_req: NextRequest) {
  const githubUsername = process.env.GITHUB_USERNAME
  const gitlabUsername = process.env.GITLAB_USERNAME
  const githubToken = process.env.GITHUB_TOKEN

  if (!githubUsername && !gitlabUsername) {
    return NextResponse.json(
      {
        error: 'Activity data not configured. Set GITHUB_USERNAME and/or GITLAB_USERNAME in your environment.',
        days: [] as ActivityDay[],
      },
      { status: 500 },
    )
  }

  const { from, to } = getDateRange()

  try {
    const [githubDays, gitlabDays] = await Promise.all([
      githubUsername && githubToken
        ? fetchGithubContributions(githubUsername, githubToken, from, to)
        : Promise.resolve([]),
      gitlabUsername ? fetchGitlabContributions(gitlabUsername) : Promise.resolve([]),
    ])
    console.log('githubDays', githubDays)
    console.log('gitlabDays', gitlabDays)

    const map = new Map<string, ActivityDay>()

    const upsert = (date: string, source: 'github' | 'gitlab', count: number) => {
      if (!date) return
      const existing = map.get(date) ?? { date, github: 0, gitlab: 0, total: 0 }
      const updated: ActivityDay = {
        ...existing,
        [source]: existing[source] + count,
      }
      updated.total = updated.github + updated.gitlab
      map.set(date, updated)
    }

    for (const day of githubDays) {
      upsert(day.date, 'github', day.count)
    }

    for (const day of gitlabDays) {
      upsert(day.date, 'gitlab', day.count)
    }

    // Ensure we have an entry for every day in the range, even if zero
    for (
      let d = new Date(from.getTime());
      d <= to;
      d = new Date(d.getTime() + ONE_DAY_MS)
    ) {
      const iso = d.toISOString().slice(0, 10)
      if (!map.has(iso)) {
        map.set(iso, { date: iso, github: 0, gitlab: 0, total: 0 })
      }
    }

    const days = Array.from(map.values()).sort((a, b) => (a.date < b.date ? -1 : 1))

    const res = NextResponse.json(
      {
        days,
      },
      {
        status: 200,
      },
    )

    // Cache for 6 hours at the edge, but allow revalidation
    res.headers.set(
      'Cache-Control',
      'public, s-maxage=21600, stale-while-revalidate=86400',
    )

    return res
  } catch (error) {
    console.error('Error building activity data', error)
    return NextResponse.json(
      {
        error: 'Failed to load activity data',
        days: [] as ActivityDay[],
      },
      { status: 500 },
    )
  }
}

