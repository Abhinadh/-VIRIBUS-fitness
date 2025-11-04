export function ClassSchedule() {
  const scheduleData = [
    {
      session: 'Common Session',
      session1: '05:30 AM – 09:00 AM',
      session2: '04:30 PM – 09:30 PM',
    },
    {
      session: 'Ladies Only',
      session1: '09:00 AM – 11:00 AM',
      session2: '-',
    },
  ];

  return (
    <section id="schedule" className="bg-black py-20 md:py-28" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-white">Class </span>
            <span className="text-red-600">Schedule</span>
          </h2>
          <p className="mt-3 text-gray-300">
            Stay consistent — your strength starts here.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-lg border border-gray-800">
            {/* Header */}
            <div className="bg-gray-800 grid grid-cols-3 text-center">
              <div className="border-r border-gray-700 px-6 py-4 font-bold text-white">
                Session
              </div>
              <div className="border-r border-gray-700 px-6 py-4 font-bold text-white">
                Session 1
              </div>
              <div className="px-6 py-4 font-bold text-white">Session 2</div>
            </div>

            {/* Body */}
            <div className="divide-y divide-gray-800">
              {scheduleData.map((row, idx) => (
                <div
                  key={row.session}
                  className={idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}
                >
                  <div className="grid grid-cols-3 text-center">
                    <div className="border-r border-gray-700 px-6 py-4 text-white font-semibold">
                      {row.session}
                    </div>
                    <div className="border-r border-gray-700 px-6 py-4 text-white">
                      {row.session1}
                    </div>
                    <div className="px-6 py-4 text-white">{row.session2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {scheduleData.map((row) => (
            <div
              key={row.session}
              className="overflow-hidden rounded-lg border border-gray-800"
            >
              <div className="bg-gray-800 px-4 py-3 font-bold text-white">
                {row.session}
              </div>

              <div className="bg-gray-900 px-4 py-3">
                <span className="text-xs font-semibold text-gray-400 uppercase">
                  Session 1
                </span>
                <p className="mt-1 text-white">{row.session1}</p>
              </div>

              <div className="bg-gray-800 px-4 py-3">
                <span className="text-xs font-semibold text-gray-400 uppercase">
                  Session 2
                </span>
                <p className="mt-1 text-white">{row.session2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
