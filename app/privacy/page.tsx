import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Cookie, Database, Lock, Users, AlertTriangle, Mail } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="h-5 w-5" />,
      color: "bg-blue-50 border-blue-200",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Unit Converter Pro is committed to protecting your privacy. We collect minimal information to provide our
            services effectively:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">📊 Usage Analytics</h4>
              <p className="text-blue-800 text-sm">
                Anonymous usage statistics to improve our service and understand user preferences.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">🍪 Cookies & Tracking</h4>
              <p className="text-green-800 text-sm">
                Essential cookies for functionality and analytics cookies for service improvement.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">📱 Device Information</h4>
              <p className="text-purple-800 text-sm">
                Basic device and browser information for optimization and compatibility.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">🌐 IP Address</h4>
              <p className="text-orange-800 text-sm">
                For security, analytics, and providing region-appropriate content.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "information-usage",
      title: "How We Use Information",
      icon: <Eye className="h-5 w-5" />,
      color: "bg-green-50 border-green-200",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-gray-900">Service Provision</h4>
                <p className="text-gray-600 text-sm">
                  To provide and maintain our conversion services with optimal performance
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-gray-900">User Experience Enhancement</h4>
                <p className="text-gray-600 text-sm">
                  To analyze usage patterns and improve user interface and functionality
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-gray-900">Advertising Optimization</h4>
                <p className="text-gray-600 text-sm">To display relevant advertisements through Google AdSense</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium text-gray-900">Technical Support</h4>
                <p className="text-gray-600 text-sm">
                  To detect, prevent, and resolve technical issues and security threats
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-50 border-purple-200",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-red-600" />
              <h4 className="font-semibold text-red-900">Our Commitment</h4>
            </div>
            <p className="text-red-800 text-sm">
              We do NOT sell, trade, or otherwise transfer your personal information to third parties.
            </p>
          </div>
          <p className="text-gray-700">We may share information only in these specific circumstances:</p>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <span className="font-medium">With Your Consent</span>
                <p className="text-gray-600 text-sm">When you explicitly agree to information sharing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <span className="font-medium">Legal Compliance</span>
                <p className="text-gray-600 text-sm">To comply with legal obligations and court orders</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <span className="font-medium">Service Providers</span>
                <p className="text-gray-600 text-sm">With trusted partners who assist in operating our website</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold text-sm">4</span>
              </div>
              <div>
                <span className="font-medium">Advertising Partners</span>
                <p className="text-gray-600 text-sm">Anonymous data only through Google AdSense</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking",
      icon: <Cookie className="h-5 w-5" />,
      color: "bg-orange-50 border-orange-200",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">We use cookies and similar tracking technologies to enhance your experience:</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <Cookie className="h-4 w-4" />
                Essential Cookies
              </h4>
              <p className="text-green-800 text-sm mb-2">Required for basic website functionality</p>
              <Badge variant="outline" className="text-xs">
                Always Active
              </Badge>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Database className="h-4 w-4" />
                Analytics Cookies
              </h4>
              <p className="text-blue-800 text-sm mb-2">Help us understand how you use our site</p>
              <Badge variant="outline" className="text-xs">
                Optional
              </Badge>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Advertising Cookies
              </h4>
              <p className="text-purple-800 text-sm mb-2">Enable personalized advertisements</p>
              <Badge variant="outline" className="text-xs">
                Customizable
              </Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Preference Cookies
              </h4>
              <p className="text-gray-800 text-sm mb-2">Remember your settings and preferences</p>
              <Badge variant="outline" className="text-xs">
                Optional
              </Badge>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">Cookie Control</h4>
            <p className="text-yellow-800 text-sm">
              You can control cookies through your browser settings. Note that disabling certain cookies may affect site
              functionality.
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
        <div className="text-center mb-12 py-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-100">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">Your privacy is our priority</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2024</span>
            <span>•</span>
            <span>Effective: Immediately</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 bg-gradient-to-r from-gray-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-lg">Quick Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

          {/* Additional Important Sections */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-red-900">
                <AlertTriangle className="h-5 w-5" />
                Children's Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-800 mb-4">
                Our service is not directed to children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>
              <p className="text-red-700 text-sm">
                If you are a parent or guardian and believe your child has provided us with personal information, please
                contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-green-900">
                <Lock className="h-5 w-5" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Security Measures</h4>
                  <ul className="space-y-1 text-green-800 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Data minimization practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Important Note</h4>
                  <p className="text-green-800 text-sm">
                    While we implement appropriate security measures, no method of transmission over the internet is
                    100% secure. We cannot guarantee absolute security but continuously work to protect your
                    information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                <Mail className="h-5 w-5" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Privacy Questions?</h4>
                  <p className="text-blue-800 text-sm mb-4">
                    If you have questions about this privacy policy or our data practices, we're here to help.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </a>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Response Time:</span>
                    <span className="text-blue-900 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Support Hours:</span>
                    <span className="text-blue-900 font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Languages:</span>
                    <span className="text-blue-900 font-medium">English</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl border text-center">
          <p className="text-gray-600 text-sm">
            This privacy policy may be updated from time to time. We will notify you of any changes by posting the new
            policy on this page. Your continued use of our service after any modifications indicates your acceptance of
            the updated policy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
