<template>
  <div>xx分类管理</div>
  <div>
    <!--    <n-data-table :row-key="rowKey" :columns="columns" />-->
  </div>
</template>
<script lang="ts" setup>
import { DataTableColumns, NButton } from "naive-ui";
type RowData = {
  name: string;
  createBy: string;
  updateTime: string;
};
const data: RowData[] = [
  {
    name: "xxxx",
    createBy: "xxxxx",
    updateTime: "xxxxx",
  },
];
const columns: DataTableColumns<RowData> = [
  {
    title: "分类名",
    key: "name",
  },
  {
    title: "创建人",
    key: "createBy",
  },
  {
    title: "最后一次更新时间",
    key: "updateTime",
  },
  {
    title: "操作",
    key: "action",
    render(row) {
      return h(NButton, {
        size: "small",
        onClick: () => console.log(1),
        default: () => "Play",
      });
    },
  },
];
const rowKey = (rowData: RowData) => {
  console.log(rowData.name);
  return rowData.updateTime;
};
</script>
<style scoped></style>
