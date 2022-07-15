export const breadth = (node: any[]) => {
  const nodes = [];
  const stack = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      //取第一个
      const item: any = stack.shift();
      const children = item.children || [];
      nodes.push(item);
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i]);
      }
    }
  }
  return nodes;
};
