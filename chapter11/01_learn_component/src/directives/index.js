import registerFormatTime from './format-time';
export default function registerDirectives(app) {
  // 1.注册格式化时间戳的指令
  registerFormatTime(app);
}