// process.env.UMI_ENV === 'local'
export default {
  devtool:'source-map',
  define: {
    "process.env.UMI_ENV":'local',
    "process.env.dd_app_id":'2',
  },
};
