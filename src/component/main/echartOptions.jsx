// 毕业生规模柱状图
const graduateSize = {
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['2016广工毕业生', '2017广工毕业生', '2018广工毕业生', '2018华农毕业生', '2018广外毕业生', '2018华工毕业生'],
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        min: 2000,
        max: 14000
    },
    series: [
        {
            type: 'bar',
            data: [11324, 11339, 11371, 10130, 5890, 9416],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}人'
                }
            }
        }
    ]
};

// 毕业生学院分布南丁格尔图
const graduateCollege = {
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
      {
        type: 'pie',
        roseType: 'angle', // 设置成南丁格尔图
        radius: '55%',
        data: [
          {value: 5492, name: '管理学院'},
          {value: 3096, name: '自动化学院'},
          {value: 2988, name: '机电工程学院'},
          {value: 2674, name: '材料与能源学院'},
          {value: 2645, name: '土木与交通工程学院'},
          {value: 2545, name: '信息工程学院'},
          {value: 2746, name: '艺术设计学院'},
          {value: 2273, name: '轻工化工学院'},
          {value: 2660, name: '计算机学院'},
          {value: 1416, name: '经济与贸易学院'},
          {value: 1185, name: '物理与光电工程学院'},
          {value: 1014, name: '环境科学与工程学院'},
          {value: 999, name: '外国语学院'},
          {value: 825, name: '政法学院'},
          {value: 881, name: '应用数学学院'},
          {value: 595, name: '建筑与城市规划学院'}
        ]
      }
    ]
  };

// 毕业生性别结构柱状图
const graduateGender = {
    tooltip: {},
    legend: {
        data: ['男生', '女生'],
        top: '8%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['2016广工毕业生', '2017广工毕业生', '2018广工毕业生', '2018华农毕业生', '2018华工毕业生']
    },
    yAxis: [
        {
            type: 'value',
            name: '男生',
            min: 2000,
            max: 10000
        },
        {
            type: 'value',
            name: '女生',
            min: 2000,
            max: 10000
        }
    ],
    series: [
        {
            name: '男生',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}人'
                }
            },
            data: [7777, 7778, 7758, 4545, 5680]
        },
        {
            name: '女生',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}人'
                }
            },
            yAxisIndex: 1,
            data: [3547, 3561, 3613, 5585, 3736]
        }
    ]
};

// 2018年各学院毕业生性别结构柱状图
const collegeGender = {
    title: {
        text: '2018年各学院毕业生性别比例'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['男生', '女生'],
        top: '5%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        min: 0,
        max: 2000
    },
    yAxis: {
        data: ['机电工程学院', '自动化学院', '轻工化工学院', '信息工程学院', '土木与交通工程学院', '管理学院', '计算机学院', '材料与能源学院', '环境科学与工程学院', '外国语学院', '应用数学学院', '物理与光电工程学院', '艺术与设计学院', '政法学院', '建筑与城市规划学院', '经济与贸易学院'],
        axisTick: {
            alignWithLabel: true
        }
    },
    series: [
        {
            name: '男生',
            type: 'bar',
            stack: '总人数',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [912, 911, 560, 698, 726, 646, 757, 832, 266, 48, 235, 361, 468, 64, 90, 184]
        },
        {
            name: '女生',
            stack: '总人数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [106, 95, 250, 136, 140, 1183, 107, 90, 94, 300, 59, 46, 462, 176, 78, 291]
        }
    ]
};

// 毕业去向饼图
const graduateWhere = {
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
      {
        type: 'pie',
        radius: '55%',
        data: [
          {value: 953, name: '机关, 部队, 党群及政法系统'},
          {value: 1220, name: '事业单位'},
          {value: 27196, name: '企业单位'},
          {value: 820, name: '其他就业形式'},
          {value: 2069, name: '升学'},
          {value: 820, name: '出国(境)'},
          {value: 956, name: '未就业'},
        ]
      }
    ]
};

// 2018年省内部分高校升学情况柱状图
const graduateRise = {
    title: {
        text: '2018年省内部分高校升学情况'
    },
    tooltip: {},
    legend: {
        data: ['本科毕业人数', '国内升学人数'],
        top: '8%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['2018广工', '2018华农', '2018华工', '2018中大']
    },
    yAxis: [
        {
            type: 'value',
            name: '本科毕业人数',
            min: 0,
            max: 12000
        },
        {
            type: 'value',
            name: '国内升学人数',
            min: 0,
            max: 12000
        }
    ],
    series: [
        {
            name: '本科毕业人数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}人'
                }
            },
            data: [10057, 8822, 5680, 6970]
        },
        {
            name: '国内升学人数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}人'
                }
            },
            yAxisIndex: 1,
            data: [856, 1136, 1493, 2322]
        }
    ]
};

// 毕业生升学选择的主要院校
const riseCollege = {
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
        {
          type: 'pie',
          radius: '55%',
          data: [
            {value: 1138, name: '广东工业大学'},
            {value: 218, name: '华南理工大学'},
            {value: 93, name: '中山大学'},
            {value: 57, name: '暨南大学'},
            {value: 40, name: '深圳大学'},
            {value: 22, name: '哈尔滨工业大学'},
            {value: 44, name: '华南师范大学'},
            {value: 24, name: '广东外语外贸大学'}
          ]
        }
    ]
};

// 本科生就业行业分布
const industry = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
        {
          name: "2016-2018本科生就业主要行业分布",
          type: 'pie',
          radius: '55%',
          data: [
            {value: 61.52, name: '制造业'},
            {value: 21.55, name: '建筑业'},
            {value: 74.73, name: '信息传输, 软件和信息技术服务业'},
            {value: 19.77, name: '金融业'},
            {value: 15.45, name: '批发和零售业'},
            {value: 12.71, name: '教育'},
            {value: 12.47, name: '电力, 热力, 燃气及水生产和供应业'},
            {value: 12.99, name: '房地产业'}
          ]
        }
    ]
};

// 就业单位规模分布
const companySize = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
        {
          type: 'pie',
          radius: '55%',
          data: [
            {value: 41.6, name: '1000人以上'},
            {value: 10.91, name: '501-1000人'},
            {value: 14.51, name: '201-500人'},
            {value: 18.79, name: '51-200人'},
            {value: 13.93, name: '50人及以下'}
          ]
        }
    ]
};

// 2016-2017主要职业类型分布
const graduateJob = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
        {
          name: "2016-2017毕业生主要职业类型分布",
          type: 'pie',
          radius: '55%',
          data: [
            {value: 42.09, name: '工程技术人员'},
            {value: 9.13, name: '行政办公人员'},
            {value: 5.66, name: '企业管理人员'},
            {value: 5.56, name: '科研人员'},
            {value: 3.43, name: '购销人员'},
            {value: 3.58, name: '金融业务人员'},
            {value: 3.55, name: '经济业务人员'}
          ]
        }
    ]
};

// 2016-2018本科生就业薪酬
const salary = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['2016本科生', '2017本科生', '2018本科生'],
        top: '8%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['3000元以下', '3000-3999元', '4000-4999元', '5000-5999元', '6000-6999元', '7000-7999元', '8000-8999元','9000元以上'],
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {type: 'value'},
    series: [
        {
            name: '2016本科生',
            type: 'line',
            data: [9.67, 35.29, 29.03, 12.95, 6.85, 3.01, 1.57, 1.62]
        },
        {
            name: '2017本科生',
            type: 'line',
            data: [7.02, 25.77, 27.35, 19.66, 9.93, 4.11, 3.38, 2.78]
        },
        {
            name: '2018本科生',
            type: 'line',
            data: [3.25, 15.79, 25.20, 23.80, 13.71, 7.47, 4.36, 6.42]
        }
    ]
};

// 2016-2018各学院薪酬
const collegeSalary = {
    tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        min: 3000,
        max: 8000
    },
    legend: {
        data: ['2016平均薪酬', '2017平均薪酬', '2018平均薪酬'],
        top: '2%'
    },
    yAxis: {
        data: ['机电工程学院', '自动化学院', '轻工化工学院', '信息工程学院', '土木与交通学院', '管理学院', '计算机学院', '材料与能源学院', '环境科学与工程学院', '外国语学院', '应用数学学院', '物理与光电工程学院', '艺术与设计学院', '政法学院', '建筑与城市规划学院', '经济与贸易学院'],
        axisTick: {
            alignWithLabel: true
        }
    },
    series: [
        {
            name: "2016平均薪酬",
            type: 'bar',
            data: [4799, 5030, 3904, 5406, 3996, 4033, 6246, 4126, 3911, 3850, 4424, 4807, 4295, 3429, 3879, 3918],
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            }
        },
        {
            name: "2017平均薪酬",
            type: 'bar',
            data: [5403, 5726, 4143, 5908, 4634, 4375, 6552, 4896, 4116, 4306, 4766, 5316, 4068, 3750, 4215, 4398],
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            }
        },
        {
            name: "2018平均薪酬",
            type: 'bar',
            data: [5098, 5710, 4482, 6554, 5596, 4990, 7369, 5131, 4313, 4564, 5904, 5871, 4493, 3742, 4819, 4859],
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            }
        }
    ]
};

export {collegeSalary, salary, graduateJob, companySize, graduateSize, graduateCollege, graduateGender, collegeGender, graduateWhere, graduateRise, riseCollege, industry};