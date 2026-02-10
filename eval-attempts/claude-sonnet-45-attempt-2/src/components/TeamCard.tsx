import type { FC } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-4xl font-bold">
        {member.name.split(' ').map(n => n[0]).join('')}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
      <p className="text-gray-600 leading-relaxed">{member.bio}</p>
    </div>
  );
};

export default TeamCard;
