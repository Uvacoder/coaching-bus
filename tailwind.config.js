// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      colors: {
        skoll: "#333641"
      }
    }
  },
  variants: { backgroundColor: ["hover", "focus", "active"] },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
