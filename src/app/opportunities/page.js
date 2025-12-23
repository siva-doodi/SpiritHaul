export default function OpportunitiesPage() {
  return (
    <section className="bg-[#f7f5f2] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Opportunities
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Looking to join a growing UK transport and logistics company?
            We are always open to connecting with motivated professionals.
          </p>
        </div>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – CONTENT */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 space-y-10">

            {/* OPEN ROLES */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Open Roles
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                We regularly recruit across our transport, warehousing, and
                fulfilment operations. While specific roles may not always
                be advertised, we welcome expressions of interest for:
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• HGV & delivery drivers</li>
                <li>• Warehouse operatives</li>
                <li>• Fulfilment & inventory staff</li>
                <li>• Operations & logistics coordinators</li>
                <li>• Administrative & support roles</li>
              </ul>
            </div>

            {/* JOIN OUR TEAM */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Looking to Join Our Team?
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                At SpiritHaul, we value reliability, teamwork, and a strong
                commitment to service quality. We believe in creating a
                supportive working environment where individuals can grow
                alongside the business.
              </p>

              <p className="mt-4 text-gray-700">
                Whether you are experienced within the logistics industry
                or looking to develop your career, we encourage you to get in touch.
              </p>
            </div>

          </div>

          {/* RIGHT – CV UPLOAD (VISUALLY SEPARATE) */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200">

            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Submit Your CV
            </h2>

            <p className="mt-4 text-gray-600 text-center">
              Interested in working with us?  
              Share your details and upload your CV below.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="file"
                className="w-full rounded-md border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                type="submit"
                className="w-full mt-6 rounded-full bg-red-600 py-3 text-white font-semibold hover:bg-red-700 transition"
              >
                Upload CV
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Accepted formats: PDF, DOC, DOCX · Max size: 5MB
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
