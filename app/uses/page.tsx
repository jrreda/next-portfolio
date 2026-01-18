import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { categories, workstation } from '@/data/uses'

export default function UsesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Uses</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Software & Hardware I{' '}
              <span className="text-gradient">use</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              This page lists the tools, software, and hardware I use for development,
              design, and daily work. Inspired by many other developers who share their stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Workstation */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Workstation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>💻 Primary Machine</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">
                    {workstation.laptop.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {workstation.laptop.specs}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>🖥️ Monitor</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">
                    {workstation.monitor.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {workstation.monitor.specs}
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>⌨️ Peripherals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {workstation.peripherals.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Software Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <Card key={category.title}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, index) => (
                        <li key={index} className="border-b last:border-0 pb-2 last:pb-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                            {item.essential && (
                              <Badge className="shrink-0">Essential</Badge>
                            )}
                          </div>
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

      {/* Disclaimer */}
      <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              This list is updated as I discover and adopt new tools. Some links
              are affiliate links. All opinions are my own.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}