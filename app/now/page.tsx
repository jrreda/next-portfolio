import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { currentFocus } from '@/data/now'
import { Clock } from 'lucide-react';

export default function NowPage() {
  const lastUpdated = "2024-01-15";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Now</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              What I am doing{' '}
              <span className="text-gradient">right now</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Inspired by{' '}
              <a
                href="https://nownownownow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                /now
              </a>
              {' '}movement. This page is updated regularly to reflect my current focus and activities.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Last updated: {new Date(lastUpdated).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Current Focus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentFocus.map((section) => (
                <Card key={section.category}>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">{'>'}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Goals for {new Date().getFullYear()}
            </h2>
            <div className="space-y-4">
              {[
                'Launch MVP of SaaS platform',
                'Contribute to 10+ open source projects',
                'Give 5+ tech talks or conference presentations',
                'Write 20+ technical blog posts',
                'Learn a new programming language (Rust)',
                'Build a side project that reaches 1K users',
              ].map((goal, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <span>{goal}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}