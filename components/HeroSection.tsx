export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-30 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Co-Founder Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-gray-700 text-sm font-medium">Helping Brands Build Online Presence</span>
          
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block">Hey, I&apos;m 👨 Yoftahe Tadele</span>
        
          </h1>
        </div>

        {/* Design Description */}
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-bold mb-4">
            And I Design/Develop{' '}
            <span className="inline-flex items-center gap-2">
              <span className="bg-gray-800 text-white px-3 py-1 rounded text-2xl">📱</span>
              Apps
            </span>
            {' '}and{' '}
            <span className="inline-flex items-center gap-2">
              <span className="bg-gray-700 text-white px-3 py-1 rounded text-2xl">🖥️</span>
              Websites
            </span>
          </p>
        </div>

        {/* Work Status Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Full Time</span>
            <span className="text-lg">🚀</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Part-Time</span>
            <span className="text-lg">📌</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
}
