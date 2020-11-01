module.exports = {
  async redirects() {
    return [
      {
        source: "/download",
        destination: "https://apps.apple.com/app/id1526291340",
        permanent: true,
      },
    ];
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  },
};
