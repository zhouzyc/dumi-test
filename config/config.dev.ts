// process.env.UMI_ENV === 'dev'
export default {
  devtool:'source-map',
  define: {
    "process.env.UMI_ENV":'dev',
    "process.env.dd_app_id":'1',
  },
};
