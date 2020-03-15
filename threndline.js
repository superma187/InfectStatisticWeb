		var n=7;
		var infsum=0;	
		var susum=0;
        var date = [];
		var base=new Date();
        var infectedData = [];
		var suspectedData=[];
        for (var i = 0; i <n; i++) {
            var now =new Date();
			now.setDate(base.getDate()-(n-i));
            date.push([now.getFullYear(), now.getMonth(), now.getDate()].join('/'));
			infsum+=Math.random()*100;
			susum+=Math.random()*100;
            infectedData.push(infsum);
			suspectedData.push(susum);
        }
   
     // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('trend line'));
        myChart.setOption({
            tooltip: {
                // 当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
                trigger: 'item',              
                
            },
            title: {
                left: 'center',
                text: '疫情累计确诊/疑似趋势'
            },
            // toolbox：这是ECharts中的工具栏。内置有导出图片、数据视图、动态类型切换、数据区域缩放、重置五个工具。
            toolbox: {
                // feature 各工具配置项: dataZoom 数据区域缩放;restore 配置项还原;saveAsImage下载为图片;magicType动态类型切换
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'  // y轴不缩放，Index默认为0
                    },
                    restore: {},
                 
                }
            },
            xAxis: {
                type: 'category', // category为一级分类,适用于离散的类目数据   
                //boundaryGap: false,  // 无间隙
                data: date
            },
            yAxis: {
                type: 'value', // 'value' 数值轴，适用于连续数据。
                boundaryGap: [0, '100%'] // 分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，
            },
            /*dataZoom: [{                 // 内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系 
                type: 'inside',
                start: 0,
                end: 10
            },{
                                // handleIcon 手柄的 icon 形状，支持路径字符串
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',        //  控制手柄的尺寸，可以是像素大小，也可以是相对于 dataZoom 组件宽度的百分比，默认跟 dataZoom 宽度相同。
                handleStyle: {
                    color: 'pink',
                    shadowBlur: 3,      // shadowBlur图片阴影模糊值，shadowColor阴影的颜色
                    shadowColor: 'red',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            } ],*/
			
            series: [
                {
                    name: '累计确诊',
                    type: 'line',
                    //smooth: true,  // 开启平滑处理。true的平滑程度相当于0.5                
                    sampling: 'average', //  取过滤点的平均值
                    itemStyle: {                
                   
                            color: '#FF3030' //  图形的颜色。
                        
                    },
                    
                    data: infectedData
                },
				{
                    name: '累计疑似',
                    type: 'line',
                    //smooth: true,  // 开启平滑处理。true的平滑程度相当于0.5                
                    sampling: 'average', //  取过滤点的平均值
                    itemStyle: {                
                   
                            color: '#FFFF00' //  图形的颜色。
                        
                    },
                    
                    data: suspectedData
                }
            ]
        });