export const portfolio = {
  name: "Ruchit Sheth",
  role: "Quantitative Analyst & Software Engineer",
  bio: "I build quantitative systems and software that sit at the intersection of finance and engineering. B.Tech IT graduate from DJSCE, Mumbai.",
  location: "Mumbai, India",
  status: "Available Now",
  email: "ruchitsheth127@gmail.com",
  github: "https://github.com/ruchit-sheth",
  linkedin: "https://www.linkedin.com/in/ruchit-sheth-/",
  discord: "https://discordapp.com/users/762359666675154984",
  instagram: "https://instagram.com/ruchitsheth1331",
  cvUrl: "/ruchit_sheth_resume.pdf",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects" },
    { value: "1", label: "Research Papers" },
    { value: "B.Tech", label: "DJSCE Graduate" }
  ],
  projects: [
    {
      name: "TacticGen AI",
      url: "https://example.com/tacticgen-ai",
      summary: "Football tactical intelligence platform built around match-event data, clustering, and grounded LLM recommendations.",
      descriptionPoints: [
        "Built an end-to-end pipeline ingesting raw match events from StatsBomb and API-Football.",
        "Computed 10+ tactical metrics across 10 matches per opponent to surface weak zones and style patterns.",
        "Engineered a grounded LLM layer with structured opponent context to generate data-cited recommendations."
      ],
      stack: ["Python", "FastAPI", "D3.js", "Pandas", "StatsBomb", "API-Football", "Anthropic API"],
    },
    {
      name: "Quantitative Asset Management & Risk Analysis System",
      url: "https://example.com/finflow",
      summary: "Quantitative investment platform for market feeds, asset risk tracking, and portfolio optimization.",
      descriptionPoints: [
        "Integrated real-time market feeds via yfinance to track asset performance and volatility for 50+ users.",
        "Implemented ARMA and Prophet models to forecast asset prices and support investment strategy formulation.",
        "Generated automated performance reports to visualize profit and loss scenarios for stakeholders."
      ],
      stack: ["Python", "Pandas", "NumPy", "REST APIs", "yfinance", "ARMA", "Prophet"],
    },
    {
      name: "Self-Healing Code",
      url: "https://example.com/self-healing-code",
      summary: "Autonomous code repair framework that detects failures, proposes fixes, and opens follow-up pull requests.",
      descriptionPoints: [
        "Detects bug patterns and generates repair candidates using an LLM-assisted workflow.",
        "Automates GitHub PR creation so fixes can be reviewed and merged with minimal manual handling.",
        "Designed as a self-healing loop that keeps iterating until the target fix is validated."
      ],
      stack: ["Python", "LLM", "GitHub API", "Automation"],
    }
  ],
  skills: {
    "Languages": ["Python", "C++", "SQL"],
    "Backend / Infra": ["React", "FastAPI", "Redis", "Celery", "Docker"],
    "Quant": ["Quantitative Finance", "Portfolio Optimization", "Backtesting"],
    "ML / Data": ["LLM", "RAG", "StatsBomb API", "D3.js", "Pandas", "NumPy"]
  },
  about: "I'm a recent B.Tech IT graduate from DJSCE, Mumbai with a deep interest in quantitative finance and systems engineering. I've built portfolio optimization tools, autonomous code repair frameworks, and AI-powered football analytics platforms. I'm currently targeting quant research and SWE roles in Mumbai."
}
