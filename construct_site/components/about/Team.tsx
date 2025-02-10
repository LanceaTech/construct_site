const team = [
    {
      name: "Robert Johnson",
      role: "CEO",
      bio: "25+ years in construction management",
      image: "/team/ceo.jpg"
    },
    // Add more team members
  ];
  
  export default function Team() {
    return (
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }