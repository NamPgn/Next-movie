// @ts-check

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      domains: ["firebasestorage.googleapis.com", "res.cloudinary.com","hhanime3d.com"],
    },
  };
  return nextConfig;
};
