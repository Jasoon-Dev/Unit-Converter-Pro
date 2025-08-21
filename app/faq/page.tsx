import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How accurate are the conversions?</AccordionTrigger>
                <AccordionContent>
                  Our conversions are based on internationally recognized standards and provide accuracy up to 6 decimal
                  places. All conversion factors are regularly updated to ensure precision for professional use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Is Unit Converter Pro free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, Unit Converter Pro is completely free to use. We support the service through advertising, which
                  allows us to provide all conversion tools at no cost to users.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
                <AccordionContent>
                  No account creation is required. You can use all conversion tools immediately without any registration
                  or sign-up process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I use this on mobile devices?</AccordionTrigger>
                <AccordionContent>
                  Unit Converter Pro is fully responsive and optimized for mobile devices, tablets, and desktop
                  computers. The interface adapts to your screen size for the best user experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What conversion categories are available?</AccordionTrigger>
                <AccordionContent>
                  We offer 12+ categories including Length, Weight, Temperature, Volume, Area, Speed, Time, Digital
                  Storage, Pressure, Energy, Power, and Force. Each category contains multiple units for comprehensive
                  conversion needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do I convert between units?</AccordionTrigger>
                <AccordionContent>
                  Simply select your category, choose the units you want to convert from and to, then enter a value in
                  either field. The conversion happens automatically in real-time as you type.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Can I suggest new units or categories?</AccordionTrigger>
                <AccordionContent>
                  Yes! We welcome suggestions for new units or conversion categories. Please use our contact form to
                  submit your ideas, and we'll consider them for future updates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Is my data stored or tracked?</AccordionTrigger>
                <AccordionContent>
                  We don't store your conversion data. We only collect anonymous usage statistics to improve our
                  service. Please see our Privacy Policy for complete details about data handling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>Why do I see advertisements?</AccordionTrigger>
                <AccordionContent>
                  Advertisements help us keep Unit Converter Pro free for all users. We use Google AdSense to display
                  relevant, non-intrusive ads that support the ongoing development and maintenance of the service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>What if I find an error in a conversion?</AccordionTrigger>
                <AccordionContent>
                  If you believe you've found an error, please contact us immediately through our contact form. Include
                  the specific conversion, values used, and expected result. We take accuracy seriously and will
                  investigate promptly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
