module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: [
        "firebasestorage.googleapis.com",
        "res.cloudinary.com",
        "hhanime3d.com",
      ],
    },
    webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      );

      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/, // Xử lý khi được import trong JS/TS
          resourceQuery: { not: [/url/] }, // Không áp dụng nếu có `?url`
          use: ["@svgr/webpack"], // Sử dụng @svgr/webpack
        }
      );
      fileLoaderRule.exclude = /\.svg$/i;

      return config;
    },
    async redirects() {
      return [
        {
          source: '/:path*',  // Sử dụng đường dẫn tương đối
          destination: 'https://hhhihi.site/:path*',
          permanent: true,  // Mã trạng thái 301 cho redirect vĩnh viễn
        },
      ]
    },
  };

  return nextConfig;
};
