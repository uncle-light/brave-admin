// 解决tailwind 样式覆盖
export const setupFixStyle = (): void => {
  const meta = document.createElement("meta");
  meta.name = "naive-ui-style";
  document.head.appendChild(meta);
};
