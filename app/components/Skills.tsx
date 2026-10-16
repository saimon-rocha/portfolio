const technologies = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "PHP", "Java"],
  database: ["PostgreSQL", "SQL"],
  processing: ["Middleware", "IA"],
  infrastructure: ["Git", "Docker", "Linux", "Cloud", "Deploy", "CI/CD"],
};

function TechNode({
  x,
  y,
  width,
  height,
  title,
  subtitle,
  variant,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  subtitle: string;
  variant: "lime" | "cyan";
}) {
  return (
    <g className={`skills-node skills-node-${variant}`}>
      <rect x={x} y={y} width={width} height={height} rx="16" />

      <circle className="skills-status" cx={x + width - 18} cy={y + 18} r="3" />

      <text
        x={x + width / 2}
        y={y + height / 2 - 4}
        className="skills-node-title"
      >
        {title}
      </text>

      <text
        x={x + width / 2}
        y={y + height / 2 + 20}
        className="skills-node-subtitle"
      >
        {subtitle}
      </text>
    </g>
  );
}

function Packet({
  path,
  variant,
  duration = "2.5s",
}: {
  path: string;
  variant: "lime" | "cyan";
  duration?: string;
}) {
  return (
    <circle r="4" className={`skills-packet skills-packet-${variant}`}>
      <animateMotion dur={duration} repeatCount="indefinite" path={path} />
    </circle>
  );
}

function DesktopArchitecture() {
  const databaseToApi = "M250 205 C305 205 365 205 420 205";
  const apiToDatabase = "M420 250 C365 250 305 250 250 250";
  const apiToFrontend = "M660 205 C720 205 790 205 850 205";
  const frontendToApi = "M850 250 C790 250 720 250 660 250";
  const apiToProcessing = "M470 285 C470 305 470 320 470 340";
  const processingToApi = "M610 340 C610 320 610 305 610 285";

  return (
    <svg
      viewBox="0 0 1100 570"
      className="skills-diagram skills-diagram-desktop"
      role="img"
      aria-labelledby="skills-desktop-title skills-desktop-desc"
    >
      <title id="skills-desktop-title">
        Arquitetura do ecossistema tecnológico
      </title>
      <desc id="skills-desktop-desc">
        O banco de dados se comunica exclusivamente com a API principal. A API
        se comunica com o frontend e com o módulo de middleware e IA. A
        infraestrutura oferece suporte aos componentes.
      </desc>

      <defs>
        <linearGradient id="skills-support-gradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#a3e635" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Database ↔ API */}
      <path className="skills-wire skills-wire-cyan" d={databaseToApi} />
      <path className="skills-wire skills-wire-cyan" d={apiToDatabase} />

      {/* API ↔ Frontend */}
      <path className="skills-wire skills-wire-lime" d={apiToFrontend} />
      <path className="skills-wire skills-wire-lime" d={frontendToApi} />

      {/* API ↔ Middleware / IA */}
      <path className="skills-wire skills-wire-lime" d={apiToProcessing} />
      <path className="skills-wire skills-wire-cyan" d={processingToApi} />

      {/* Labels in the gaps between nodes */}
      <g className="skills-wire-label">
        <text x="335" y="192" textAnchor="middle">
          SQL · Queries
        </text>
        <text x="335" y="270" textAnchor="middle">
          Dados · Respostas
        </text>
        <text x="755" y="192" textAnchor="middle">
          HTTP · REST
        </text>
        <text x="755" y="270" textAnchor="middle">
          Requisições · Respostas
        </text>
        <text x="540" y="318" textAnchor="middle">
          Serviços
        </text>
      </g>

      {/* Animated data packets */}
      <Packet path={databaseToApi} variant="cyan" />
      <Packet path={apiToDatabase} variant="lime" duration="2.9s" />
      <Packet path={apiToFrontend} variant="lime" duration="2.3s" />
      <Packet path={frontendToApi} variant="cyan" duration="2.8s" />
      <Packet path={apiToProcessing} variant="lime" duration="1.8s" />
      <Packet path={processingToApi} variant="cyan" duration="2s" />

      {/* Database */}
      <TechNode
        x={40}
        y={170}
        width={210}
        height={115}
        title="DATABASE"
        subtitle="PostgreSQL · SQL"
        variant="cyan"
      />

      {/* Main API */}
      <TechNode
        x={420}
        y={170}
        width={240}
        height={115}
        title="API PRINCIPAL"
        subtitle="Node.js · PHP · Java"
        variant="lime"
      />

      {/* Frontend */}
      <TechNode
        x={850}
        y={170}
        width={210}
        height={115}
        title="FRONTEND"
        subtitle="React · Next.js"
        variant="lime"
      />

      {/* Secondary processing module */}
      <TechNode
        x={420}
        y={340}
        width={240}
        height={85}
        title="MIDDLEWARE · IA"
        subtitle="Processamento e serviços"
        variant="cyan"
      />

      {/* Infrastructure is a support layer, not a request hop */}
      <g className="skills-infrastructure">
        <path
          d="M145 285 V460 M540 425 V460 M955 285 V460"
          className="skills-support-line"
        />
        <rect
          x="40"
          y="460"
          width="1020"
          height="78"
          rx="14"
          className="skills-infrastructure-panel"
        />
        <path
          d="M60 461 H1040"
          stroke="url(#skills-support-gradient)"
          strokeWidth="2"
        />
        <text
          x="550"
          y="490"
          className="skills-infra-title"
          textAnchor="middle"
        >
          INFRAESTRUTURA
        </text>
        <text
          x="550"
          y="515"
          className="skills-infra-subtitle"
          textAnchor="middle"
        >
          Git · Docker · Linux · Cloud · Deploy · CI/CD
        </text>
      </g>
    </svg>
  );
}

function MobileArchitecture() {
  const frontendToApi = "M180 140 L180 205";
  const apiToFrontend = "M198 205 L198 140";
  const apiToDatabase = "M160 315 L160 385";
  const databaseToApi = "M200 385 L200 315";
  const apiToProcessing = "M230 285 C310 320 310 485 230 535";
  const processingToApi = "M210 535 C280 485 280 320 210 285";

  return (
    <svg
      viewBox="0 0 360 850"
      className="skills-diagram skills-diagram-mobile"
      role="img"
      aria-labelledby="skills-mobile-title skills-mobile-desc"
    >
      <title id="skills-mobile-title">
        Arquitetura tecnológica em formato vertical
      </title>
      <desc id="skills-mobile-desc">
        O frontend e o banco de dados se comunicam com a API principal. A API
        também se comunica com middleware e IA. A infraestrutura aparece como
        camada de suporte.
      </desc>

      {/* Frontend ↔ API */}
      <path className="skills-wire skills-wire-lime" d={frontendToApi} />
      <path className="skills-wire skills-wire-cyan" d={apiToFrontend} />

      {/* API ↔ Database */}
      <path className="skills-wire skills-wire-cyan" d={apiToDatabase} />
      <path className="skills-wire skills-wire-lime" d={databaseToApi} />

      {/* API ↔ Secondary module, routed around the database */}
      <path className="skills-wire skills-wire-lime" d={apiToProcessing} />
      <path className="skills-wire skills-wire-cyan" d={processingToApi} />

      <Packet path={frontendToApi} variant="lime" duration="1.8s" />
      <Packet path={apiToFrontend} variant="cyan" duration="2s" />
      <Packet path={apiToDatabase} variant="cyan" duration="2.2s" />
      <Packet path={databaseToApi} variant="lime" duration="2.5s" />
      <Packet path={apiToProcessing} variant="lime" duration="3s" />
      <Packet path={processingToApi} variant="cyan" duration="3.2s" />

      <TechNode
        x={35}
        y={35}
        width={290}
        height={105}
        title="FRONTEND"
        subtitle="React · Next.js · TypeScript"
        variant="lime"
      />

      <TechNode
        x={35}
        y={205}
        width={290}
        height={110}
        title="API PRINCIPAL"
        subtitle="Node.js · PHP · Java"
        variant="lime"
      />

      <TechNode
        x={35}
        y={385}
        width={290}
        height={105}
        title="DATABASE"
        subtitle="PostgreSQL · SQL"
        variant="cyan"
      />

      <TechNode
        x={35}
        y={535}
        width={290}
        height={90}
        title="MIDDLEWARE · IA"
        subtitle="Processamento e serviços"
        variant="cyan"
      />

      {/* Infrastructure support layer */}
      <g className="skills-infrastructure">
        <path d="M180 625 V675" className="skills-support-line" />
        <rect
          x="20"
          y="675"
          width="320"
          height="130"
          rx="14"
          className="skills-infrastructure-panel"
        />
        <path
          d="M40 676 H320"
          stroke="url(#skills-support-gradient)"
          strokeWidth="2"
        />
        <text
          x="180"
          y="710"
          className="skills-infra-title"
          textAnchor="middle"
        >
          INFRAESTRUTURA
        </text>
        <text
          x="180"
          y="741"
          className="skills-infra-subtitle"
          textAnchor="middle"
        >
          Git · Docker · Linux
        </text>
        <text
          x="180"
          y="764"
          className="skills-infra-subtitle"
          textAnchor="middle"
        >
          Cloud · Deploy · CI/CD
        </text>
      </g>
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-header">
          <span className="skills-eyebrow">
            <span className="skills-eyebrow-dot" />
            STACK & ARQUITETURA
          </span>

          <h2 className="skills-heading">
            Meu ecossistema <span>tecnológico.</span>
          </h2>

          <p className="skills-description">
            Tecnologias e componentes que utilizo para construir aplicações,
            conectar serviços e estruturar soluções.
          </p>
        </header>

        <div className="skills-architecture">
          <div className="skills-legend" aria-label="Legenda do diagrama">
            <span>
              <i className="skills-legend-dot skills-legend-lime" />
              Aplicação
            </span>
            <span>
              <i className="skills-legend-dot skills-legend-cyan" />
              Dados e serviços
            </span>
            <span>
              <i className="skills-legend-line" />
              Comunicação bidirecional
            </span>
          </div>

          <DesktopArchitecture />
          <MobileArchitecture />

          <p className="skills-caption">
            Representação conceitual das tecnologias e de suas relações. A
            implementação pode variar conforme o projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
