# Coffee - React + TypeScript + Vite

<img src="public/images/projeto.png">

ps: diego me controta 🤞🚀

Veja como ficou a aplicação, clique no link abaixo
- [ Deploy ](https://coffee-kgefi1q9t-lucasrvasconcelos.vercel.app/)

Instruções para instalação do projeto:

Após a clonagem do projeto, na pasta raiz, rode o seguinte comando:
```bash
pnpm install
```

Depois de instalado todas as dependencias, rode o seguinte comando:
```bash
pnpm dev
```

Nesse projeto foi usado alguns conceitos de estado "`state`", imutabilidade e contexto "`createContext, useContext, context.Provider`"

Foi desenvolvido usando as tecnologias: `Vite + TypeScript` e `Tailwind`

Utilizei de algumas bibliotecas de Ui/Design como: `sonner` e `radix-ui`

Fiz pequenas validações com a biblioteca: `zod` junto com `react-hook-form` 

## Dicas:

- Recomendo que de modo geral utilize do ESLint pois facilita o desenvolvimento.
- A Rockeatseat já tem configurações prontas com padrões que utilizam. (`Recomendado`)

1° Para instalar ESLint:
```bash
pnpm i eslint -D
```
2° Instalando as configurações padrões da rocketseat
```bash
pnpm i @rocketseat/eslint-config -D
```
3° Adicionar '@rocketseat/eslint-config/react' no arquivo .ESLINTRS.CJS
```json
extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@rocketseat/eslint-config/react'
  ],
```
4° Para que o código seja corrigido automaticamente, você vai precisar alterar o arquivo de configuração do VSCODE.
- Abra o arquivo settings.json e adicione a linha:
  
  ```json
  "editor.codeActionsOnSave": {
        	"source.fixAll.eslint": true,
    	},
  ```


