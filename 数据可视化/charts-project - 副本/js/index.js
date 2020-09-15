(function () {
  // 切换
  $(".monitor .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active")
    //   选取对应索引号的content
    $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()
  })

  $(".marquee-view .marquee").each(function () {
    console.log($(this))

    var rows = $(this).children().clone()
    $(this).append(rows)
  })
}());

// 点位分布统计模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie"))
  // 2. 指定配置项和数据
  var option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: "点位分布",
        type: "pie",
        radius: ['10%', '70%'],
        center: ["50%", "50%"],
        roseType: "area",
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ],
        // 文字调整
        label: {
          fontSize: 10
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option)

  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize()
  })
}());

(function () {

  var itme = {

    // 设置数值
    value: 1200,
    //  设置柱体颜色
    itemStyle: {
      color: "#254065"
    },
    //  工具提示隐藏
    tooltip: {
      extraCssText: "opacity:0"
    }

  }

  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar"))
  // 2. 指定配置和数据
  option = {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0, 0, 0, 1,
      [
        { offset: 0, color: '#00fffb' }, // 0 起始颜色
        { offset: 1, color: '#0061ce' }  // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: 'item',
      //   axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      //   }
    },
    grid: {
      //  设置表格位置
      top: '0',
      left: '3%',
      right: '3%',
      bottom: '0%',
      // 显示刻度
      containLabel: true,
      // 是否显示表格
      show: true,
      // 边框颜色
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    xAxis: [
      {
        // 使用类目，必须有data属性
        type: 'category',
        // 使用 data 中的数据设为刻度文字
        data: ['上海', '广州', '北京', '深圳', '合肥', '', '...', '', '杭州', '厦门', '济南', '成都', '重庆'],
        axisTick: {
          // true意思：图形和刻度居中中间
          // false意思：图形在刻度之间
          alignWithLabel: false,

          //  是否显示刻度
          show: false
        },
        //  x 坐标轴文字标签样式设置
        axisLabel: {
          color: 'pink'
        },
        //  xzj
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
            // width:8,  x轴线的粗细
            // opcity: 0,   如果不想显示x轴线 则改为 0
          }
        }
      }
    ],
    yAxis: [
      {
        // 使用类目，必须有data属性
        type: 'value',
        // 使用 data 中的数据设为刻度文字

        axisTick: {
          // true意思：图形和刻度居中中间
          // false意思：图形在刻度之间
          alignWithLabel: false,

          //  是否显示刻度
          show: false
        },
        //  x 坐标轴文字标签样式设置
        axisLabel: {
          color: 'pink'
        },
        //  xzj
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)',
            // width:8,  x轴线的粗细
            // opcity: 0,   如果不想显示x轴线 则改为 0
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [2100, 1900, 1700, 1560, 1400, itme,
          itme,
          itme,


          900, 750, 600, 480, 240]
      }
    ]
  }

  // 3. 把配置给实例对象
  myChart.setOption(option)
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize()
  })
})();
(function () {

  var data= [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  ]
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line"));
  // 2. 指定配置和数据
  var option = {

    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内

    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false// 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd'// 文字颜色 
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }


    },
    series: [
      {
        name: "预期销售额",
        type: "line",
        stack: "总量",
        //  把折线修饰为圆滑 series 数据中添加 smooth 为 true
        smooth: true,
        data:data[0][0],
      },
      {
        name: "实际销售额",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data[0][1],
      },

    ]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize()
  })

  $(".caption a").click(function () {
    $(this).addClass("active").siblings("a").removeClass("active")
    // console.log(this.getAttribute("datat"))
    // console.log(data[this.getAttribute("datat")])
    var arr = datahy67u[$(this).index() - 1]
    console.log(arr);
    option.series[0].data = arr[0]
    option.series[1].data = arr[0]
    myChart.setOption(option);

    
  })

  var as = $(".caption a")
  var index = 0
  var timer = setInterval(function () {
    index++
    if (index >= 4) {
      index = 0
    }
    as.eq(index).click()
  }, 1000)
  $(".sales").hover(function () {
    clearInterval(timer)
  }, function () {
    clearInterval(timer)
    timer = setInterval(function () {
      index++
      if (index >= 4) {
        index = 0
      }
      as.eq(index).click()
    }, 1000)
  })
})();


