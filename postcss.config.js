module.exports = {
    plugins: [
      "tailwindcss",
      "autoprefixer",
      "postcss-nested"
    ],
}

console.log("post.config", JSON.stringify(module.exports, null, 2))

// module.exports = {
//     plugins: [ require("tailwindcss")]
// }

