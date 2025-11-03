export function ClassSchedule() {
    const scheduleData = [
      {
        time: '05:30 AM – 09:00 AM',
        morning: { name: 'Morning Workout' },
        evening: '',
      },
      {
        time: '09:00 AM – 11:00 AM',
        morning: { name: 'Ladies Only Session' },
        evening: '',
      },
      {
        time: '04:30 PM – 09:30 PM',
        morning: '',
        evening: { name: 'Evening Workout' },
      },
    ];
  
    return (
      <section id="schedule" className="bg-black py-20 md:py-28" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              <span className="text-white">Class </span>
              <span className="text-red-600">Schedule</span>
            </h2>
            <p className="mt-3 text-gray-300">
              Stay consistent — your strength starts here.
            </p>
          </div>
  
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-lg border border-gray-800">
              {/* Header */}
              <div className="bg-gray-800 grid grid-cols-3">
                <div className="border-r border-gray-700 px-6 py-4 text-center font-bold text-white">
                  Time
                </div>
                <div className="border-r border-gray-700 px-6 py-4 text-center font-bold text-white">
                  Morning
                </div>
                <div className="px-6 py-4 text-center font-bold text-white">
                  Evening
                </div>
              </div>
  
              {/* Body */}
              <div className="divide-y divide-gray-800">
                {scheduleData.map((row, idx) => (
                  <div
                    key={row.time}
                    className={idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}
                  >
                    <div className="grid grid-cols-3">
                      {/* Time */}
                      <div className="border-r border-gray-700 px-6 py-4 text-center text-white font-semibold">
                        {row.time}
                      </div>
  
                      {/* Morning */}
                      <div className="border-r border-gray-700 px-6 py-4 text-center text-white">
                        {row.morning ? row.morning.name : '-'}
                      </div>
  
                      {/* Evening */}
                      <div className="px-6 py-4 text-center text-white">
                        {row.evening ? row.evening.name : '-'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {scheduleData.map((row) => (
              <div
                key={row.time}
                className="overflow-hidden rounded-lg border border-gray-800"
              >
                <div className="bg-gray-800 px-4 py-3 font-bold text-white">
                  {row.time}
                </div>
  
                <div className="bg-gray-900 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase">
                    Morning
                  </span>
                  <p className="mt-1 text-white">{row.morning ? row.morning.name : '-'}</p>
                </div>
  
                <div className="bg-gray-800 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase">
                    Evening
                  </span>
                  <p className="mt-1 text-white">{row.evening ? row.evening.name : '-'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  