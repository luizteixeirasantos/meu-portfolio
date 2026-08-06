<h2>Estrutura do portifólio</h2>

```
meu-portfolio/
├── package.json               # Configuração do Workspace (Root)
├── apps/
│   └── web/                   # Aplicação principal (React + Vite)
│       ├── index.html
│       ├── package.json
│       ├── vite.config.js
│       ├── src/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   ├── assets/        # Imagens, vídeos, fontes locais
│       │   ├── components/    # Componentes específicos da app (ex: Sections)
│       │   ├── layouts/       # MainLayout (com Cursor, Nav, Footer)
│       │   ├── pages/         # Home, About, Projects (se houver rotas)
│       │   ├── styles/        # CSS global e integrações Tailwind
│       │   └── animations/    # Timelines e lógicas complexas do GSAP isoladas
│       └── public/
├── packages/
│   ├── ui/                    # Sistema de Design (@luiz/ui)
│   │   ├── package.json
│   │   ├── index.js           # Exporta todos os componentes
│   │   └── src/
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── Typography/
│   │       └── Icons/
│   ├── hooks/                 # Custom Hooks (@luiz/hooks)
│   │   ├── package.json
│   │   ├── index.js
│   │   ├── useScroll.js       # Hook para monitorar o Lenis
│   │   ├── useMousePos.js     # Hook para o Custom Cursor
│   │   └── useMediaQuery.js
│   ├── utils/                 # Funções auxiliares (@luiz/utils)
│   │   ├── package.json
│   │   ├── index.js
│   │   ├── cn.js              # Utilitário para merge de classes Tailwind (clsx + twMerge)
│   │   └── formatters.js
│   └── config/                # Configurações compartilhadas (@luiz/config)
│       ├── package.json
│       ├── tailwind.config.js # Configuração base do Tailwind para todo o monorepo
│       ├── eslint.config.js
│       └── prettier.config.js
```
