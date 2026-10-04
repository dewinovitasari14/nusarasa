export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white-50">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <h1 className="text-2xl font-bold tracking-[0.3em] text-black-900">
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
          Tentang Kami
        </p>

        <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-600">
          NusaRasa adalah toko roti yang menghadirkan berbagai pilihan
          roti dan pastry fresh setiap hari dengan rasa yang sederhana,
          hangat, dan berkesan.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 text-4xl">🥐</div>

          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Cerita Kami
          </h3>

          <p className="leading-7 text-gray-600 text-justify">
            NusaRasa lahir dari kecintaan terhadap roti yang hangat,
            aroma panggangan yang menggoda, dan keinginan menghadirkan
            rasa yang sederhana namun berkesan.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 text-4xl">🍰</div>

          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Produk Kami
          </h3>

          <p className="leading-7 text-gray-600 text-justify">
            Kami menyediakan berbagai pilihan roti, croissant, cake,
            dan cookies yang dibuat dengan bahan berkualitas.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 text-4xl">❤️</div>

          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Komitmen Kami
          </h3>

          <p className="leading-7 text-gray-600 text-justify">
            Setiap produk NusaRasa dibuat dengan perhatian terhadap
            kualitas, rasa, dan kesegaran.
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