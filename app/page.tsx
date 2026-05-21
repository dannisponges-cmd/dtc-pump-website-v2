const brands = ['Rexroth', 'Eaton', 'Vickers', 'Parker', 'Kawasaki', 'Yuken', 'CAT', 'Komatsu']

const categories = [
  ['Piston Pumps', 'High-pressure axial piston pumps for industrial and construction machinery.'],
  ['Vane Pumps', 'Reliable vane pump solutions for hydraulic systems.'],
  ['Gear Pumps', 'Compact and durable gear pumps for multiple applications.'],
  ['Hydraulic Motors', 'Heavy-duty hydraulic motors and spare parts.'],
]

const models = [
  ['A10VSO28', 'Rexroth', 'Piston Pump'],
  ['PVH74', 'Eaton', 'Hydraulic Pump'],
  ['T6CC', 'Parker Denison', 'Vane Pump'],
  ['K3V112', 'Kawasaki', 'Hydraulic Pump'],
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-wide text-[#0B3D91]">DTC Pump</div>
            <div className="text-xs text-slate-500">Hydraulic Pump Supplier</div>
          </div>
          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#products" className="hover:text-[#0B3D91]">Products</a>
            <a href="#brands" className="hover:text-[#0B3D91]">Brands</a>
            <a href="#rfq" className="hover:text-[#0B3D91]">RFQ</a>
          </nav>
          <a href="#rfq" className="rounded-xl bg-[#F7931E] px-5 py-2 text-sm font-bold text-white shadow-lg">Request Quote</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0B3D91] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">Professional Hydraulic Pump Manufacturer</p>
            <h1 className="text-5xl font-black leading-tight lg:text-6xl">Hydraulic Pumps & Parts Supplier</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">Replacement hydraulic pumps and spare parts for Rexroth, Eaton, Parker, Vickers, Kawasaki and more.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#products" className="rounded-2xl bg-[#F7931E] px-7 py-4 text-sm font-bold text-white shadow-2xl">View Products</a>
              <a href="#rfq" className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white">Send RFQ</a>
            </div>
          </div>
          <div className="rounded-[32px] bg-white p-8 text-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black">Quick Product Search</h2>
            <p className="mt-2 text-sm text-slate-500">Search by model or OEM number</p>
            <input className="mt-6 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#0B3D91]" placeholder="Search Part Number..." />
            <div className="mt-6 space-y-3">
              {models.map((item) => (
                <div key={item[0]} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <div className="font-bold">{item[0]}</div>
                    <div className="text-sm text-slate-500">{item[1]}</div>
                  </div>
                  <span className="rounded-full bg-[#0B3D91]/10 px-3 py-1 text-xs font-bold text-[#0B3D91]">{item[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#F7931E]">Supported Brands</p>
        <h2 className="mt-4 text-center text-4xl font-black">Hydraulic Pump Brands</h2>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => <div key={brand} className="rounded-3xl bg-white p-6 text-center font-bold shadow-sm">{brand}</div>)}
        </div>
      </section>

      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F7931E]">Product Categories</p>
          <h2 className="mt-4 text-4xl font-black">Hydraulic Product Solutions</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <div key={item[0]} className="rounded-[32px] bg-slate-50 p-8 shadow-lg">
                <div className="mb-6 text-5xl">⚙️</div>
                <h3 className="text-2xl font-black">{item[0]}</h3>
                <p className="mt-4 leading-7 text-slate-500">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Popular Hydraulic Pump Models</h2>
        <div className="mt-10 overflow-hidden rounded-[32px] bg-white shadow-2xl">
          <table className="w-full">
            <thead className="bg-[#0B3D91] text-white">
              <tr><th className="px-8 py-5 text-left">Model</th><th className="px-8 py-5 text-left">Brand</th><th className="px-8 py-5 text-left">Type</th></tr>
            </thead>
            <tbody>
              {models.map((item) => <tr key={item[0]} className="border-b"><td className="px-8 py-6 font-bold">{item[0]}</td><td className="px-8 py-6">{item[1]}</td><td className="px-8 py-6">{item[2]}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section id="rfq" className="bg-[#0B3D91] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black">Send Your RFQ Now</h2>
          <p className="mt-4 text-blue-100">Tell us the model, quantity and application.</p>
          <form className="mt-10 grid gap-6 text-slate-800 md:grid-cols-2">
            <input className="rounded-2xl px-5 py-4" placeholder="Your Name" />
            <input className="rounded-2xl px-5 py-4" placeholder="Email" />
            <input className="rounded-2xl px-5 py-4" placeholder="WhatsApp" />
            <input className="rounded-2xl px-5 py-4" placeholder="Product Model" />
            <textarea className="rounded-2xl px-5 py-4 md:col-span-2" rows={5} placeholder="Message" />
            <button className="rounded-2xl bg-[#F7931E] px-8 py-5 text-lg font-black text-white md:col-span-2" type="button">Submit RFQ</button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 px-6 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl">
          <div className="text-3xl font-black text-white">DTC Pump</div>
          <p className="mt-4">Professional hydraulic pump manufacturer and supplier.</p>
        </div>
      </footer>
    </main>
  )
}
