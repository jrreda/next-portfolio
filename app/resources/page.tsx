import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Book, GraduationCap, FileText, Star } from 'lucide-react'
import { books, courses, articles } from '@/data/resources'

export default function ResourcesPage() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'
              }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Resources</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Useful Materials &{' '}
              <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A curated collection of books, courses, and articles that have helped me grow
              as a developer. I regularly update this list as I discover new resources.
            </p>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Book className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Books</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {book.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      by {book.author}
                    </p>
                    <div className="flex items-center justify-between">
                      {renderStars(book.rating)}
                      <Button size="sm" variant="outline" asChild>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Courses</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {course.category}
                        </Badge>
                        <h3 className="text-lg font-semibold">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {course.provider}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Badge variant="outline">{course.duration}</Badge>
                      <Button size="sm" asChild>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Start
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Articles & Blog Posts</h2>
            </div>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{article.source}</Badge>
                          <Badge variant="outline">{article.date}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          by {article.author}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Resources */}
      {/* <section className="py-12 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Want more resources?
            </h3>
            <p className="text-muted-foreground mb-6">
              I regularly share resources and learning materials on my blog and social media.
              Follow me to stay updated with the latest content.
            </p>
            <Button size="lg" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Follow on Twitter
              </a>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}