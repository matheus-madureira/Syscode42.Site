// Tecnologias com que o time trabalha. Logos: Devicon (MIT), marcas dos respectivos donos.
export const tools = [
  { id: "javascript", label: "JavaScript", logo: "/logos/javascript.svg" },
  { id: "typescript", label: "TypeScript", logo: "/logos/typescript.svg" },
  { id: "csharp", label: "C#", logo: "/logos/csharp.svg" },
  { id: "react", label: "React", logo: "/logos/react.svg" },
  { id: "nextjs", label: "Next.js", logo: "/logos/nextjs.svg" },
  { id: "dotnet", label: ".NET", logo: "/logos/dotnet.svg" },
  { id: "sqlserver", label: "SQL Server", logo: "/logos/sqlserver.svg" },
  { id: "postgresql", label: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { id: "mongodb", label: "MongoDB", logo: "/logos/mongodb.svg" },
  { id: "redis", label: "Redis", logo: "/logos/redis.svg" },
  { id: "azure", label: "Azure", logo: "/logos/azure.svg" },
  { id: "aws", label: "AWS", logo: "/logos/aws.svg" },
  { id: "github", label: "GitHub", logo: "/logos/github.svg" },
  { id: "linux", label: "Linux", logo: "/logos/linux.svg" },
  {
    id: "windowsserver",
    label: "Windows Server",
    logo: "/logos/windowsserver.svg",
  },
] as const

export type Tool = (typeof tools)[number]
