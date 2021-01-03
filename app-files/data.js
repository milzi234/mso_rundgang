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
          "extraTransforms": "rotateY(-13deg) rotateX(12deg) rotate(-2.5deg)",
          "videos": [
            {
              "id": "wel",
              "start": 3,
              "sources": [
                {src: '/assets/Aula_WEL.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "löh",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "szenisches_spiel",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "konzert",
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
          "video": "löh"
        },
        {
          "yaw": -1.673,
          "pitch": -0.125,
          "title": "Szenisches Spiel",
          "text": "",
          "video": "szenisches_spiel"
        },
        {
          "yaw": -2.406,
          "pitch": -0.201,
          "title": "Konzert",
          "text": "",
          "video": "konzert"
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
      "screens": [
        {
          "yaw": -1.68,
          "pitch": 0,
          "type": "video",
          "width": "420",
          "height": "340",
          "radius": "450",
          "extraTransforms": "translateX(-100px) translateY(-80px)",
          "videos": [
            {
              "id": "nol",
              "start": 3,
              "sources": [
                {src: '/assets/Naturwissenschaftsraum_NOL.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "ras",
              "start": 0.9,
              "sources": [
                {src: '/assets/Naturwissenschaftsraum_RAS.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "unterricht",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "polen",
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
          "yaw": -0.31741392534359036,
          "pitch": -0.07337668561827222,
          "title": "Matthias Nolte",
          "text": "Biologie & Chemie",
          "video": "nol"
        },
        {
          "yaw": 0.65,
          "pitch": 0.02,
          "title": "Ulrich Rasbach",
          "text": "Mathematik & Physik",
          "video": "ras"
        },
        {
          "yaw": -0.820,
          "pitch": 0.0377,
          "title": "NW Unterricht",
          "text": "TBD",
          "video": "unterricht"
        },
        {
          "yaw": 1.460,
          "pitch": -0.180,
          "title": "Polen-Austausch",
          "text": "TBD",
          "video": "polen"
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
      "screens": [
        {
          "yaw": -2.955,
          "pitch": 0,
          "viewOrientation": {yaw: -2.636, pitch: -0.036 },
          "type": "video",
          "width": "620",
          "height": "340",
          "radius": "450",
          "extraTransforms": "translateX(600px) translateY(-20px)",
          "videos": [
            {
              "id": "küh",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "unterricht",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
        {
          "id": "schwebend",
          "yaw": -1.3503855313117104,
          "pitch": 0.21684099679843882,
          "type": "video",
          "width": "620",
          "height": "340",
          "radius": "450",
          "videos": [
            {
              "id": "ausstattung",
              "sources": [
                {src: '/assets/Computerraum_DigitaleAusstattung.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [],
      "videoTriggerHotspots":[
        {
          "yaw": 1.946,
          "pitch": 0,
          "title": "Computerraum",
          "text": "Digitale Ausstattung",
          "video": "ausstattung"
        },
        {
          "yaw": -2.95,
          "pitch": 0.120,
          "title": "Matthias Kühnert",
          "text": "TBD",
          "video": "küh"
        },
        {
          "yaw": -1.150,
          "pitch": 0.401,
          "title": "Informatikunterricht",
          "text": "TBD",
          "video": "unterricht"
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
      "screens": [
        {
          "yaw": 0.76,
          "pitch": 0,
          "type": "video",
          "width": "280",
          "height": "240",
          "radius": "450",
          "extraTransforms": "translateX(-290px) translateY(-15px)",
          "videos": [
            {
              "id": "böh",
              "sources": [
                {src: '/assets/Foyer_BÖH.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "scu",
              "start": 3,
              "sources": [
                {src: '/assets/Foyer_SCU.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
        {
          "id": "treppenhaus",
          "yaw": 2.25,
          "pitch": -1.2,
          "type": "video",
          "width": "800",
          "height": "600",
          "radius": "600",
          "videos": [
            {
              "id": "treppenhaus",
              "sources": [
                {src: '/assets/Foyer_Treppenhaus.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -0.9598353578576518,
          "pitch": -0.043717127246199112,
          "title": "Sarah Schulte",
          "text": "Bienen & Garten AG",
          "video": "scu"
        },
        {
          "yaw": 2.364551019078739,
          "pitch": 0.1351655317603644,
          "title": "Katrin Böhlefeld",
          "text": "Fair-Trade AG",
          "video": "böh"
        },
        {
          "yaw": 2.364551019078739,
          "pitch": -0.5,
          "title": "Trepp auf!",
          "text": "",
          "video": "treppenhaus",
          "screen": "treppenhaus"
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
              "id": "szw",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "fruehmesse",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "misereor",
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
          "video": "szw"
        },
        {
          "yaw": -1.066,
          "pitch": 0.194,
          "title": "Frühmesse",
          "text": "TBD",
          "video": "fruehmesse"
        },
        {
          "yaw": 0.341,
          "pitch": 0.055,
          "title": "Misereor",
          "text": "TBD",
          "video": "misereor"
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
            },
            {
              "id": "erste_tage",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
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
        },
        {
          "yaw": 0.680,
          "pitch":  0.164,
          "title": "Erste Tage",
          "text": "Erste Tage an der MSO",
          "video": "erste_tage",
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
      "infoHotspots": [
        {
          "yaw": 1.840,
          "pitch": 0.0416,
          "title": "Ausstellung LK",
          "text": "TBD",
        }
      ],
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
      "screens": [
        {
          "yaw": -3.14,
          "pitch": 0,
          "viewOrientation": {yaw: -3.14, pitch: -0.105},
          "type": "video",
          "width": "600",
          "height": "400",
          "radius": "640",
          "extraTransforms": "translateX(-160px) translateY(-200px) rotate(1deg)",
          "videos": [
            {
              "id": "adr",
              "start": 3,
              "sources": [
                {src: '/assets/Sporthalle_ADR.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
      ],
      "linkHotspots": [],
      "infoHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -1.5489979825977365,
          "pitch": -0.11911588710149523,
          "title": "Oliver Adrian",
          "text": "Vorstellung",
          "video": "adr"
        }
      ]
    },
    {
      "id": "9-cafteria",
      "name": "Caféteria",
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
        "yaw": 2.6886092765645486,
        "pitch": 0.08909842134308121,
        "fov": 1.3399983960584583
      },
      "screens": [
        {
          "yaw": -0.8,
          "pitch": 0,
          "type": "video",
          "width": "600",
          "height": "400",
          "radius": "640",
          "extraTransforms": "rotateY(5deg)",
          "videos": [
            {
              "id": "wurms",
              "start": 3,
              "sources": [
                {src: '/assets/Cafeteria_Wurms.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "erziehungsgemeinschaft",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
      ],
      "linkHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -1.7535644883281982,
          "pitch": -0.1888531946067964,
          "title": "Andreas Wurms & Nina Strauch",
          "text": "Über die Caféteria",
          "video": "wurms"
        },
        {
          "yaw": -2.121290862358588,
          "pitch": 0.07252764582686311,
          "title": "Erziehungsgemeinschaft",
          "text": "TBD",
          "video": "erziehungsgemeinschaft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Virtueller Rundgang MSO",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
