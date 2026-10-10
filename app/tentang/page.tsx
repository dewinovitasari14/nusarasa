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

      
      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2026 NusaRasa. Freshly baked with love. 🍞
        </p>
      </footer>
    </main>
  );
}