// 引入 echarts 核心模块。
import * as echarts from 'echarts/core';
//引入柱状图，折线图组件和饼图组件
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    type BarSeriesOption,
    LineChart,
    type LineSeriesOption,
    PieChart,
    type PieSeriesOption
} from 'echarts/charts'; 
// 引入标题、提示框、网格、数据集和数据转换器组件。
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    type TitleComponentOption,
    TooltipComponent,
    type TooltipComponentOption,
    GridComponent,
    type GridComponentOption,
    // 数据集组件
    DatasetComponent,
    type DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    //图例组件 用于展示不同系列的标识和名称，并能够控制这些系列的显示和隐藏
    LegendComponent,
    type LegendComponentOption,
    //工具箱组件 包含多个按钮，如数据视图、刷新、保存图片、数据区域缩放等。
    ToolboxComponent, 
    type ToolboxComponentOption,
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器。
import {
    CanvasRenderer
} from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type EChartsOption = echarts.ComposeOption<
  BarSeriesOption | 
  LineSeriesOption | 
  PieSeriesOption |
  TitleComponentOption | 
  TooltipComponentOption |
  GridComponentOption | 
  DatasetComponentOption |
  LegendComponentOption |
  ToolboxComponentOption 
>;

// 注册必须的组件
echarts.use(
    [
        BarChart, 
        LineChart, 
        PieChart,

        TitleComponent, 
        TooltipComponent, 
        GridComponent, 
        DatasetComponent,
        TransformComponent,
        LegendComponent,
        ToolboxComponent,

        LabelLayout,
        UniversalTransition,

        CanvasRenderer
        
    ]
);

export default echarts