const AchievementsSection = () => {
    const badges = new Array(10).fill("/badge-placeholder.png");
  
    return (
      <section className="py-10 bg-black text-center">
        <h2 className="text-xl font-semibold mb-6">Our Achievements</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((src, i) => (
            <img key={i} src={src} alt={`badge-${i}`} className="h-16" />
          ))}
        </div>
      </section>
    );
  };
  
  export default AchievementsSection;