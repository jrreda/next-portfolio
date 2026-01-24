import { PageHero } from '@/components/PageHero'
import { ContactSidebar } from '@/components/contact/LeftSide'
import { ContactFormWrapper } from '@/components/contact/RightSide'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <PageHero
        badge="Get In Touch"
        title={
          <>
            Let&apos;s{' '}
            <span className="text-gradient">work together</span>
          </>
        }
        description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together."
      />

      {/* Contact Section */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Column - Contact Methods */}
              <ContactSidebar />

              {/* Right Column - Contact Form */}
              <ContactFormWrapper />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
