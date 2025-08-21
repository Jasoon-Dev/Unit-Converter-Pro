import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfgfzWGoaB-RLDxYqZ91eEijavLlFqmExBqWM2mpjfdyrqqIkJaEPbMOh9kOImEX33W9ahJ-rj2thX6NWUDs0_hv8z84gGw_tF58ohG4zgJK9BlWwEfiR8t1Xc0CSUq9_8xhzv0sSOJ6dw/s1600/converter.jpg"
                alt="Unit Converter Logo"
                className="h-8 w-8 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-900">Unit Converter Pro</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              The most comprehensive and accurate unit conversion tool on the web. Convert between hundreds of units
              across multiple categories with precision and ease.
            </p>
            <p className="text-gray-500 text-xs">© 2024 Unit Converter Pro. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/whats-new" className="text-gray-600 hover:text-blue-600">
                  What's New
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-600 hover:text-blue-600">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-500">
            This website uses cookies to ensure you get the best experience. By continuing to use our site, you accept
            our use of cookies.
          </p>
        </div>
      </div>
    </footer>
  )
}
