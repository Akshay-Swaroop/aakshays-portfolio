const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 80 },
      { name: "Java", level: 70 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Libraries & Tools",
    skills: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "YOLOv8", level: 75 },
      { name: "Power BI", level: 79 },
      { name: "Tableau", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Skills</p>
          <h2 className="section-title mt-2">My Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-hero rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
