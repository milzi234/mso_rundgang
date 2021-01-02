var APP_DATA = {
  "scenes": [
    {
      "id": "0-aula",
      "name": "Aula",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0050158574027126,
        "pitch": -0.11344453815592814,
        "fov": 0.9420983572121656
      },
      "screens": [
        {
          "yaw": 1.7861318131345009,
          "pitch": -0.25744266112553,
          "viewOrientation": {yaw: 2, pitch: 0},
          "type": "video",
          "width": "320",
          "height": "240",
          "radius": "450",
          "extraTransforms": "rotateY(-13deg) rotateX(10deg) rotate(-2.5deg)",
          "videos": [
            {
              "id": "wel",
              "start": 3,
              "sources": [
                {src: '/assets/Aula_WEL.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "platzhalter",
              "title": "Platzhalter",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "videoTriggerHotspots": [
        {
          "yaw": -0.62657059190056,
          "pitch": -0.05,
          "title": "David Welfens",
          "text": "Herr Welfens erzählt über das musikalische Angebot am MSO",
          "video": "wel"
        },
        {
          "yaw": 2.2672379608328425,
          "pitch": -0.13384865851106298,
          "title": "LÖH",
          "text": "TBD",
          "video": "platzhalter"
        }
      ],
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-cafeteria_hinten",
      "name": "Cafeteria_Hinten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.19595375797581838,
        "pitch": 0.02613840725526373,
        "fov": 0.9420983572121656
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 2.3589693822818933,
          "pitch": -0.1287509369139599,
          "title": "p1",
          "text": "Text"
        },
        {
          "yaw": 0.2294703771040485,
          "pitch": -0.1703139207594191,
          "title": "p2",
          "text": "Text"
        },
        {
          "yaw": -1.975706789315911,
          "pitch": 0.18151180070114492,
          "title": "p3",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-chemieraum",
      "name": "Chemieraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.14895838741646727,
        "pitch": 0.07495119024798313,
        "fov": 0.9420983572121656
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.31741392534359036,
          "pitch": -0.02337668561827222,
          "title": "p1",
          "text": "Text"
        },
        {
          "yaw": 1.193504277916544,
          "pitch": -0.2610330705240944,
          "title": "p2",
          "text": "Text"
        },
        {
          "yaw": 1.20810096701166,
          "pitch": 0.04097955200757397,
          "title": "p3",
          "text": "Text"
        },
        {
          "yaw": 0.3125289175775343,
          "pitch": -0.14905195724804443,
          "title": "p4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-computerraum",
      "name": "Computerraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3020421040005346,
        "pitch": 0.10619691364797568,
        "fov": 0.9420983572121656
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.9125108577652359,
          "pitch": 0.16733582274142123,
          "title": "p1",
          "text": "Text"
        },
        {
          "yaw": -1.3503855313117104,
          "pitch": 0.21684099679843882,
          "title": "p2",
          "text": "Text"
        },
        {
          "yaw": -2.901525427931709,
          "pitch": 0.02691060966555625,
          "title": "p3",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-eingangshalle",
      "name": "Eingangshalle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3922172102998527,
        "pitch": 0.08778513881502548,
        "fov": 0.9420983572121656
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -1.0098353578576518,
          "pitch": -0.013717127246199112,
          "title": "p1",
          "text": "Text"
        },
        {
          "yaw": 0.4128059050609849,
          "pitch": -0.012316011358988632,
          "title": "p2",
          "text": "Text"
        },
        {
          "yaw": 2.364551019078739,
          "pitch": 0.1351655317603644,
          "title": "p3",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-kapelle",
      "name": "Kapelle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "screens": [
        {
          "yaw": 2.965,
          "pitch": -0.064,
          "type": "video",
          "width": 400, //"400", //"300",
          "height": 300, //"300", //"240",
          "radius": 420, //"420", // "820",
          "videos": [
            {
              "id": "lio",
              "sources": [
                {src: '/assets/Kapelle_LIO.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "platzhalter",
              "title": "Platzhalter",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -2.481127071650128,
          "pitch": -0.10269773357649647,
          "title": "Michele Lionetti",
          "text": "Christlich sein",
          "video": "lio"
        },
        {
          "yaw": 2.220024173851053,
          "pitch": -0.13809533582966083,
          "title": "SZW",
          "text": "Als Christ aktiv sein",
          "video": "platzhalter"
        }
      ]
    },
    {
      "id": "6-klassenraum",
      "name": "Klassenraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "screens": [
        {
          "yaw": 3,
          "pitch": 0,
          "type": "video",
          "width": "355",
          "height": "300",
          "radius": "640",
          "extraTransforms": "translateX(173px) translateY(-48px)",
          "videos": [
            {
              "id": "fio",
              "sources": [
                {src: '/assets/R025_FIO.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "got",
              "sources": [
                {src: '/assets/R025_GOT.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
        {
          "id" : "pinnwand",
          "yaw": -1.6,
          "pitch": 0,
          "type": "video",
          "width": "660",
          "height": "490",
          "radius": "620",
          "videos": [
            {
              "id": "unterricht",
              "start": 3,
              "sources": [
                {src: '/assets/R025_Unterricht.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -1.7943542769645013,
          "pitch": -0.43672089446297576,
          "title": "Die Waldritter",
          "text": "Peter Gotthardt über die Zusammenarbeit mit den Waldrittern",
          "video": "got"
        },
        {
          "yaw": 2.532264871860624,
          "pitch": 0.009982595662954452,
          "title": "Laura Fiorentino-Gatzka",
          "text": "Klassenraum R025",
          "video": "fio"
        },
        {
          "yaw": -1.3960798607887263,
          "pitch": -0.011423580121856958,
          "title": "Unterricht",
          "text": "Unterricht der fünften Klassen",
          "video": "unterricht",
          "screen": "pinnwand"
        }
      ]
    },
    {
      "id": "7-kunstraum",
      "name": "Kunstraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3565531580638677,
        "pitch": 0.02057625117156192,
        "fov": 0.9420983572121656
      },
      "screens": [
        {
          "yaw": -1.3,
          "pitch": 0,
          "type": "video",
          "width": "640",
          "height": "480",
          "radius": "640",
          "videos": [
            {
              "id": "spe",
              "start": 3,
              "sources": [
                {src: '/assets/Kunstraum_SPE.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
        {
          "id": "fenster",
          "yaw": -2.8,
          "pitch": 0,
          "type": "video",
          "width": "800",
          "height": "600",
          "radius": "800",
          "extraTransforms": "translateY(-130px)",
          "videos": [
            {
              "id": "kunst",
              "sources": [
                {src: '/assets/Kunstraum_KunstAnDerMSO.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -1.687471544390208,
          "pitch": -0.11136764832008872,
          "title": "Heike Spennrath-Werges",
          "text": "Kunstunterricht an der MSO",
          "video": "spe"
        },
        {
          "yaw": -0.1201220597540638,
          "pitch": -0.19826109632295896,
          "title": "Kunst",
          "text": "Kunst an der MSO",
          "screen": "fenster",
          "video": "kunst"
        }
      ]
    },
    {
      "id": "8-sporthalle",
      "name": "Sporthalle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.08468295751098509,
        "pitch": -0.03527357343697446,
        "fov": 0.9420983572121656
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.9567891604015237,
          "pitch": 0.07168437907955649,
          "title": "p1",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
