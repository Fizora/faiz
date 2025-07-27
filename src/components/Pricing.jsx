import { CiCircleCheck } from "react-icons/ci";
import { GoXCircle } from "react-icons/go";

export default function PricingSection() {
  return (
    <section className="px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-5xl py-20 items-start">
      {/* Basic Plan */}
      <div className="min-h-[600px]">
        <div className="py-4"></div>
        <div className="bg-white p-6 h-full rounded-xl shadow-lg shadow-blue-100 transition flex flex-col justify-between border border-blue-200 space-y-5">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">
            Basic Project
          </h2>
          <p className="text-gray-700">
            Best for small businesses with high SEO performance
          </p>
          <span className="flex items-center gap-2">
            Rp.
            <h1 className="text-5xl font-bold">375.000</h1>
          </span>
          <button className="px-5 py-1.5 text-2xl font-medium bg-blue-500 text-white rounded-md">
            Choose Package
          </button>
          <ul className="space-y-2 text-sm text-gray-700 flex-1">
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> 1 Halaman Landing Page
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Responsive Design (Mobile-Friendly)
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Modern Clean Layout
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> 2 Hari Pengerjaan
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> 1 Kali Revisi
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Free Hosting 1 Bulan
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Gratis Setup Domain (.my.id)
            </li>
          </ul>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="min-h-[600px]">
        <div className="py-4"></div>
        <div className="bg-white p-6 h-full rounded-xl shadow-lg shadow-blue-100 transition flex flex-col justify-between border border-blue-200 space-y-5">
          <span className="flex items-center justify-between">
            <h1 className="text-xl text-blue-500 font-bold">Standard</h1>
            <p className="bg-yellow-300 px-5 rounded-full font-bold">
              Diskon 25%
            </p>
          </span>
          <p className="text-gray-700">
            Perfect for growing businesses needing a professional edge
          </p>
          <span className="flex items-center gap-2">
            Rp.
            <h1 className="text-5xl font-bold">750.000</h1>
          </span>
          <button className="px-5 py-1.5 text-2xl font-medium bg-blue-500 text-white rounded-md">
            Choose Package
          </button>
          <ul className="space-y-2 text-sm text-gray-700 flex-1">
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Hingga 3 Halaman Web
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Responsive Design
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Modern Clean Layout
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> 3-4 Hari Pengerjaan
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> 2 Kali Revisi
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Free Hosting 2 Bulan
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Gratis Domain (.my.id)
            </li>
            <li className="flex items-center gap-2">
              <CiCircleCheck size={22} /> Konsultasi via Zoom 30 Menit
            </li>
          </ul>
        </div>
      </div>

      {/* Premium Plan (Best Seller) */}
      <div className="min-h-[600px]">
        <div className="py-4"></div>
        <div className="relative">
          <div className="absolute -top-12 w-full">
            <div className="bg-blue-500 text-white text-center py-3 rounded-t-xl font-bold">
              Best Choise
            </div>
          </div>
          <div className="bg-white p-6 h-full rounded-xl rounded-t-none shadow-lg shadow-blue-100 transition flex flex-col justify-between border-2 border-blue-500 space-y-5 pt-12">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              Premium Plan
            </h2>
            <p className="text-gray-700">
              Ultimate solution for large-scale business growth
            </p>
            <span className="flex items-center gap-2">
              Rp.
              <h1 className="text-5xl font-bold">1.750.000</h1>
            </span>
            <button className="px-5 py-1.5 text-2xl font-medium bg-blue-500 text-white rounded-md">
              Choose Package
            </button>
            <ul className="space-y-2 text-sm text-gray-700 flex-1">
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Hingga 5 Halaman Web
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Responsive Design + Animasi
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Modern Clean Layout
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> 5-7 Hari Pengerjaan
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Unlimited Revisi (hingga puas)
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Free Hosting 3 Bulan
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Gratis Domain (.my.id)
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Admin Panel Lengkap
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> SEO Optimization
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Konsultasi & Maintenance 1 Bulan
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Source Code Disertakan
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck size={22} /> Garansi Uang Kembali 3 Hari
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
