export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-10 pb-6 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl px-0 font-bold mb-3">Zahid Pharmacy</h2>
          <p className="text-gray-300 text-sm">
            50000+ offline retailers and neighborhood stores are now on Local
            Shops.
          </p>
        </div>

        <div>
          <h3 className="text-lg px-0 font-semibold mb-2">Products</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Health Product</li>
            <li>Medicine</li>
            <li>Baby Medicine</li>
            <li>Drug</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg px-0 font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Learn</li>
            <li>Practice</li>
            <li>Customer Support</li>
            <li>For Sale</li>
            <li>Enterprise</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg px-0 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 MediStore. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
