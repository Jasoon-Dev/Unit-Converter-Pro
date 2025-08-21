import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertTriangle, Globe, Mail, CheckCircle, XCircle } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "bg-green-50 border-green-200",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-green-100 rounded-lg border border-green-300">
            <p className="text-green-900 font-medium mb-2">
              By accessing and using Unit Converter Pro, you accept and agree to be bound by these terms and conditions.
            </p>
            <p className="text-green-800 text-sm">If you do not agree to these terms, please do not use our service.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">✅ What This Means</h4>
              <p className="text-blue-800 text-sm">
                These terms create a legal agreement between you and Unit Converter Pro.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">📅 Effective Date</h4>
              <p className="text-purple-800 text-sm">
                These terms are effective immediately upon your first use of our service.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "license",
      title: "Use License",
      icon: <Scale className="h-5 w-5" />,
      color: "bg-blue-50 border-blue-200",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-blue-100 rounded-lg border border-blue-300">
            <p className="text-blue-900 font-medium">
              Permission is granted to use Unit Converter Pro for personal, educational, and commercial purposes under
              the following conditions:
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                You MAY:
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-800 text-sm">Use the service for personal conversions</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-800 text-sm">Use for educational purposes</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-800 text-sm">Use for commercial projects</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-800 text-sm">Share conversion results</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-red-900 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" />
                You MAY NOT:
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-800 text-sm">Copy or redistribute our code</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-800 text-sm">Reverse engineer our software</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-800 text-sm">Remove copyright notices</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-800 text-sm">Create competing services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "accuracy",
      title: "Accuracy of Conversions",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-yellow-50 border-yellow-200",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-300">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Important Disclaimer</h4>
                <p className="text-yellow-800 text-sm">
                  While we strive for accuracy in all conversions, Unit Converter Pro does not warrant that conversion
                  results are 100% accurate, reliable, or error-free.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Our Commitment</h4>
              <ul className="space-y-1 text-blue-800 text-sm">
                <li>• Based on internationally recognized standards</li>
                <li>• Regular updates to conversion factors</li>
                <li>• Up to 6 decimal places precision</li>
                <li>• Continuous improvement and testing</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Your Responsibility</h4>
              <ul className="space-y-1 text-orange-800 text-sm">
                <li>• Verify critical conversions independently</li>
                <li>• Use appropriate precision for your needs</li>
                <li>• Report any errors you discover</li>
                <li>• Consider context and rounding</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">Liability Limitation</h4>
            <p className="text-red-800 text-sm">
              We are not liable for any errors, omissions, or consequences arising from the use of conversion results.
              Users should verify critical conversions through additional sources.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 py-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-xl border border-purple-100">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Use</h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">Legal terms and conditions for using our service</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2024</span>
            <span>•</span>
            <span>Version 2.0</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 bg-gradient-to-r from-gray-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-lg">Document Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm"
                >
                  {section.icon}
                  <span className="font-medium">{section.title}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section) => (
            <Card key={section.id} id={section.id} className={section.color}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{section.content}</CardContent>
            </Card>
          ))}

          {/* Additional Sections */}
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Globe className="h-5 w-5" />
                Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Global Access</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Unit Converter Pro is available worldwide, 24/7. However, we reserve the right to:
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Perform scheduled maintenance</li>
                    <li>• Make emergency updates</li>
                    <li>• Restrict access in certain regions if required by law</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Modifications</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    We may modify, suspend, or discontinue any part of our service at any time with or without notice.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">No Guaranteed Uptime</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-red-900">
                <AlertTriangle className="h-5 w-5" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-100 rounded-lg border border-red-300">
                  <h4 className="font-semibold text-red-900 mb-2">Important Legal Notice</h4>
                  <p className="text-red-800 text-sm">
                    In no event shall Unit Converter Pro or its suppliers be liable for any damages arising out of the
                    use or inability to use our service.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Excluded Damages</h4>
                    <ul className="space-y-1 text-red-800 text-sm">
                      <li>• Loss of data or profits</li>
                      <li>• Business interruption</li>
                      <li>• Consequential damages</li>
                      <li>• Indirect or punitive damages</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Maximum Liability</h4>
                    <p className="text-red-800 text-sm">
                      Our total liability to you for all claims shall not exceed the amount you paid us (if any) in the
                      12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                <Scale className="h-5 w-5" />
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Jurisdiction</h4>
                  <p className="text-blue-800 text-sm mb-4">
                    These terms and conditions are governed by and construed in accordance with applicable laws. Any
                    disputes will be resolved in the appropriate courts.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">International Service</Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Dispute Resolution</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-800">First: Direct communication</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-800">Then: Mediation if needed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-800">Finally: Legal proceedings</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Questions About These Terms?</h4>
                  <p className="text-green-800 text-sm mb-4">
                    If you have any questions about these Terms of Use, please don't hesitate to contact us.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Legal Team
                  </a>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700">Response Time:</span>
                    <span className="text-green-900 font-medium">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Business Hours:</span>
                    <span className="text-green-900 font-medium">Mon-Fri, 9 AM - 5 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Legal Inquiries:</span>
                    <span className="text-green-900 font-medium">Priority Support</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Terms Updates</h3>
          <p className="text-gray-600 text-sm">
            Unit Converter Pro may revise these terms of service at any time without notice. By using this website, you
            are agreeing to be bound by the then current version of these terms of service.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
