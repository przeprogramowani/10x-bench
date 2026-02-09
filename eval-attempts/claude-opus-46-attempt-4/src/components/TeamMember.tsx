interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedIn?: string;
  github?: string;
}

export default function TeamMember({
  name,
  role,
  bio,
  expertise,
  linkedIn,
  github,
}: TeamMemberProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="rounded-2xl border border-surface-800 bg-surface-900/50 p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xl font-bold text-white">
          {initials}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-brand-300">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-surface-300">{bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-surface-800 px-3 py-1 text-xs font-medium text-surface-300"
          >
            {skill}
          </span>
        ))}
      </div>
      {(linkedIn || github) && (
        <div className="mt-4 flex gap-3">
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-400 transition-colors hover:text-brand-400"
            >
              LinkedIn
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-surface-400 transition-colors hover:text-brand-400"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
