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
};
