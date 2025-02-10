export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BuildTech Pro</h3>
              <p className="text-gray-400">Excellence in construction since 2000</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Commercial Construction</li>
                <li>Residential Development</li>
                <li>Industrial Projects</li>
                <li>Renovations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Construction Ave</li>
                <li>Building City, ST 12345</li>
                <li>contact@buildtechpro.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons/links */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BuildTech Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }