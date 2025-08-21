"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Ruler,
  Scale,
  Thermometer,
  Beaker,
  Square,
  Zap,
  Clock,
  HardDrive,
  Gauge,
  Battery,
  Target,
  Lightbulb,
  Search,
  X,
} from "lucide-react"

// Comprehensive conversion factors and functions
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
    nautical_mile: 0.000539957,
    light_year: 1.057e-16,
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    pound: 2.20462,
    ounce: 35.274,
    stone: 0.157473,
    ton: 0.001,
    carat: 5000,
    grain: 15432.4,
  },
  temperature: {
    celsius: (c: number) => c,
    fahrenheit: (c: number) => (c * 9) / 5 + 32,
    kelvin: (c: number) => c + 273.15,
    rankine: (c: number) => ((c + 273.15) * 9) / 5,
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    gallon: 0.264172,
    quart: 1.05669,
    pint: 2.11338,
    cup: 4.22675,
    fluid_ounce: 33.814,
    tablespoon: 67.628,
    teaspoon: 202.884,
    barrel: 0.00628981,
  },
  area: {
    square_meter: 1,
    square_kilometer: 0.000001,
    square_centimeter: 10000,
    square_inch: 1550,
    square_foot: 10.7639,
    square_yard: 1.19599,
    acre: 0.000247105,
    hectare: 0.0001,
    square_mile: 3.861e-7,
  },
  speed: {
    meter_per_second: 1,
    kilometer_per_hour: 3.6,
    mile_per_hour: 2.23694,
    foot_per_second: 3.28084,
    knot: 1.94384,
    mach: 0.00291545,
  },
  time: {
    second: 1,
    minute: 1 / 60,
    hour: 1 / 3600,
    day: 1 / 86400,
    week: 1 / 604800,
    month: 1 / 2629746,
    year: 1 / 31556952,
    decade: 1 / 315569520,
  },
  digital_storage: {
    byte: 1,
    kilobyte: 0.001,
    megabyte: 0.000001,
    gigabyte: 1e-9,
    terabyte: 1e-12,
    petabyte: 1e-15,
    bit: 8,
    kibibyte: 1 / 1024,
  },
  pressure: {
    pascal: 1,
    kilopascal: 0.001,
    bar: 0.00001,
    atmosphere: 9.8692e-6,
    psi: 0.000145038,
    torr: 0.00750062,
    mmhg: 0.00750062,
  },
  energy: {
    joule: 1,
    kilojoule: 0.001,
    calorie: 0.239006,
    kilocalorie: 0.000239006,
    watt_hour: 0.000277778,
    kilowatt_hour: 2.7778e-7,
    btu: 0.000947817,
  },
  power: {
    watt: 1,
    kilowatt: 0.001,
    horsepower: 0.00134102,
    btu_per_hour: 3.41214,
    calorie_per_second: 0.239006,
    foot_pound_per_second: 0.737562,
  },
  force: {
    newton: 1,
    kilonewton: 0.001,
    pound_force: 0.224809,
    kilogram_force: 0.101972,
    dyne: 100000,
    poundal: 7.23301,
  },
  currency: {
    usd: 1,
    eur: 0.85,
    gbp: 0.73,
    jpy: 110,
    cad: 1.25,
    aud: 1.35,
    chf: 0.92,
    cny: 6.45,
  },
  density: {
    kg_per_cubic_meter: 1,
    g_per_cubic_cm: 0.001,
    lb_per_cubic_foot: 0.0624279,
    lb_per_cubic_inch: 3.6127e-5,
    g_per_liter: 1,
    oz_per_cubic_inch: 0.000578704,
  },
  acceleration: {
    meter_per_second_squared: 1,
    foot_per_second_squared: 3.28084,
    g_force: 0.101972,
    galileo: 100,
    inch_per_second_squared: 39.3701,
  },
  angular_velocity: {
    radian_per_second: 1,
    degree_per_second: 57.2958,
    revolution_per_minute: 9.5493,
    revolution_per_second: 0.159155,
  },
  torque: {
    newton_meter: 1,
    foot_pound: 0.737562,
    inch_pound: 8.85075,
    kilogram_meter: 0.101972,
    dyne_centimeter: 10000000,
  },
  heat_transfer: {
    watt_per_square_meter_kelvin: 1,
    btu_per_hour_square_foot_fahrenheit: 0.17611,
    calorie_per_second_square_cm_celsius: 0.0001,
  },
  fuel_consumption: {
    liter_per_100km: 1,
    mile_per_gallon_us: 235.215,
    mile_per_gallon_uk: 282.481,
    km_per_liter: 100,
    gallon_per_100_miles: 0.425144,
  },
  electrical_voltage: {
    volt: 1,
    kilovolt: 0.001,
    millivolt: 1000,
    microvolt: 1000000,
    megavolt: 0.000001,
  },
  electrical_current: {
    ampere: 1,
    milliampere: 1000,
    microampere: 1000000,
    kiloampere: 0.001,
  },
  electrical_resistance: {
    ohm: 1,
    kiloohm: 0.001,
    megohm: 0.000001,
    milliohm: 1000,
    microohm: 1000000,
  },
  magnetism: {
    tesla: 1,
    gauss: 10000,
    weber_per_square_meter: 1,
    maxwell_per_square_cm: 10000,
  },
  sound: {
    decibel: 1,
    bel: 0.1,
    neper: 0.115129,
  },
  light: {
    lumen: 1,
    candela: 1,
    lux: 1,
    foot_candle: 0.092903,
  },
  frequency: {
    hertz: 1,
    kilohertz: 0.001,
    megahertz: 0.000001,
    gigahertz: 1e-9,
    terahertz: 1e-12,
  },
  flow_rate: {
    cubic_meter_per_second: 1,
    liter_per_second: 1000,
    gallon_per_minute: 15850.3,
    cubic_foot_per_second: 35.3147,
  },
  viscosity: {
    pascal_second: 1,
    poise: 10,
    centipoise: 1000,
    pound_per_foot_second: 0.671969,
  },
  electric_charge: {
    coulomb: 1,
    ampere_hour: 0.000277778,
    milliampere_hour: 0.277778,
    electron_charge: 6.242e18,
  },
  capacitance: {
    farad: 1,
    microfarad: 1000000,
    nanofarad: 1000000000,
    picofarad: 1000000000000,
  },
  inductance: {
    henry: 1,
    millihenry: 1000,
    microhenry: 1000000,
    nanohenry: 1000000000,
  },
  radiation: {
    gray: 1,
    rad: 100,
    sievert: 1,
    rem: 100,
    roentgen: 114.155,
  },
  concentration: {
    molar: 1,
    millimolar: 1000,
    micromolar: 1000000,
    nanomolar: 1000000000,
  },
  parts_per_million: {
    ppm: 1,
    ppb: 1000,
    ppt: 1000000,
    percent: 0.0001,
  },
  angle: {
    degree: 1,
    radian: 0.0174533,
    gradian: 1.11111,
    turn: 0.00277778,
    arcminute: 60,
    arcsecond: 3600,
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
    nautical_mile: "Nautical Miles",
    light_year: "Light Years",
  },
  weight: {
    kilogram: "Kilograms",
    gram: "Grams",
    pound: "Pounds",
    ounce: "Ounces",
    stone: "Stones",
    ton: "Tons",
    carat: "Carats",
    grain: "Grains",
  },
  temperature: {
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    kelvin: "Kelvin (K)",
    rankine: "Rankine (°R)",
  },
  volume: {
    liter: "Liters",
    milliliter: "Milliliters",
    gallon: "Gallons",
    quart: "Quarts",
    pint: "Pints",
    cup: "Cups",
    fluid_ounce: "Fluid Ounces",
    tablespoon: "Tablespoons",
    teaspoon: "Teaspoons",
    barrel: "Barrels",
  },
  area: {
    square_meter: "Square Meters",
    square_kilometer: "Square Kilometers",
    square_centimeter: "Square Centimeters",
    square_inch: "Square Inches",
    square_foot: "Square Feet",
    square_yard: "Square Yards",
    acre: "Acres",
    hectare: "Hectares",
    square_mile: "Square Miles",
  },
  speed: {
    meter_per_second: "Meters/Second",
    kilometer_per_hour: "Kilometers/Hour",
    mile_per_hour: "Miles/Hour",
    foot_per_second: "Feet/Second",
    knot: "Knots",
    mach: "Mach",
  },
  time: {
    second: "Seconds",
    minute: "Minutes",
    hour: "Hours",
    day: "Days",
    week: "Weeks",
    month: "Months",
    year: "Years",
    decade: "Decades",
  },
  digital_storage: {
    byte: "Bytes",
    kilobyte: "Kilobytes",
    megabyte: "Megabytes",
    gigabyte: "Gigabytes",
    terabyte: "Terabytes",
    petabyte: "Petabytes",
    bit: "Bits",
    kibibyte: "Kibibytes",
  },
  pressure: {
    pascal: "Pascals",
    kilopascal: "Kilopascals",
    bar: "Bars",
    atmosphere: "Atmospheres",
    psi: "PSI",
    torr: "Torr",
    mmhg: "mmHg",
  },
  energy: {
    joule: "Joules",
    kilojoule: "Kilojoules",
    calorie: "Calories",
    kilocalorie: "Kilocalories",
    watt_hour: "Watt Hours",
    kilowatt_hour: "Kilowatt Hours",
    btu: "BTU",
  },
  power: {
    watt: "Watts",
    kilowatt: "Kilowatts",
    horsepower: "Horsepower",
    btu_per_hour: "BTU/Hour",
    calorie_per_second: "Calories/Second",
    foot_pound_per_second: "Foot-Pounds/Second",
  },
  force: {
    newton: "Newtons",
    kilonewton: "Kilonewtons",
    pound_force: "Pound-Force",
    kilogram_force: "Kilogram-Force",
    dyne: "Dynes",
    poundal: "Poundals",
  },
  currency: {
    usd: "US Dollar",
    eur: "Euro",
    gbp: "British Pound",
    jpy: "Japanese Yen",
    cad: "Canadian Dollar",
    aud: "Australian Dollar",
    chf: "Swiss Franc",
    cny: "Chinese Yuan",
  },
  density: {
    kg_per_cubic_meter: "kg/m³",
    g_per_cubic_cm: "g/cm³",
    lb_per_cubic_foot: "lb/ft³",
    lb_per_cubic_inch: "lb/in³",
    g_per_liter: "g/L",
    oz_per_cubic_inch: "oz/in³",
  },
  acceleration: {
    meter_per_second_squared: "m/s²",
    foot_per_second_squared: "ft/s²",
    g_force: "g-force",
    galileo: "Gal",
    inch_per_second_squared: "in/s²",
  },
  angular_velocity: {
    radian_per_second: "rad/s",
    degree_per_second: "°/s",
    revolution_per_minute: "RPM",
    revolution_per_second: "RPS",
  },
  torque: {
    newton_meter: "N⋅m",
    foot_pound: "ft⋅lb",
    inch_pound: "in⋅lb",
    kilogram_meter: "kg⋅m",
    dyne_centimeter: "dyn⋅cm",
  },
  heat_transfer: {
    watt_per_square_meter_kelvin: "W/(m²⋅K)",
    btu_per_hour_square_foot_fahrenheit: "BTU/(hr⋅ft²⋅°F)",
    calorie_per_second_square_cm_celsius: "cal/(s⋅cm²⋅°C)",
  },
  fuel_consumption: {
    liter_per_100km: "L/100km",
    mile_per_gallon_us: "MPG (US)",
    mile_per_gallon_uk: "MPG (UK)",
    km_per_liter: "km/L",
    gallon_per_100_miles: "gal/100mi",
  },
  electrical_voltage: {
    volt: "Volts",
    kilovolt: "Kilovolts",
    millivolt: "Millivolts",
    microvolt: "Microvolts",
  },
  electrical_current: {
    ampere: "Amperes",
    milliampere: "Milliamperes",
    microampere: "Microamperes",
    kiloampere: "Kiloamperes",
  },
  electrical_resistance: {
    ohm: "Ohms",
    kiloohm: "Kiloohms",
    megohm: "Megohms",
    milliohm: "Milliohms",
    microohm: "Microohms",
  },
  magnetism: {
    tesla: "Tesla",
    gauss: "Gauss",
    weber_per_square_meter: "Wb/m²",
    maxwell_per_square_cm: "Mx/cm²",
  },
  sound: {
    decibel: "Decibels",
    bel: "Bels",
    neper: "Nepers",
  },
  light: {
    lumen: "Lumens",
    candela: "Candelas",
    lux: "Lux",
    foot_candle: "Foot-candles",
  },
  frequency: {
    hertz: "Hertz",
    kilohertz: "Kilohertz",
    megahertz: "Megahertz",
    gigahertz: "Gigahertz",
    terahertz: "Terahertz",
  },
  flow_rate: {
    cubic_meter_per_second: "m³/s",
    liter_per_second: "L/s",
    gallon_per_minute: "GPM",
    cubic_foot_per_second: "ft³/s",
  },
  viscosity: {
    pascal_second: "Pa⋅s",
    poise: "Poise",
    centipoise: "Centipoise",
    pound_per_foot_second: "lb/(ft⋅s)",
  },
  electric_charge: {
    coulomb: "Coulombs",
    ampere_hour: "Ampere-hours",
    milliampere_hour: "mAh",
    electron_charge: "Elementary charge",
  },
  capacitance: {
    farad: "Farads",
    microfarad: "Microfarads",
    nanofarad: "Nanofarads",
    picofarad: "Picofarads",
  },
  inductance: {
    henry: "Henrys",
    millihenry: "Millihenrys",
    microhenry: "Microhenrys",
    nanohenry: "Nanohenrys",
  },
  radiation: {
    gray: "Gray",
    rad: "Rad",
    sievert: "Sievert",
    rem: "Rem",
    roentgen: "Roentgen",
  },
  concentration: {
    molar: "Molar",
    millimolar: "Millimolar",
    micromolar: "Micromolar",
    nanomolar: "Nanomolar",
  },
  parts_per_million: {
    ppm: "PPM",
    ppb: "PPB",
    ppt: "PPT",
    percent: "Percent",
  },
  angle: {
    degree: "Degrees",
    radian: "Radians",
    gradian: "Gradians",
    turn: "Turns",
    arcminute: "Arcminutes",
    arcsecond: "Arcseconds",
  },
}

const categories = [
  // Basic Conversions
  {
    id: "length",
    label: "Length",
    icon: <Ruler className="h-4 w-4" />,
    description: "Distance and length measurements",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "weight",
    label: "Weight",
    icon: <Scale className="h-4 w-4" />,
    description: "Mass and weight conversions",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "temperature",
    label: "Temperature",
    icon: <Thermometer className="h-4 w-4" />,
    description: "Temperature scale conversions",
    color: "bg-red-100 text-red-700",
  },
  {
    id: "volume",
    label: "Volume",
    icon: <Beaker className="h-4 w-4" />,
    description: "Volume and capacity measurements",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "area",
    label: "Area",
    icon: <Square className="h-4 w-4" />,
    description: "Surface area calculations",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "speed",
    label: "Speed",
    icon: <Zap className="h-4 w-4" />,
    description: "Velocity and speed conversions",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "time",
    label: "Time",
    icon: <Clock className="h-4 w-4" />,
    description: "Time duration conversions",
    color: "bg-indigo-100 text-indigo-700",
  },

  // Digital & Technology
  {
    id: "digital_storage",
    label: "Digital Storage",
    icon: <HardDrive className="h-4 w-4" />,
    description: "Data storage capacity",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "frequency",
    label: "Frequency",
    icon: <Zap className="h-4 w-4" />,
    description: "Frequency and wavelength",
    color: "bg-pink-100 text-pink-700",
  },

  // Engineering & Physics
  {
    id: "pressure",
    label: "Pressure",
    icon: <Gauge className="h-4 w-4" />,
    description: "Pressure measurements",
    color: "bg-gray-100 text-gray-700",
  },
  {
    id: "energy",
    label: "Energy",
    icon: <Battery className="h-4 w-4" />,
    description: "Energy and work conversions",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "power",
    label: "Power",
    icon: <Lightbulb className="h-4 w-4" />,
    description: "Power and rate conversions",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "force",
    label: "Force",
    icon: <Target className="h-4 w-4" />,
    description: "Force measurements",
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: "density",
    label: "Density",
    icon: <Scale className="h-4 w-4" />,
    description: "Density measurements",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "acceleration",
    label: "Acceleration",
    icon: <Zap className="h-4 w-4" />,
    description: "Acceleration measurements",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "angular_velocity",
    label: "Angular Velocity",
    icon: <Target className="h-4 w-4" />,
    description: "Rotational speed",
    color: "bg-lime-100 text-lime-700",
  },
  {
    id: "torque",
    label: "Torque",
    icon: <Target className="h-4 w-4" />,
    description: "Torque and moment",
    color: "bg-sky-100 text-sky-700",
  },
  {
    id: "flow_rate",
    label: "Flow Rate",
    icon: <Beaker className="h-4 w-4" />,
    description: "Fluid flow measurements",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "viscosity",
    label: "Viscosity",
    icon: <Beaker className="h-4 w-4" />,
    description: "Fluid viscosity",
    color: "bg-green-100 text-green-700",
  },

  // Thermal & Heat
  {
    id: "heat_transfer",
    label: "Heat Transfer",
    icon: <Thermometer className="h-4 w-4" />,
    description: "Heat transfer coefficients",
    color: "bg-red-100 text-red-700",
  },
  {
    id: "fuel_consumption",
    label: "Fuel Consumption",
    icon: <Gauge className="h-4 w-4" />,
    description: "Fuel efficiency",
    color: "bg-orange-100 text-orange-700",
  },

  // Electrical & Electronics
  {
    id: "electrical_voltage",
    label: "Voltage",
    icon: <Zap className="h-4 w-4" />,
    description: "Electrical voltage",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "electrical_current",
    label: "Current",
    icon: <Zap className="h-4 w-4" />,
    description: "Electrical current",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "electrical_resistance",
    label: "Resistance",
    icon: <Zap className="h-4 w-4" />,
    description: "Electrical resistance",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "electric_charge",
    label: "Electric Charge",
    icon: <Battery className="h-4 w-4" />,
    description: "Electric charge",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "capacitance",
    label: "Capacitance",
    icon: <Battery className="h-4 w-4" />,
    description: "Electrical capacitance",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "inductance",
    label: "Inductance",
    icon: <Zap className="h-4 w-4" />,
    description: "Electrical inductance",
    color: "bg-purple-100 text-purple-700",
  },

  // Scientific & Specialized
  {
    id: "magnetism",
    label: "Magnetism",
    icon: <Target className="h-4 w-4" />,
    description: "Magnetic field strength",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "radiation",
    label: "Radiation",
    icon: <Target className="h-4 w-4" />,
    description: "Radiation measurements",
    color: "bg-red-100 text-red-700",
  },
  {
    id: "sound",
    label: "Sound",
    icon: <Zap className="h-4 w-4" />,
    description: "Sound level measurements",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "light",
    label: "Light",
    icon: <Lightbulb className="h-4 w-4" />,
    description: "Light and luminosity",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "concentration",
    label: "Concentration",
    icon: <Beaker className="h-4 w-4" />,
    description: "Chemical concentration",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "parts_per_million",
    label: "PPM",
    icon: <Beaker className="h-4 w-4" />,
    description: "Parts per million",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "angle",
    label: "Angle",
    icon: <Target className="h-4 w-4" />,
    description: "Angular measurements",
    color: "bg-violet-100 text-violet-700",
  },

  // Financial
  {
    id: "currency",
    label: "Currency",
    icon: <Target className="h-4 w-4" />,
    description: "Currency exchange rates",
    color: "bg-green-100 text-green-700",
  },
]

export default function UnitConverter() {
  const [activeTab, setActiveTab] = useState("length")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter categories based on search query
  const filteredCategories = categories.filter(
    (category) =>
      category.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const [values, setValues] = useState(
    Object.fromEntries(
      categories.map((cat) => [
        cat.id,
        {
          from: "",
          to: "",
          fromUnit: Object.keys(conversions[cat.id as keyof typeof conversions] || {})[0] || "",
          toUnit: Object.keys(conversions[cat.id as keyof typeof conversions] || {})[1] || "",
        },
      ]),
    ),
  )

  const convertValue = (value: string, category: string, fromUnit: string, toUnit: string) => {
    if (!value || isNaN(Number.parseFloat(value))) return ""

    const numValue = Number.parseFloat(value)

    if (category === "temperature") {
      let celsius = numValue
      if (fromUnit === "fahrenheit") {
        celsius = ((numValue - 32) * 5) / 9
      } else if (fromUnit === "kelvin") {
        celsius = numValue - 273.15
      } else if (fromUnit === "rankine") {
        celsius = ((numValue - 491.67) * 5) / 9
      }

      const converter = conversions.temperature[toUnit as keyof typeof conversions.temperature]
      return converter(celsius)
        .toFixed(6)
        .replace(/\.?0+$/, "")
    } else {
      const categoryConversions = conversions[category as keyof typeof conversions] as Record<string, number>
      const baseValue = numValue / categoryConversions[fromUnit]
      const convertedValue = baseValue * categoryConversions[toUnit]
      return convertedValue.toFixed(6).replace(/\.?0+$/, "")
    }
  }

  const handleFromChange = (category: string, value: string) => {
    const categoryValues = values[category]
    const convertedTo = convertValue(value, category, categoryValues.fromUnit, categoryValues.toUnit)

    setValues((prev) => ({
      ...prev,
      [category]: { ...prev[category], from: value, to: convertedTo },
    }))
  }

  const handleToChange = (category: string, value: string) => {
    const categoryValues = values[category]
    const convertedFrom = convertValue(value, category, categoryValues.toUnit, categoryValues.fromUnit)

    setValues((prev) => ({
      ...prev,
      [category]: { ...prev[category], to: value, from: convertedFrom },
    }))
  }

  const handleUnitChange = (category: string, type: "fromUnit" | "toUnit", unit: string) => {
    const categoryValues = values[category]
    const newValues = { ...categoryValues, [type]: unit }

    if (categoryValues.from) {
      const convertedTo = convertValue(categoryValues.from, category, newValues.fromUnit, newValues.toUnit)
      newValues.to = convertedTo
    }

    setValues((prev) => ({ ...prev, [category]: newValues }))
  }

  const renderConverter = (category: any) => {
    const categoryValues = values[category.id]
    const categoryLabels = unitLabels[category.id as keyof typeof unitLabels]

    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {category.icon}
            {category.label} Converter
          </CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${category.id}-from`}>From</Label>
              <Select
                value={categoryValues.fromUnit}
                onValueChange={(value) => handleUnitChange(category.id, "fromUnit", value)}
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
                id={`${category.id}-from`}
                type="number"
                placeholder="Enter value"
                value={categoryValues.from}
                onChange={(e) => handleFromChange(category.id, e.target.value)}
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${category.id}-to`}>To</Label>
              <Select
                value={categoryValues.toUnit}
                onValueChange={(value) => handleUnitChange(category.id, "toUnit", value)}
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
                id={`${category.id}-to`}
                type="number"
                placeholder="Converted value"
                value={categoryValues.to}
                onChange={(e) => handleToChange(category.id, e.target.value)}
                className="text-lg font-semibold"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <div className="hidden sm:block text-center mb-8 py-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-lg border border-blue-100">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
            alt="Unit Converter Logo"
            className="h-16 w-16 rounded-xl shadow-lg"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src = "/placeholder.svg?height=64&width=64&text=UC"
            }}
          />
          <h1 className="text-4xl font-bold text-gray-900">Unit Converter Pro</h1>
        </div>
        <p className="text-xl text-gray-600 mb-6">
          Convert between hundreds of units across 30+ categories with precision and ease
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
  {/* Mobile Dropdown */}
  <div className="block lg:hidden mb-4">
    <label className="text-center block text-lg font-medium mb-2">Conversion Categories</label>
    <select
      value={activeTab}
      onChange={(e) => setActiveTab(e.target.value)}
      className="w-full p-4 border rounded-xl text-md bg-white dark:bg-gray-800 dark:text-white"
    >
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))
      ) : (
        <option disabled>No categories found</option>
      )}
    </select>
  </div>

  {/* Desktop Sidebar */}
  <Card className="hidden lg:block sticky top-20">
    <CardHeader>
      <CardTitle className="text-lg flex items-center justify-between">
        Conversion Categories
        <span className="text-xs text-gray-500 bg-blue-100 px-2 py-1 rounded-full">
          {categories.length} total
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      {/* Search Input */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Categories List */}
      <div className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveTab(category.id)
                setSearchQuery("") // Clear search when category is selected
              }}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors rounded-lg ${
                activeTab === category.id
                  ? `${category.color} border-l-4 border-blue-500`
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category.icon}
              <div className="flex-1">
                <span className="text-sm font-medium block">{category.label}</span>
                {searchQuery && (
                  <span className="text-xs text-gray-500 block truncate">
                    {category.description}
                  </span>
                )}
              </div>
              {index < 10 && !searchQuery && (
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
            </button>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">No categories found</p>
            <p className="text-xs">Try a different search term</p>
          </div>
        )}

        {!searchQuery && filteredCategories.length > 10 && (
          <div className="text-center py-2 text-xs text-gray-400 border-t">
            <span>Scroll for more categories ↓</span>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
</div>


        {/* Main Content */}
        <div className="lg:col-span-3">
          {categories.map(
            (category) =>
              activeTab === category.id && (
                <div key={category.id}>
                  {renderConverter(category)}

                  {/* Additional Info */}
                  <Card className="hidden md:flex bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-blue-900 mb-2">About {category.label} Conversions</h3>
                      <p className="text-blue-800 text-sm">
                        {category.description}. Our converter provides accurate results with up to 6 decimal places
                        precision. All conversions are calculated in real-time as you type.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ),
          )}
        </div>
      </div>

            {/* More Tools Section */}
        <section className="py-3 px-4">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-extrabold mb-4 text-black">
              More Tools
            </h2>
            <p className="text-black">
              Explore our other useful tools to make your life easier.
            </p>
          </div>

          <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Unit Converter 1*/}
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Grade Calculator | GPA Tracker</h3>
                <p className="mb-4">
                  Convert units across length, weight, temperature, and more.
                </p>
              </div>
              <a
                
                className="mt-4 inline-block px-4 py-2 bg-white text-fuchsia-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>

            {/* Loan Calculator 2*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Quiz & Assignment Generator</h3>
                <p className="mb-4">
                  Teachers input topics, and generates random multiple-choice or short-answer questions.
                </p>
              </div>
              <a
                
                className="mt-4 inline-block px-4 py-2 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>

            {/* Tip Calculator 3*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Homework | Assignment Submission Portal</h3>
                <p className="mb-4">
                  A simple portal where students can upload assignments / homeworks and teachers can check them anytime.
                </p>
              </div>
              <a
                
                className="mt-4 inline-block px-4 py-2 bg-white text-green-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>

            {/* BMI Calculator 4*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Random Group Generator</h3>
                <p className="mb-4">
                  Teachers can input a list of students, and it randomly creates groups for projects or activities.
                </p>
              </div>
              <a
              
                className="mt-4 inline-block px-4 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 5*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Currency Converter</h3>
                <p className="mb-4">
                  Convert between hundreds of units across 30+ categories with precision and ease like length, weight, temperature, and more.
                </p>
              </div>
              <a
                href="https://currencyconverterjs.vercel.app/"
                className="mt-4 inline-block px-4 py-2 bg-white text-cyan-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Try Now
              </a>
            </div>
            {/* BMI Calculator 6*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Scientific Calculator</h3>
                <p className="mb-4">
                  Perform advanced mathematical calculations quickly and accurately in one easy tool.
                </p>
              </div>
              <a
               
                className="mt-4 inline-block px-4 py-2 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 7*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">PDF | WORD | EXCEL | PPT | IMG Conversion</h3>
                <p className="mb-4">
                  PDF ⇆ Word | PDF ⇆ Excel | PDF ⇆ PowerPoint | PDF ⇆ Image | Word ⇆ PDF | Excel ⇆ PDF | PowerPoint ⇆ PDF
                </p>
              </div>
              <a
             
                className="mt-4 inline-block px-4 py-2 bg-white text-yellow-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 8*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Name Picker</h3>
                <p className="mb-4">
                  Quickly pick a random name from a list for draws, raffles, or classroom activities.
                </p>
              </div>
              <a
                
                className="mt-4 inline-block px-4 py-2 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 9*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Password Generator</h3>
                <p className="mb-4">
                  Create strong, secure, and random passwords to protect your accounts. Ensure your online safety with unique passwords generated in seconds.
                </p>
              </div>
              <a
             
                className="mt-4 inline-block px-4 py-2 bg-white text-lime-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 10*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Loan Calculator</h3>
                <p className="mb-4">
                  Easily estimate your monthly loan payments with our Loan Calculator. Plan your finances better by calculating interest, total cost, and repayment schedules.
                </p>
              </div>
              <a
                
                className="mt-4 inline-block px-4 py-2 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 11*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">QR Code Generator</h3>
                <p className="mb-4">
                  Create custom QR codes instantly with our QR Code Generator. Share links, text, or contact details in a fast and scannable way.
                </p>
              </div>
              <a
                
                className="mt-4 inline-block px-4 py-2 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
            {/* BMI Calculator 12*/}
            <div className="cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center text-white bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Electric Bill Calculator</h3>
                <p className="mb-4">
                  Quickly estimate your monthly electricity costs with our Electric Bill Calculator. Enter your usage and rates to see how much you’ll need to pay.
                </p>
              </div>
              <a
              
                className="mt-4 inline-block px-4 py-2 bg-white text-gray-600 font-bold rounded-full hover:bg-gray-200 transition"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}
