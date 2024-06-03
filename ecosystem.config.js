module.exports = {
  apps: [
    {
      name: 'robson.dev',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
