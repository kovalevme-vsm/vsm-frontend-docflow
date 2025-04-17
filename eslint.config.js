import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, importPlugin.flatConfigs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@tanstack/query': pluginQuery,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@tanstack/query/exhaustive-deps': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/named': 'off',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
          pathGroups: [
            { group: 'internal', position: 'after', pattern: 'pages/**' },
            { group: 'internal', position: 'after', pattern: 'widgets/**' },
            { group: 'internal', position: 'after', pattern: 'features/**' },
            { group: 'internal', position: 'after', pattern: 'entities/**' },
            { group: 'internal', position: 'after', pattern: 'shared/**' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        },
      ],
    },
  }
);
