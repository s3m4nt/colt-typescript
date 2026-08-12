# Colt TypeScript

A minimal TypeScript project demonstrating core language features and setup for compilation and execution.

## Features

- **Basics**: Simple `basics.ts` example using `Math.round`.
- **Types**: Demonstrates type annotations (`string`, `number`, `boolean`), type inference, `any`, and `unknown` in `types/variable-types.ts`.
- **Functions**: Shows function definitions and template literal usage in `functions/functions.ts`.

## Getting Started

### Prerequisites

- Node.js (>=14)
- npm (comes with Node.js)

### Installation

```bash
git clone git@github.com:s3m4nt/colt-typescript.git
cd colt-typescript
npm install
```

### Running TypeScript Directly

Without building, you can execute TypeScript files using `ts-node`:

```bash
npx ts-node basics.ts
npx ts-node types/variable-types.ts
npx ts-node functions/functions.ts
```

### Building and Running

To compile to JavaScript and run with Node:

```bash
npx tsc basics.ts && node basics.js
npx tsc types/variable-types.ts && node types/variable-types.js
npx tsc functions/functions.ts && node functions/functions.js
```

## Project Structure

```plain
.
├── basics.ts               # Simple TypeScript example
├── functions/
│   ├── functions.ts        # Function example with template literals
│   └── functions.js        # Compiled output
├── types/
│   ├── variable-types.ts   # Type annotation examples
│   └── variable-types.js   # Compiled output
├── tsconfig.json           # TypeScript compiler config
├── package.json
├── package-lock.json
└── README.md
```

## License

ISC
