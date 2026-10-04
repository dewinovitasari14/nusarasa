export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white-50">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <h1 className="text-2xl font-bold tracking-[0.3em] text-gray-800">
            NusaRasa 🍞
          </h1>
          <p className="text-sm text-gray-500">
            Freshly Baked Everyday
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-justify">
        <p className="mb-3 text-2xl font-medium uppercase tracking-widest text-black-600">
          Kontak Kami
        </p>

        <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-600">
          Punya pertanyaan, ingin melakukan pemesanan, atau sekadar ingin
          menyapa? Kami dengan senang hati akan membantu.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-3">
        {/* Address */}
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 text-4xl">📍</div>

          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Alamat
          </h3>

          <p className="leading-7 text-gray-600">
            Jl. Nusarasa No. 10
            <br />
            Jakarta, Indonesia
          </p>
        </div>

        {/* Phone */}
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 text-4xl">📞</div>

          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Telepon
          </h3>

          <p className="leading-7 text-gray-600">
            +62 812 3456 7890
            <br />
            Senin - Ahad, 08:00 - 17:00 
          </p>
        </div>

        {/* Email */}
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 text-4xl">✉️</div>

          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Email
          </h3>

          <p className="leading-7 text-gray-600">
            nusarasa@gmail.com
            <br />
            Kami siap membantu.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2026 NusaRasa. Freshly baked with love. 🍞
        </p>
      </footer>
    </main>
  );
}