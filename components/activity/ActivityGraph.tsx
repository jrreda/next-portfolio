'use client'

import { useEffect, useMemo, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type ActivityDay = {
  date: string
  github: number
  gitlab: number
  total: number
}

type Mode = 'total' | 'github' | 'gitlab'

type ActivityGraphProps = {
  className?: string
  title?: string
  description?: string
}

type ApiResponse =
  | {
      days: ActivityDay[]
      error?: undefined
    }
  | {
      days: ActivityDay[]
      error: string
    }

type WeekColumn = {
  weekIndex: number
  days: (ActivityDay | null)[]
}

const WEEK_DAYS = 7

function buildCalendar(days: ActivityDay[]): WeekColumn[] {
  if (days.length === 0) return []

  // Ensure data is sorted by date ascending
  const sorted = [...days].sort((a, b) => (a.date < b.date ? -1 : 1))

  const firstDate = new Date(sorted[0].date + 'T00:00:00')
  const offset = firstDate.getDay() // 0 = Sunday

  const calendarDays: (ActivityDay | null)[] = []

  for (let i = 0; i < offset; i++) {
    calendarDays.push(null)
  }

  for (const day of sorted) {
    calendarDays.push(day)
  }

  const weeks: WeekColumn[] = []
  const totalWeeks = Math.ceil(calendarDays.length / WEEK_DAYS)

  for (let w = 0; w < totalWeeks; w++) {
    const start = w * WEEK_DAYS
    const slice = calendarDays.slice(start, start + WEEK_DAYS)
    weeks.push({
      weekIndex: w,
      days: slice,
    })
  }

  return weeks
}

function getIntensity(day: ActivityDay | null, mode: Mode, max: number): number {
  if (!day || max === 0) return 0
  const value =
    mode === 'github' ? day.github : mode === 'gitlab' ? day.gitlab : day.total
  if (value <= 0) return 0
  return Math.min(1, value / max)
}

function getColorClass(intensity: number): string {
  if (intensity === 0) return 'bg-muted'
  if (intensity < 0.25) return 'bg-emerald-200/60 dark:bg-emerald-900/50'
  if (intensity < 0.5) return 'bg-emerald-300/70 dark:bg-emerald-800/70'
  if (intensity < 0.75) return 'bg-emerald-400/80 dark:bg-emerald-700/80'
  return 'bg-emerald-500 dark:bg-emerald-600'
}

export function ActivityGraph({
  className,
  title = 'Open Source Activity',
  description = 'Aggregated GitHub and GitLab contributions over the last year.',
}: ActivityGraphProps) {
  const [data, setData] = useState<ActivityDay[] | null>(null)
  const [mode, setMode] = useState<Mode>('total')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      try {
        const res = await fetch('/api/activity')
        const json = (await res.json()) as ApiResponse
        if (!cancelled) {
          if (!res.ok || json.error) {
            setError(json.error ?? 'Failed to load activity data.')
            setData(json.days ?? [])
          } else {
            setData(json.days)
            setError(null)
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError('Failed to load activity data.')
          setData([])
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }
    void load()
    return () => {
      cancelled = true
    }
  }, [])

  const { weeks, maxTotal, maxGithub, maxGitlab } = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        weeks: [] as WeekColumn[],
        maxTotal: 0,
        maxGithub: 0,
        maxGitlab: 0,
      }
    }
    const weeks = buildCalendar(data)
    let maxTotal = 0
    let maxGithub = 0
    let maxGitlab = 0
    for (const day of data) {
      if (day.total > maxTotal) maxTotal = day.total
      if (day.github > maxGithub) maxGithub = day.github
      if (day.gitlab > maxGitlab) maxGitlab = day.gitlab
    }
    return { weeks, maxTotal, maxGithub, maxGitlab }
  }, [data])

  const maxForMode = mode === 'github' ? maxGithub : mode === 'gitlab' ? maxGitlab : maxTotal

  return (
    <Card
      className={cn(
        'border border-primary/10 bg-linear-to-br from-background via-background/80 to-primary/5',
        className,
      )}
    >
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="inline-flex items-center rounded-full bg-muted/60 p-1 text-xs">
          <button
            type="button"
            className={cn(
              'px-3 py-1 rounded-full transition text-xs',
              mode === 'total'
                ? 'bg-background shadow-sm font-medium'
                : 'text-muted-foreground',
            )}
            onClick={() => setMode('total')}
          >
            All
          </button>
          <button
            type="button"
            className={cn(
              'px-3 py-1 rounded-full transition text-xs',
              mode === 'github'
                ? 'bg-background shadow-sm font-medium'
                : 'text-muted-foreground',
            )}
            onClick={() => setMode('github')}
          >
            GitHub
          </button>
          <button
            type="button"
            className={cn(
              'px-3 py-1 rounded-full transition text-xs',
              mode === 'gitlab'
                ? 'bg-background shadow-sm font-medium'
                : 'text-muted-foreground',
            )}
            onClick={() => setMode('gitlab')}
          >
            GitLab
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && (
          <div className="flex h-28 items-center justify-center text-xs text-muted-foreground">
            Loading activity…
          </div>
        )}
        {!loading && error && (
          <div className="flex h-28 items-center justify-center text-xs text-muted-foreground">
            {error}
          </div>
        )}
        {!loading && !error && (!weeks || weeks.length === 0) && (
          <div className="flex h-28 items-center justify-center text-xs text-muted-foreground">
            No activity data available.
          </div>
        )}
        {!loading && weeks && weeks.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 text-[10px] text-muted-foreground">
              <div className="flex flex-col items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-muted" />
                <span>0</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-emerald-200/60 dark:bg-emerald-900/50" />
                <span>1–low</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-emerald-300/70 dark:bg-emerald-800/70" />
                <span>medium</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-emerald-400/80 dark:bg-emerald-700/80" />
                <span>high</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-emerald-500 dark:bg-emerald-600" />
                <span>very high</span>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <div className="flex gap-[3px]">
                {weeks.map((week) => (
                  <div key={week.weekIndex} className="flex flex-col gap-[3px]">
                    {week.days.map((day, idx) => {
                      const intensity = getIntensity(day, mode, maxForMode)
                      const color = getColorClass(intensity)
                      const labelDay = day
                        ? new Date(day.date + 'T00:00:00').toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })
                        : ''
                      const value =
                        mode === 'github'
                          ? day?.github ?? 0
                          : mode === 'gitlab'
                          ? day?.gitlab ?? 0
                          : day?.total ?? 0
                      const tooltip = day
                        ? `${labelDay} — ${value} contribution${value === 1 ? '' : 's'}${
                            mode === 'total'
                              ? ` (GitHub: ${day.github}, GitLab: ${day.gitlab})`
                              : ''
                          }`
                        : ''
                      return (
                        <div
                          key={idx}
                          className={cn(
                            'h-3 w-3 rounded-sm transition-colors duration-150',
                            color,
                          )}
                          title={tooltip}
                          aria-label={tooltip}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Last 12 months of contributions across GitHub and GitLab.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

