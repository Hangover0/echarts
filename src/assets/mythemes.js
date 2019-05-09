(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('mythemes', {
        "color": [
            "#3fb1e3",
            "#6be6c1",
            "#e3b67f",
            "#aaa0e6",
            "#c4ebad",
            "#96dee8"
        ],
        "backgroundColor": "#03274d",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "#d6d6d6"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "2"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 0,
                    "barBorderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "barBorderWidth": 0,
                    "barBorderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#e6a0d2",
                    "color0": "transparent",
                    "borderColor": "#e6a0d2",
                    "borderColor0": "#3fb1e3",
                    "borderWidth": "2"
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "rgba(204,204,204,0.52)"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "1",
                    "color": "#cccccc"
                }
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#3fb1e3",
                "#6be6c1",
                "#e3b67f",
                "#aaa0e6",
                "#c4ebad",
                "#96dee8"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(63,177,227)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(63,177,227)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(238,238,238,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#c9c8c8"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(238,238,238,0.15)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(238,238,238,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#c9c8c8"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(238,238,238,0.15)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(238,238,238,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#c9c8c8"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(238,238,238,0.15)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(238,238,238,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#c9c8c8"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(238,238,238,0.15)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999999"
                },
                "emphasis": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#999999"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#626c91",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#626c91",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#626c91"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#626c91",
                    "borderColor": "#626c91",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#626c91",
                    "borderColor": "#626c91",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#3fb1e3",
                "borderColor": "rgba(63,177,227,0.15)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#626c91"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#626c91"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#2a99c9",
                "#afe8ff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(114,230,212,0.25)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        }
    });
}));
