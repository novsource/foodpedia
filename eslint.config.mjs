import antfu from '@antfu/eslint-config'

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   ...nextTs,
//   // Override default ignores of eslint-config-next.
//   globalIgnores([
//     // Default ignores of eslint-config-next:
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
// ]);

const eslintConfig = antfu({
  ignores: [
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ],

  nextjs: true,

  typescript: true,
},
)

export default eslintConfig
