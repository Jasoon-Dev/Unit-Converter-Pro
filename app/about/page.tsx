import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">About Unit Converter Pro</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>Our Mission</h2>
            <p>
              Unit Converter Pro is dedicated to providing the most accurate, comprehensive, and user-friendly unit
              conversion tools available on the web. We understand that precise conversions are essential for
              professionals, students, and everyday users alike.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Comprehensive Coverage:</strong> Over 12 categories with hundreds of units
              </li>
              <li>
                <strong>High Precision:</strong> Accurate calculations up to 6 decimal places
              </li>
              <li>
                <strong>Real-time Conversion:</strong> Instant results as you type
              </li>
              <li>
                <strong>Mobile Friendly:</strong> Responsive design for all devices
              </li>
              <li>
                <strong>Free to Use:</strong> No registration or fees required
              </li>
            </ul>

            <h2>Our Categories</h2>
            <p>We cover essential conversion categories including:</p>
            <ul>
              <li>Length/Distance - meters, feet, miles, and more</li>
              <li>Weight/Mass - kilograms, pounds, ounces, and more</li>
              <li>Temperature - Celsius, Fahrenheit, Kelvin, Rankine</li>
              <li>Volume - liters, gallons, cups, and more</li>
              <li>Area - square meters, acres, hectares, and more</li>
              <li>Speed - mph, km/h, knots, and more</li>
              <li>Time - seconds to years and everything in between</li>
              <li>Digital Storage - bytes to petabytes</li>
              <li>Pressure - pascals, PSI, atmospheres, and more</li>
              <li>Energy - joules, calories, BTU, and more</li>
              <li>Power - watts, horsepower, and more</li>
              <li>Force - newtons, pound-force, and more</li>
            </ul>

            <h2>Accuracy & Reliability</h2>
            <p>
              All our conversion factors are based on internationally recognized standards and are regularly updated to
              ensure accuracy. We use precise mathematical formulas and handle edge cases to provide reliable results
              for professional use.
            </p>

            <h2>Contact Us</h2>
            <p>
              Have questions or suggestions? We'd love to hear from you. Visit our{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact page
              </a>{" "}
              to get in touch.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
