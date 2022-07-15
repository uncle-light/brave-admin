<template>
  <n-h3>xxx</n-h3>
  <n-space class="mb-4"><n-button type="info">新增</n-button></n-space>
  <n-data-table
    :data="data"
    :row-key="rowKey"
    :columns="columns"
    :max-height="250"
  />
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra> 噢！ </template>
      内容
      <template #footer> 尾部 </template>
    </n-card>
  </n-modal>
</template>
<script lang="ts" setup>
import { DataTableColumns, NButton, NButtonGroup } from "naive-ui";
const showModal = ref(false);

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
    render(row: RowData) {
      return h(
        NButtonGroup,
        action.map((item) =>
          h(
            NButton,
            {
              size: "small",
              strong: true,
              secondary: true,
              type: item.type as any,
              onClick: () => item.onClick(row),
            },
            { default: () => item.name }
          )
        )
      );
    },
  },
];

const rowKey = (rowData: RowData) => rowData.name;
import { useMessage, useDialog } from "naive-ui";
const message = useMessage();
const dialog = useDialog();
const handleButtonClick = (row: RowData) => {
  dialog.error({
    title: "提示",
    content: `确定要删除${row.name}`,
    positiveText: "确定",
    negativeText: "不确定",
    maskClosable: false,
    onPositiveClick: () => {
      message.error("删除失败");
      return false;
    },
  });
};
const action = [
  { name: "编辑", type: "info", onClick: () => (showModal.value = true) },
  {
    name: "删除",
    type: "error",
    onClick: (row: RowData) => handleButtonClick(row),
  },
];
onMounted(() => {
  // throw Error("KFC Crazy Thursday need 50$.");
});
</script>
<style scoped></style>
