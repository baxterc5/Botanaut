function Planet() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h2 className="text-3xl font-bold text-green-200 mb-6">🌎 Your Planet</h2>
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-green-500 flex items-center justify-center shadow-lg mb-4">
          {/* Placeholder planet graphic */}
          <span className="text-white text-2xl">🌱</span>
        </div>
        <p className="text-white">
          Your planet is in stage 1. Make sustainable swaps to level up!
        </p>
      </div>
    );
  }
  
  export default Planet;
  