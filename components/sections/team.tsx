import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Shariq Shokawat Kadla",
    role: "Founder",
    description: "Visionary leader driving Viora's mission to revolutionize delivery services in Kashmir."
  },
  {
    name: "Ronit Ghosh",
    role: "Backend Developer",
    description: "Expert in building robust and scalable backend systems."
  },
  {
    name: "Sayak Dey",
    role: "Frontend Developer",
    description: "Creating beautiful and intuitive user experiences."
  },
  {
    name: "Joydeep Roy",
    role: "Design Head",
    description: "Leading the visual and user experience direction of Viora."
  }
];

export function TeamSection() {
  return (
    <section id="teamsection" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-primary font-medium text-center mb-2">{member.role}</p>
              <p className="text-muted-foreground text-center">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}