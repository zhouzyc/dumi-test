/**
 * 热启动配置
 */
export const devServer  = {
  host:"127.0.0.1",
  port:8000,
  https:false,
};

export default {
  '/api': {
    'target': '127.0.0.1',
    'changeOrigin': true,
  },
}
