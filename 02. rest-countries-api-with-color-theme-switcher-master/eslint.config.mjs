import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier"; // Prettier 플러그인 추가

export default tseslint.config(
  {
    ignores: ['**/build/**', '**/dist/**', 'src/some/file/to/ignore.ts'],
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: 'module',
      globals: globals.browser
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          trailingComma: "es5" // JSX에서 쉼표가 강제되지 않도록 설정
        }
      ],
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "warn" // 사용하지 않는 변수 경고 표시
    }
  }
);
