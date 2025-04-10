export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#D2E8E3]  to-[#eda1ac] text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Zahid Pharmacy Store</h1>
        <p className="text-lg text-gray-700 mt-4">We committed to providing quality medications and health care products at competitive prices.</p>
        <button className="mt-6 px-6 py-3 bg-[#ff0000] text-white rounded-lg text-lg hover:bg-[#000000] transition">Get Started</button>
      </div>

      {/* Categories Section */}
<div className="py-10 px-6 cursor-pointer">
  <h2 className="text-2xl font-semibold text-gray-800 text-center">Shop by Categories</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
    
    {/* Home Category */}
    <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img src="/images/tablet-category.jpg" alt="Tablets" className="w-full h-40 object-cover" />
      <h3 className="text-lg font-medium text-[#4f5755] text-center py-3">Tablets</h3>
    </div>

    {/* Kitchen Category */}
    <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img src="/images/injection-category.jpg" alt="Injections" className="w-full h-40 object-cover" />
      <h3 className="text-lg font-medium text-[#4f5755] text-center py-3">Injections</h3>
    </div>

    {/* Fashion Category */}
    <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img src="/images/syrup-category.jpg" alt="Syrups" className="w-full h-40 object-cover" />
      <h3 className="text-lg font-medium text-[#4f5755] text-center py-3">Syrups</h3>
    </div>

    {/* Sports Category */}
    <div className="bg-[#ffffff] rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img src="/images/cream-category.jpg" alt="Creams" className="w-full h-40 object-cover" />
      <h3 className="text-lg font-medium text-[#4f5755] text-center py-3">Creams</h3>
    </div>

  </div>
</div>


      {/* Call-to-Action Section */}
      <div className="bg-[#D2E8E3]  py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Discover?</h2>
        <p className="text-lg text-gray-700 mt-4">Join now and start exploring the best medicines.</p>
        <button className="mt-6 px-6 py-3  bg-[#ff0000] text-white rounded-lg text-lg hover:bg-[#000000] transition">Explore</button>
      </div>
    </div>
  );
}