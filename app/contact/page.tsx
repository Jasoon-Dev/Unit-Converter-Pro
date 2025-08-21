import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="accuracy">Conversion Accuracy</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="business">Business/Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your inquiry in detail..." rows={6} />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We'd love to hear from you! Whether you have questions, suggestions, or need help with conversions,
                  our team is here to assist.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Response Time:</strong> Within 24 hours
                  </li>
                  <li>
                    <strong>Support Hours:</strong> Monday - Friday, 9 AM - 5 PM EST
                  </li>
                  <li>
                    <strong>Languages:</strong> English
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Reporting conversion errors</li>
                  <li>• Requesting new unit categories</li>
                  <li>• Technical support</li>
                  <li>• Business partnerships</li>
                  <li>• Advertising inquiries</li>
                  <li>• Educational use permissions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Before You Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Please check our{" "}
                  <a href="/faq" className="text-blue-600 hover:underline">
                    FAQ page
                  </a>{" "}
                  first - you might find your answer there! For conversion accuracy issues, please include the specific
                  units and values you were converting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
