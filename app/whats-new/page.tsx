import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Zap, Plus } from "lucide-react"

export default function WhatsNewPage() {
  const updates = [
    {
      date: "January 2024",
      version: "v2.0",
      type: "major",
      title: "Major Expansion - 20+ New Categories",
      description:
        "We've massively expanded our converter with over 20 new conversion categories including electrical, scientific, and engineering units.",
      features: [
        "Added Electrical conversions (Voltage, Current, Resistance)",
        "New Scientific categories (Radiation, Magnetism, Sound)",
        "Engineering units (Torque, Viscosity, Flow Rate)",
        "Chemical concentrations and PPM conversions",
        "Enhanced UI with color-coded categories",
        "Improved mobile responsiveness",
      ],
      badge: "New",
    },
    {
      date: "December 2023",
      version: "v1.5",
      type: "feature",
      title: "Enhanced User Experience",
      description: "Improved design and added new features for better usability.",
      features: [
        "Redesigned sidebar navigation",
        "Added category search functionality",
        "Improved conversion accuracy",
        "Better error handling",
        "Faster loading times",
      ],
      badge: "Updated",
    },
    {
      date: "November 2023",
      version: "v1.4",
      type: "feature",
      title: "Currency Converter Integration",
      description: "Added real-time currency conversion with major world currencies.",
      features: [
        "Live exchange rates",
        "8 major currencies supported",
        "Historical rate information",
        "Auto-refresh functionality",
      ],
      badge: "Feature",
    },
    {
      date: "October 2023",
      version: "v1.3",
      type: "improvement",
      title: "Performance Optimizations",
      description: "Backend improvements for faster and more reliable conversions.",
      features: [
        "50% faster conversion calculations",
        "Improved server response times",
        "Better caching mechanisms",
        "Enhanced error recovery",
      ],
      badge: "Performance",
    },
    {
      date: "September 2023",
      version: "v1.2",
      type: "feature",
      title: "Advanced Engineering Units",
      description: "Added specialized units for engineering and scientific applications.",
      features: [
        "Pressure conversions (Pascal, PSI, Bar)",
        "Energy units (Joules, BTU, Calories)",
        "Power measurements (Watts, Horsepower)",
        "Force calculations (Newtons, Pound-force)",
      ],
      badge: "Engineering",
    },
    {
      date: "August 2023",
      version: "v1.1",
      type: "improvement",
      title: "Mobile Experience Enhancement",
      description: "Optimized the entire experience for mobile and tablet users.",
      features: [
        "Responsive design improvements",
        "Touch-friendly interface",
        "Faster mobile loading",
        "Better keyboard support",
      ],
      badge: "Mobile",
    },
  ]

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "major":
        return "bg-red-100 text-red-800"
      case "feature":
        return "bg-blue-100 text-blue-800"
      case "improvement":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "major":
        return <Star className="h-4 w-4" />
      case "feature":
        return <Plus className="h-4 w-4" />
      case "improvement":
        return <Zap className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">What's New</h1>
          <p className="text-gray-600">Stay updated with the latest features and improvements to Unit Converter Pro</p>
        </div>

        {/* Latest Update Highlight */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <Badge className="bg-red-100 text-red-800">Latest</Badge>
            </div>
            <CardTitle className="text-2xl text-blue-900">Major Update: 30+ Conversion Categories!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 mb-4">
              We've just released our biggest update ever! Unit Converter Pro now supports over 30 different conversion
              categories, making it the most comprehensive conversion tool available online.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">New Categories Include:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Electrical (Voltage, Current, Resistance)</li>
                  <li>• Scientific (Radiation, Magnetism, Sound)</li>
                  <li>• Engineering (Torque, Viscosity, Flow Rate)</li>
                  <li>• Chemical (Concentration, PPM)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Enhanced Features:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Color-coded category navigation</li>
                  <li>• Improved mobile experience</li>
                  <li>• Faster calculations</li>
                  <li>• Better accuracy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Update Timeline */}
        <div className="space-y-6">
          {updates.map((update, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getIcon(update.type)}
                    <span className="text-sm text-gray-500">{update.date}</span>
                    <Badge variant="outline">{update.version}</Badge>
                  </div>
                  <Badge className={getBadgeColor(update.type)}>{update.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{update.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{update.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {update.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-xl text-green-900 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-4">We're constantly working on new features. Here's what's coming next:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Conversion history and favorites</li>
                <li>• Batch conversion tools</li>
                <li>• API access for developers</li>
                <li>• Custom unit definitions</li>
              </ul>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Offline mode support</li>
                <li>• Advanced calculator integration</li>
                <li>• Unit comparison charts</li>
                <li>• Educational content and guides</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="mt-8 text-center bg-gray-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Want to be the first to know about new features? Follow our updates or contact us with suggestions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/feedback"
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Send Feedback
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
