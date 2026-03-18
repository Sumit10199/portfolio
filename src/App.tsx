

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg mt-2">Full Stack & Mobile Developer</p>
        <p className="mt-4 max-w-xl mx-auto">
          I build scalable web and mobile applications with clean architecture and modern UI.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="bg-white shadow rounded-2xl p-5">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p className="text-sm text-gray-600 mt-2">
              Short description of the project and what problem it solves.
            </p>

            <ul className="mt-3 text-sm list-disc ml-5">
              <li>Tech: React, Node.js</li>
              <li>Improved performance by X%</li>
              <li>Handled real-time data</li>
            </ul>

            <div className="mt-4 flex gap-3">
              <a href="#" className="text-blue-600">Live Demo</a>
              <a href="#" className="text-blue-600">GitHub</a>
            </div>
          </div>

          {/* Duplicate this card for more projects */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["React", "Node.js", "JavaScript", "MongoDB", "Flutter"].map((skill) => (
            <span key={skill} className="bg-white px-3 py-1 rounded-full shadow text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="font-semibold">Company Name</h3>
          <p className="text-sm text-gray-600">Role • Duration</p>
          <ul className="mt-3 list-disc ml-5 text-sm">
            <li>Worked on real-time web and mobile applications</li>
            <li>Redesigned UI for better performance</li>
            <li>Collaborated with team on production apps</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">your@email.com</p>
      </section>
    </div>
  );
}
