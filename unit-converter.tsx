"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ruler, Scale, Thermometer, Beaker } from "lucide-react"

// Conversion factors to base units
const conversions = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    inch: 39.3701,
    foot: 3.28084,
    yard: 1.09361,
    mile: 0.000621371,
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    pound: 2.20462,
    ounce: 35.274,
    stone: 0.157473,
    ton: 0.001,
  },
  temperature: {
    celsius: (c: number) => c,
    fahrenheit: (c: number) => (c * 9) / 5 + 32,
    kelvin: (c: number) => c + 273.15,
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    gallon: 0.264172,
    quart: 1.05669,
    pint: 2.11338,
    cup: 4.22675,
    fluid_ounce: 33.814,
  },
}

const unitLabels = {
  length: {
    meter: "Meters",
    kilometer: "Kilometers",
    centimeter: "Centimeters",
    millimeter: "Millimeters",
    inch: "Inches",
    foot: "Feet",
    yard: "Yards",
    mile: "Miles",
  },
  weight: {
    kilogram: "Kilograms",
    gram: "Grams",
    pound: "Pounds",
    ounce: "Ounces",
    stone: "Stones",
    ton: "Tons",
  },
  temperature: {
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    kelvin: "Kelvin (K)",
  },
  volume: {
    liter: "Liters",
    milliliter: "Milliliters",
    gallon: "Gallons",
    quart: "Quarts",
    pint: "Pints",
    cup: "Cups",
    fluid_ounce: "Fluid Ounces",
  },
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("length")
  const [values, setValues] = useState({
    length: { from: "", to: "", fromUnit: "meter", toUnit: "foot" },
    weight: { from: "", to: "", fromUnit: "kilogram", toUnit: "pound" },
    temperature: { from: "", to: "", fromUnit: "celsius", toUnit: "fahrenheit" },
    volume: { from: "", to: "", fromUnit: "liter", toUnit: "gallon" },
  })

  const convertValue = (value: string, category: string, fromUnit: string, toUnit: string) => {
    if (!value || isNaN(Number.parseFloat(value))) return ""

    const numValue = Number.parseFloat(value)

    if (category === "temperature") {
      // Temperature conversion requires special handling
      let celsius = numValue
      if (fromUnit === "fahrenheit") {
        celsius = ((numValue - 32) * 5) / 9
      } else if (fromUnit === "kelvin") {
        celsius = numValue - 273.15
      }

      const converter = conversions.temperature[toUnit as keyof typeof conversions.temperature]
      return converter(celsius)
        .toFixed(6)
        .replace(/\.?0+$/, "")
    } else {
      // Standard conversion through base unit
      const categoryConversions = conversions[category as keyof typeof conversions] as Record<string, number>
      const baseValue = numValue / categoryConversions[fromUnit]
      const convertedValue = baseValue * categoryConversions[toUnit]
      return convertedValue.toFixed(6).replace(/\.?0+$/, "")
    }
  }

  const handleFromChange = (category: string, value: string) => {
    const categoryValues = values[category as keyof typeof values]
    const convertedTo = convertValue(value, category, categoryValues.fromUnit, categoryValues.toUnit)

    setValues((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        from: value,
        to: convertedTo,
      },
    }))
  }

  const handleToChange = (category: string, value: string) => {
    const categoryValues = values[category as keyof typeof values]
    const convertedFrom = convertValue(value, category, categoryValues.toUnit, categoryValues.fromUnit)

    setValues((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        to: value,
        from: convertedFrom,
      },
    }))
  }

  const handleUnitChange = (category: string, type: "fromUnit" | "toUnit", unit: string) => {
    const categoryValues = values[category as keyof typeof values]
    const newValues = { ...categoryValues, [type]: unit }

    if (categoryValues.from) {
      const convertedTo = convertValue(categoryValues.from, category, newValues.fromUnit, newValues.toUnit)
      newValues.to = convertedTo
    }

    setValues((prev) => ({
      ...prev,
      [category]: newValues,
    }))
  }

  const renderConverter = (category: string, icon: React.ReactNode, title: string, description: string) => {
    const categoryValues = values[category as keyof typeof values]
    const categoryLabels = unitLabels[category as keyof typeof unitLabels]

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${category}-from`}>From</Label>
              <Select
                value={categoryValues.fromUnit}
                onValueChange={(value) => handleUnitChange(category, "fromUnit", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id={`${category}-from`}
                type="number"
                placeholder="Enter value"
                value={categoryValues.from}
                onChange={(e) => handleFromChange(category, e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${category}-to`}>To</Label>
              <Select
                value={categoryValues.toUnit}
                onValueChange={(value) => handleUnitChange(category, "toUnit", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id={`${category}-to`}
                type="number"
                placeholder="Converted value"
                value={categoryValues.to}
                onChange={(e) => handleToChange(category, e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Unit Converter</h1>
        <p className="text-muted-foreground">Convert between different units of measurement</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="length" className="flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            Length
          </TabsTrigger>
          <TabsTrigger value="weight" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            Weight
          </TabsTrigger>
          <TabsTrigger value="temperature" className="flex items-center gap-2">
            <Thermometer className="h-4 w-4" />
            Temperature
          </TabsTrigger>
          <TabsTrigger value="volume" className="flex items-center gap-2">
            <Beaker className="h-4 w-4" />
            Volume
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="length">
            {renderConverter(
              "length",
              <Ruler className="h-5 w-5" />,
              "Length Converter",
              "Convert between meters, feet, inches, and more",
            )}
          </TabsContent>

          <TabsContent value="weight">
            {renderConverter(
              "weight",
              <Scale className="h-5 w-5" />,
              "Weight Converter",
              "Convert between kilograms, pounds, ounces, and more",
            )}
          </TabsContent>

          <TabsContent value="temperature">
            {renderConverter(
              "temperature",
              <Thermometer className="h-5 w-5" />,
              "Temperature Converter",
              "Convert between Celsius, Fahrenheit, and Kelvin",
            )}
          </TabsContent>

          <TabsContent value="volume">
            {renderConverter(
              "volume",
              <Beaker className="h-5 w-5" />,
              "Volume Converter",
              "Convert between liters, gallons, cups, and more",
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
