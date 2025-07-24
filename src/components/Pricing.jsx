export default function Pricing() {
  return (
    <section className="px-3 mx-auto max-w-5xl py-20 space-y-10" id="pricing">
      <h1
        className="text-3xl font-medium text-center mb-10"
        data-aos="zoom-in-up"
      >
        Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-white p-6 rounded-xl shadow-lg shadow-blue-100 flex flex-col justify-between"
          data-aos="zoom-in-up"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-500">Basic</h2>
            <p className="text-gray-600 mb-4">Landing Page Sederhana</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔️ 1 Halaman Statis</li>
              <li>✔️ Mobile Responsive</li>
              <li>✔️ Desain Clean & Modern</li>
              <li>❌ Tanpa CMS/Admin Panel</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-bold text-blue-500">Rp300.000</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full">
              Order Now
            </button>
          </div>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow-lg shadow-blue-100 flex flex-col justify-between border-2 border-blue-500"
          data-aos="zoom-in-up"
        >
          <div>
            <span className="flex items-center justify-between">
              <h2 className="text-xl font-semibold mb-2 text-blue-600">
                Standard
              </h2>
              <span className="flex px-4 py-1.5 items-center gap-2 rounded-full bg-blue-100">
                <p>Populer</p> 🔥
              </span>
            </span>
            <p className="text-gray-600 mb-4">Website Company Profile</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔️ Hingga 4 Halaman</li>
              <li>✔️ Mobile Responsive</li>
              <li>✔️ Desain Custom</li>
              <li>✔️ Admin Panel Sederhana (optional)</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-bold text-blue-600">Rp750.000</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full">
              Order Now
            </button>
          </div>
        </div>
        <div
          className="bg-white p-6 rounded-xl shadow-lg shadow-blue-100 flex flex-col justify-between"
          data-aos="zoom-in-up"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-500">
              Premium
            </h2>
            <p className="text-gray-600 mb-4">Full Custom Web Solution</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔️ Unlimited Pages</li>
              <li>✔️ Full CMS & Admin Panel</li>
              <li>✔️ SEO Optimization</li>
              <li>✔️ Integrasi API, Form, Blog, dll.</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-bold text-blue-500">
              Mulai Rp1.500.000
            </p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
