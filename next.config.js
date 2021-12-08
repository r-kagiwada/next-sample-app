/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // Imageを他サイトから取得するとき、ここでドメインを定義しないと
    // next/image Un-configured Host エラーが起こる
    domains: ['via.placeholder.com'],
  },
}
