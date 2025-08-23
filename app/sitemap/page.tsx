import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SitemapPage() {
  const conversionCategories = [
    // Basic Conversions
    { name: "Length Converter", href: "/#length", description: "Meters, feet, inches, miles, kilometers" },
    { name: "Weight Converter", href: "/#weight", description: "Kilograms, pounds, ounces, stones" },
    { name: "Temperature Converter", href: "/#temperature", description: "Celsius, Fahrenheit, Kelvin, Rankine" },
    { name: "Volume Converter", href: "/#volume", description: "Liters, gallons, cups, pints" },
    { name: "Area Converter", href: "/#area", description: "Square meters, acres, hectares" },
    { name: "Speed Converter", href: "/#speed", description: "MPH, km/h, knots, mach" },
    { name: "Time Converter", href: "/#time", description: "Seconds, minutes, hours, days, years" },

    // Digital & Technology
    { name: "Digital Storage Converter", href: "/#digital_storage", description: "Bytes, KB, MB, GB, TB" },
    { name: "Frequency Converter", href: "/#frequency", description: "Hertz, kilohertz, megahertz" },

    // Engineering & Physics
    { name: "Pressure Converter", href: "/#pressure", description: "Pascals, PSI, atmospheres, bars" },
    { name: "Energy Converter", href: "/#energy", description: "Joules, calories, BTU, kWh" },
    { name: "Power Converter", href: "/#power", description: "Watts, horsepower, BTU/hour" },
    { name: "Force Converter", href: "/#force", description: "Newtons, pound-force, dynes" },
    { name: "Density Converter", href: "/#density", description: "kg/m³, g/cm³, lb/ft³" },
    { name: "Acceleration Converter", href: "/#acceleration", description: "m/s², ft/s², g-force" },
    { name: "Angular Velocity Converter", href: "/#angular_velocity", description: "rad/s, RPM, degrees/s" },
    { name: "Torque Converter", href: "/#torque", description: "N⋅m, ft⋅lb, in⋅lb" },
    { name: "Flow Rate Converter", href: "/#flow_rate", description: "m³/s, L/s, GPM" },
    { name: "Viscosity Converter", href: "/#viscosity", description: "Pa⋅s, poise, centipoise" },

    // Thermal & Heat
    { name: "Heat Transfer Converter", href: "/#heat_transfer", description: "W/(m²⋅K), BTU/(hr⋅ft²⋅°F)" },
    { name: "Fuel Consumption Converter", href: "/#fuel_consumption", description: "L/100km, MPG, km/L" },

    // Electrical & Electronics
    { name: "Voltage Converter", href: "/#electrical_voltage", description: "Volts, kilovolts, millivolts" },
    { name: "Current Converter", href: "/#electrical_current", description: "Amperes, milliamperes" },
    { name: "Resistance Converter", href: "/#electrical_resistance", description: "Ohms, kiloohms, megohms" },
    { name: "Electric Charge Converter", href: "/#electric_charge", description: "Coulombs, ampere-hours" },
    { name: "Capacitance Converter", href: "/#capacitance", description: "Farads, microfarads" },
    { name: "Inductance Converter", href: "/#inductance", description: "Henrys, millihenrys" },

    // Scientific & Specialized
    { name: "Magnetism Converter", href: "/#magnetism", description: "Tesla, gauss, weber/m²" },
    { name: "Radiation Converter", href: "/#radiation", description: "Gray, rad, sievert, rem" },
    { name: "Sound Converter", href: "/#sound", description: "Decibels, bels, nepers" },
    { name: "Light Converter", href: "/#light", description: "Lumens, candelas, lux" },
    { name: "Concentration Converter", href: "/#concentration", description: "Molar, millimolar" },
    { name: "PPM Converter", href: "/#parts_per_million", description: "PPM, PPB, PPT, percent" },
    { name: "Angle Converter", href: "/#angle", description: "Degrees, radians, gradians" },

    // Financial
    { name: "Currency Converter", href: "/#currency", description: "USD, EUR, GBP, JPY, CAD" },
  ]

  const mainPages = [
    { name: "Home", href: "/", description: "Main unit converter tool" },
    { name: "What's New", href: "/whats-new", description: "Latest updates and features" },
    { name: "FAQ", href: "/faq", description: "Frequently asked questions" },
    { name: "Contact", href: "/contact", description: "Get in touch with us" },
    { name: "Feedback", href: "/feedback", description: "Share your feedback" },
    { name: "About Us", href: "/about", description: "Learn about Unit Converter Pro" },
    { name: "Privacy Policy", href: "/privacy", description: "Our privacy policy" },
    { name: "Terms of Use", href: "/terms", description: "Terms and conditions" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Site Map</h1>
          <p className="text-gray-600">Complete overview of all pages and conversion tools available</p>
        </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Main Pages */}
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-xl text-blue-700">Main Pages</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {mainPages.map((page) => (
          <div key={page.href} className="border-b border-gray-100 pb-2 last:border-b-0">
            <Link
              href={page.href}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {page.name}
            </Link>
            <p className="text-sm text-gray-600">{page.description}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>

  {/* Conversion Categories */}
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-xl text-green-700">Conversion Categories</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
        {conversionCategories.map((category) => (
          <div key={category.href} className="border-b border-gray-100 pb-2 last:border-b-0">
            <Link
              href={category.href}
              className="text-green-600 hover:text-green-800 font-medium text-sm"
            >
              {category.name}
            </Link>
            <p className="text-xs text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
</div>



        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center bg-blue-50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-700">30+</div>
              <div className="text-sm text-blue-600">Conversion Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-700">200+</div>
              <div className="text-sm text-green-600">Different Units</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-purple-50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-700">8</div>
              <div className="text-sm text-purple-600">Main Pages</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-orange-50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-700">100%</div>
              <div className="text-sm text-orange-600">Free to Use</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-xl">Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/#length"
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 font-medium">Length</div>
                <div className="text-xs text-gray-500">Most Popular</div>
              </Link>
              <Link
                href="/#weight"
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 font-medium">Weight</div>
                <div className="text-xs text-gray-500">Frequently Used</div>
              </Link>
              <Link
                href="/#temperature"
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 font-medium">Temperature</div>
                <div className="text-xs text-gray-500">Essential</div>
              </Link>
              <Link
                href="/#currency"
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-yellow-600 font-medium">Currency</div>
                <div className="text-xs text-gray-500">Live Rates</div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
