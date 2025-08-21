"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, ThumbsUp, MessageSquare, Lightbulb } from "lucide-react"

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would typically send the feedback to your backend
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-16 text-center">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8">
              <div className="text-green-600 mb-4">
                <ThumbsUp className="h-16 w-16 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-green-900 mb-4">Thank You for Your Feedback!</h1>
              <p className="text-green-800 mb-6">
                We really appreciate you taking the time to share your thoughts with us. Your feedback helps us make
                Unit Converter Pro better for everyone.
              </p>
              <div className="space-y-4">
                <Button onClick={() => setSubmitted(false)} className="mr-4">
                  Submit Another Feedback
                </Button>
                <Button variant="outline" asChild>
                  <a href="/">Back to Converter</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">We Value Your Feedback</h1>
          <p className="text-gray-600">Help us improve Unit Converter Pro by sharing your experience and suggestions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feedback Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Share Your Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name (Optional)</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  {/* Overall Rating */}
                  <div>
                    <Label className="text-base font-medium">Overall Rating</Label>
                    <div className="flex items-center gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {rating > 0 && (
                          <>
                            {rating} star{rating !== 1 ? "s" : ""} -{rating === 5 && " Excellent!"}
                            {rating === 4 && " Very Good"}
                            {rating === 3 && " Good"}
                            {rating === 2 && " Fair"}
                            {rating === 1 && " Needs Improvement"}
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Feedback Type */}
                  <div>
                    <Label className="text-base font-medium">Feedback Type</Label>
                    <RadioGroup defaultValue="general" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Feedback</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bug" id="bug" />
                        <Label htmlFor="bug">Bug Report</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="feature" id="feature" />
                        <Label htmlFor="feature">Feature Request</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="improvement" id="improvement" />
                        <Label htmlFor="improvement">Improvement Suggestion</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Category Used */}
                  <div>
                    <Label htmlFor="category">Which conversion category did you use?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="length">Length</SelectItem>
                        <SelectItem value="weight">Weight</SelectItem>
                        <SelectItem value="temperature">Temperature</SelectItem>
                        <SelectItem value="volume">Volume</SelectItem>
                        <SelectItem value="area">Area</SelectItem>
                        <SelectItem value="speed">Speed</SelectItem>
                        <SelectItem value="time">Time</SelectItem>
                        <SelectItem value="digital_storage">Digital Storage</SelectItem>
                        <SelectItem value="pressure">Pressure</SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="currency">Currency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Main Feedback */}
                  <div>
                    <Label htmlFor="feedback">Your Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Please share your thoughts, suggestions, or report any issues you encountered..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  {/* What did you like */}
                  <div>
                    <Label htmlFor="liked">What did you like most?</Label>
                    <Textarea id="liked" placeholder="Tell us what worked well for you..." rows={3} className="mt-2" />
                  </div>

                  {/* What could be improved */}
                  <div>
                    <Label htmlFor="improve">What could we improve?</Label>
                    <Textarea
                      id="improve"
                      placeholder="Any suggestions for making our converter better..."
                      rows={3}
                      className="mt-2"
                    />
                  </div>

                  {/* Usage Frequency */}
                  <div>
                    <Label className="text-base font-medium">How often do you use unit converters?</Label>
                    <RadioGroup className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="daily" id="daily" />
                        <Label htmlFor="daily">Daily</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly">Weekly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="rarely" id="rarely" />
                        <Label htmlFor="rarely">Rarely</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm">
                        I'd like to receive updates about new features
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contact" />
                      <Label htmlFor="contact" className="text-sm">
                        It's okay to contact me about this feedback
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Feedback */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Quick Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-sm mb-4">
                  Have a quick suggestion? Use these buttons for instant feedback:
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    👍 Love the new design
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    🚀 Add more categories
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    📱 Improve mobile version
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    ⚡ Make it faster
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feature Requests */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Popular Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Conversion History</span>
                    <span className="text-green-600 text-xs">47 votes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Favorites System</span>
                    <span className="text-green-600 text-xs">32 votes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Dark Mode</span>
                    <span className="text-green-600 text-xs">28 votes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Batch Conversion</span>
                    <span className="text-green-600 text-xs">21 votes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="/contact" className="text-blue-600 hover:underline">
                    Contact Form
                  </a>
                </p>
                <p>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
                <p>
                  <strong>Privacy:</strong> We never share your feedback publicly without permission
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
