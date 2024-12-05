import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: enUS,
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsFormulaUIPlugin);
// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
    "appVersion": "0.5.1",
    "id": "-Gdoul",
    "locale": "enUS",
    "name": "",
    "resources": [
      {
        "data": "",
        "name": "SHEET_RANGE_PROTECTION_PLUGIN"
      },
      {
        "data": "{}",
        "name": "SHEET_WORKSHEET_PROTECTION_PLUGIN"
      },
      {
        "data": "{}",
        "name": "SHEET_WORKSHEET_PROTECTION_POINT_PLUGIN"
      },
      {
        "data": "{}",
        "name": "SHEET_DEFINED_NAME_PLUGIN"
      },
      {
        "data": "{\"DN7M9Z0wb0ceq9EgFQMB-\":[],\"mNyUyC0RfhAKd6GrgCmqo\":[]}",
        "name": "SHEET_DATA_VALIDATION_PLUGIN"
      },
      {
        "data": "{}",
        "name": "SHEET_AuthzIoMockService_PLUGIN"
      }
    ],
    "sheetOrder": [
      "_0dHCxK3dPKFqzMB3fffY"
    ],
    "sheets": {
      "_0dHCxK3dPKFqzMB3fffY": {
        "cellData": {
          "0": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "1": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "s": "x3IX2h",
              "t": 1,
              "v": "XLOOKUP with multiple criteria"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "10": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hoodie\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 50.444854736328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hoodie"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Large\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 41.485076904296875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Large"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Black\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 39.839111328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Black"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$30.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$30.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "11": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hat\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 26.807357788085938
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hat"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Medium\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 56.12701416015625
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Medium"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Black\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 39.839111328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Black"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$25.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$25.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "12": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hat\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 26.807357788085938
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hat"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Medium\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 56.12701416015625
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Medium"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Gray\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 35.759979248046875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Gray"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$26.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$26.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "13": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hat\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 26.807357788085938
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hat"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Large\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 41.485076904296875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Large"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Black\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 39.839111328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Black"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$25.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$25.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "14": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hat\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 26.807357788085938
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hat"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Large\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 41.485076904296875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Large"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Red\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 30.886489868164062
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Red"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$24.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$24.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "2": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "3": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Item\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 32.50382995605469
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "iubEuo",
              "t": 1,
              "v": "Item"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Size\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 32.510986328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "-qpxUD",
              "t": 1,
              "v": "Size"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Color\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 39.023284912109375
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "-qpxUD",
              "t": 1,
              "v": "Color"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "Price\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 37.391632080078125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "-qpxUD",
              "t": 1,
              "v": "Price"
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            }
          },
          "4": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "T-shirt\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 45.521270751953125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "T-shirt"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Small\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 40.64778137207031
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Small"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Red\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 30.886489868164062
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Red"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$15.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$15.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "Item\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 32.50382995605469
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "iubEuo",
              "t": 1,
              "v": "Item"
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "Hoodie\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 50.444854736328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "-qpxUD",
              "t": 1,
              "v": "Hoodie"
            }
          },
          "5": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "T-shirt\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 45.521270751953125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "T-shirt"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Medium\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 56.12701416015625
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Medium"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Blue\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 33.33396911621094
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Blue"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$16.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$16.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "Size\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 32.510986328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Size"
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "Medium\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 56.12701416015625
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Medium"
            }
          },
          "6": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "T-shirt\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 45.521270751953125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "T-shirt"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Large\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 41.485076904296875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Large"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Red\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 3
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 30.886489868164062
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Red"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$17.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$17.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "Color\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 39.023284912109375
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Color"
            },
            "7": {
              "p": {
                "body": {
                  "dataStream": "Blue\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 33.33396911621094
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Blue"
            }
          },
          "7": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "T-shirt\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 45.521270751953125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "T-shirt"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Large\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 41.485076904296875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Large"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Blue\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 33.33396911621094
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Blue"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$16.50 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$16.50 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "p": {
                "body": {
                  "dataStream": "Price\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 37.391632080078125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Price"
            },
            "7": {
              "f": "=XLOOKUP(1,(B5:B15=H5)*(C5:C15=H6)*(D5:D15=H7),E5:E15)",
              "s": "pp1_54",
              "t": 1,
              "v": "$29.00 "
            }
          },
          "8": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hoodie\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 50.444854736328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hoodie"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Small\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 5
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 40.64778137207031
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Small"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Gray\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 35.759979248046875
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Gray"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$28.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$28.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "s": "19LduT",
              "t": 1,
              "v": "Price reverse search with default value for match model"
            },
            "7": {
              "f": "=XLOOKUP(1,(B5:B15=H5)*(C5:C15=H6)*(D5:D15=H7),E5:E15,,0,-1)",
              "s": "19LduT",
              "t": 1,
              "v": "$29.00 "
            }
          },
          "9": {
            "0": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "1": {
              "p": {
                "body": {
                  "dataStream": "Hoodie\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 50.444854736328125
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "DKBSJI",
              "t": 1,
              "v": "Hoodie"
            },
            "2": {
              "p": {
                "body": {
                  "dataStream": "Medium\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 6
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 56.12701416015625
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Medium"
            },
            "3": {
              "p": {
                "body": {
                  "dataStream": "Blue\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 4
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 33.33396911621094
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "khyLOZ",
              "t": 1,
              "v": "Blue"
            },
            "4": {
              "p": {
                "body": {
                  "dataStream": "$29.00 \r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 7
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": 52.89949035644531
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "pp1_54",
              "t": 1,
              "v": "$29.00 "
            },
            "5": {
              "p": {
                "body": {
                  "dataStream": "\r\n",
                  "paragraphs": [
                    {
                      "paragraphStyle": {
                        "horizontalAlign": 0
                      },
                      "startIndex": 0
                    }
                  ],
                  "textRuns": []
                },
                "documentStyle": {
                  "marginBottom": 2,
                  "marginLeft": 2,
                  "marginRight": 2,
                  "marginTop": 0,
                  "pageSize": {
                    "height": null,
                    "width": null
                  },
                  "renderConfig": {
                    "centerAngle": 0,
                    "horizontalAlign": 0,
                    "vertexAngle": 0,
                    "verticalAlign": 0,
                    "wrapStrategy": 0,
                    "zeroWidthParagraphBreak": 1
                  }
                },
                "drawings": {},
                "drawingsOrder": [],
                "id": "d"
              },
              "s": "19LduT",
              "t": 1,
              "v": ""
            },
            "6": {
              "s": "19LduT",
              "t": 1,
              "v": "Price reverse_search no default value for match model"
            },
            "7": {
              "f": "=XLOOKUP(1,(B5:B15=H5)*(C5:C15=H6)*(D5:D15=H7),E5:E15,,,-1)",
              "s": "19LduT",
              "t": 1,
              "v": "#VALUE!"
            }
          }
        },
        "columnCount": 20,
        "columnData": {
          "0": {
            "w": 88
          },
          "1": {
            "w": 88
          },
          "2": {
            "w": 88
          },
          "3": {
            "w": 88
          },
          "4": {
            "w": 88
          },
          "5": {
            "w": 88
          },
          "6": {
            "w": 387
          },
          "7": {
            "w": 88
          }
        },
        "columnHeader": {
          "height": 20,
          "hidden": 0
        },
        "defaultColumnWidth": 88,
        "defaultRowHeight": 24,
        "freeze": {
          "startColumn": -1,
          "startRow": -1,
          "xSplit": 0,
          "ySplit": 0
        },
        "hidden": 0,
        "id": "_0dHCxK3dPKFqzMB3fffY",
        "mergeData": [],
        "name": "Sheet2",
        "rightToLeft": 0,
        "rowCount": 1000,
        "rowData": {
          "0": {
            "h": 24
          },
          "1": {
            "h": 24
          },
          "10": {
            "h": 24
          },
          "11": {
            "h": 24
          },
          "12": {
            "h": 24
          },
          "13": {
            "h": 24
          },
          "14": {
            "h": 24
          },
          "2": {
            "h": 24
          },
          "3": {
            "h": 24
          },
          "4": {
            "h": 24
          },
          "5": {
            "h": 24
          },
          "6": {
            "h": 24
          },
          "7": {
            "ah": 24,
            "h": 24
          },
          "8": {
            "ah": 24,
            "h": 24
          },
          "9": {
            "ah": 24,
            "h": 24
          }
        },
        "rowHeader": {
          "hidden": 0,
          "width": 46
        },
        "scrollLeft": 0,
        "scrollTop": 0,
        "showGridlines": 1,
        "tabColor": "",
        "zoomRatio": 1
      }
    },
    "styles": {
      "-qpxUD": {
        "bd": {
          "b": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "r": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "t": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          }
        },
        "bl": 0,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      },
      "19LduT": {
        "bl": 0,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      },
      "DKBSJI": {
        "bd": {
          "b": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "l": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "r": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          }
        },
        "bl": 0,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      },
      "iubEuo": {
        "bd": {
          "b": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "l": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "r": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "t": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          }
        },
        "bl": 0,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      },
      "khyLOZ": {
        "bd": {
          "b": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "r": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          }
        },
        "bl": 0,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      },
      "pp1_54": {
        "bd": {
          "b": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          },
          "r": {
            "cl": {
              "rgb": "rgb(191,191,191)"
            },
            "s": 1
          }
        },
        "bl": 0,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "n": {
          "pattern": "$#,##0.00"
        },
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      },
      "some-bg-color": {
        "bg": {
          "rgb": "#A2B3F6"
        },
        "bl": null,
        "cl": null,
        "ff": null,
        "fs": null,
        "ht": null,
        "it": null,
        "n": null,
        "ol": null,
        "pd": null,
        "st": null,
        "tb": null,
        "td": null,
        "tr": null,
        "ul": null,
        "vt": null
      },
      "this-is-bold": {
        "bd": {
          "b": null,
          "r": null
        },
        "bg": null,
        "bl": 1,
        "cl": null,
        "ff": null,
        "fs": null,
        "ht": null,
        "it": null,
        "n": null,
        "ol": null,
        "pd": null,
        "st": null,
        "tb": null,
        "td": null,
        "tr": null,
        "ul": null,
        "vt": null
      },
      "x3IX2h": {
        "bl": 1,
        "ff": "Arial",
        "fs": 11,
        "ht": 0,
        "it": 0,
        "ol": {
          "s": 0
        },
        "pd": {
          "b": 2,
          "l": 2,
          "r": 2,
          "t": 0
        },
        "st": {
          "s": 0
        },
        "tb": 0,
        "td": 0,
        "tr": {
          "a": 0,
          "v": 0
        },
        "ul": {
          "s": 0
        },
        "vt": 0
      }
    }
  }
);
