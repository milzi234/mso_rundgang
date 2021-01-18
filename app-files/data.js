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
              "sources": [
                {src: '/assets/Aula_LÖH.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "szenisches_spiel",
              "volume": 0.5,
              "sources": [
                {src: '/assets/Aula_SzenischesSpiel.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "disco",
              "sources": [
                {src: '/assets/Aula_Disco.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "konzert",
              "start": 0,
              "sources": [
                {src: '/assets/Aula_Konzert.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
        {
          "id" : "nah",
          "yaw": 1.7861318131345009,
          "pitch": -0.25744266112553,
          "viewOrientation": {yaw: 2, pitch: 0},
          "type": "video",
          "width": "320",
          "height": "240",
          "radius": "250",
          "extraTransforms": "rotateY(-13deg) rotateX(12deg) rotate(-2.5deg)",
          "videos": [
            {
              "id": "disco",
              "sources": [
                {src: '/assets/Aula_Disco.mp4', type: "video/mp4"}
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
          "title": "Monika Löhr",
          "text": "Monika Löhr über Theater an der MSO",
          "video": "löh"
        },
        {
          "yaw": -1.673,
          "pitch": -0.125,
          "title": "Szenisches Spiel",
          "text": "Ausschnitte",
          "video": "szenisches_spiel"
        },
        {
          "yaw": 1.733,
          "pitch": -0.615,
          "title": "???",
          "text": "",
          "video": "disco",
          "screen": "nah"
        },
        {
          "yaw": -2.406,
          "pitch": -0.201,
          "title": "Konzertausschnitte",
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
              "start": 0,
              "sources": [
                {src: '/assets/Naturwissenschaftsraum_Unterricht.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "polen",
              "start": 3,
              "volume": 0.5,
              "sources": [
                {src: '/assets/Naturwissenschaftsraum_Polen.mp4', type: "video/mp4"}
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
          "title": "Unterricht in den Naturwissenschaften",
          "text": "Ein paar Eindrücke",
          "video": "unterricht"
        },
        {
          "yaw": 1.460,
          "pitch": -0.180,
          "title": "Polen Austausch",
          "text": "Ein Chemieprojekt",
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
              "id": "küh",
              "start": 3,
              "sources": [
                {src: '/assets/Computerraum_KÜH.mp4', type: "video/mp4"}
              ]
            },
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
          "title": "Digitale Ausstattung",
          "text": "",
          "video": "ausstattung",
          "screen": "schwebend"
        },
        {
          "yaw": -2.95,
          "pitch": 0.120,
          "title": "Matthias Kühnert",
          "text": "Matthias Kühnert über den Informatikunterricht",
          "video": "küh",
          "screen": "schwebend"
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
      "name": "Foyer",
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
        "yaw": -2.88,
        "pitch": 0.13,
        "fov": 0.9420983572121656
      },
      "screens": [
        {
          "yaw": -3.05,
          "pitch": -0.495,
          "type": "video",
          "width": "800",
          "height": "600",
          "radius": "600",
          "viewOrientation": {yaw: -3.053935944027348, pitch: -0.32797258728433754},
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
            },
            {
              "id": "ankommen",
              "sources": [
                {src: '/assets/Foyer_Ankommen.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "treppenhaus",
              "sources": [
                {src: '/assets/Foyer_Treppenhaus.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "maske",
              "sources": [
                {src: '/assets/Foyer_Maske.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [
        {
          yaw: -1.590,
          pitch: -0.5192,
          title: "Medienscout Schule",
          text: '<a href="https://www.medienscouts-nrw.de/" target="_blank"><img src="assets/Foyer_Medienscouts.png" width="400rem"></img></a>'
        }
      ],
      "videoTriggerHotspots": [
        {
          "yaw": 2.90,
          "pitch": 0.05,
          "title": "Ankommen an der MSO",
          "text": "Johnny, Herr Lowinski und Frau Spennrath-Werges",
          "video": "ankommen"
        },
        {
          "yaw":0.090,
          "pitch": -0.050,
          "title": "Sarah Schulte",
          "text": "Bienen & Garten AG",
          "video": "scu"
        },
        {
          "yaw": 0.605,
          "pitch": -0.075,
          "title": "Fair-Trade AG",
          "text": "Katrin Böhlefeld & Oliver Adrian",
          "video": "böh"
        },
        {
          "yaw": -2.410,
          "pitch": -0.18,
          "title": "Trepp auf!",
          "text": "",
          "video": "treppenhaus",
        },
        {
          "yaw": 1.909,
          "pitch": -0.17,
          "title": "???",
          "text": "",
          "video": "maske",
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
        "pitch": -0.09172343195057309,
        "yaw": -3.1085031841712016,
        "fov": 1.5707963267948966
      },
      "screens": [
        {
          "yaw": 2.965,
          "pitch": -0.064,
          "type": "video",
          "width": 400, 
          "height": 300, 
          "radius": 420, 
          "videos": [
            {
              "id": "lio",
              "sources": [
                {src: '/assets/Kapelle_LIO.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "szw",
              "sources": [
                {src: '/assets/Kapelle_SZW.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "teddy",
              "sources": [
                {src: '/assets/Kapelle_Teddy.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -1.066,
          "pitch": 0.194,
          "title": "Frühmesse",
          "text": '<iframe width="400rem" height="300rem" src="https://www.youtube.com/embed/sj9jKlQ0Spc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
        {
          "yaw": 0.341,
          "pitch": 0.055,
          "title": "Misereor",
          "text": '<iframe width="400rem" height="300rem" src="https://www.youtube.com/embed/90UMNYqPuYE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }
      ],
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
          "title": "Ansgar Swierczynski",
          "text": "Als Christ aktiv sein",
          "video": "szw"
        },
        {
          "yaw": -2.747,
          "pitch": 0.305,
          "title": "???",
          "text": "",
          "video": "teddy"
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
              "start": 0,
              "sources": [
                {src: '/assets/R025_Unterricht.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "weihnachten",
              "start": 0,
              "sources": [
                {src: '/assets/R025_Weihnachten.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [
        {
          yaw: -0.796,
          pitch: 0.065,
          title: "Erste Tage an der MSO",
          text: '<audio src="assets/R025_ErsteTage.mp3" controls></audio>'
        },
        {
          yaw: -2.632339409246237,
          pitch: -0.12115632964260925,
          title: "Stundenplan",
          text: '<a href="assets/R025_Stundenplan.png" target="_blank"><img src="assets/R025_Stundenplan.png" width="600rem"></img></a>'
        }
      ],
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
          "text": "Unterrichtsimpression der fünften Klassen",
          "video": "unterricht",
          "screen": "pinnwand"
        },
        {
          "yaw": -0.37692343503508674,
          "pitch": 0.0277401988616107,
          "title": "Weihnachten 2020",
          "text": "Voll vernetzt",
          "video": "weihnachten",
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
              "start": 2,
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
            },
            {
              "id": "maske",
              "sources": [
                {src: '/assets/Kunstraum_Maske.mp4', type: "video/mp4"}
              ]
            }
          ]
        }
      ],
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.3548403065846681,
          "pitch": -0.19999805497620393,
          "title": "Ausstellung LK",
          "text": '<a href="https://spark.adobe.com/page/PEFR6Q2qLBrBJ/" target="_blank">Hier geht\'s zur Ausstellung</a>',
        },
        {
          "yaw": -1.141,
          "pitch": -0.288,
          "title": "Kreativ-AG",
          "text": '<iframe width="400rem" height="300rem" src="https://www.youtube.com/embed/WJEoIThEeCk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
        },
        {
          "yaw": 0.661,
          "pitch": 0.111,
          "title": "???",
          "text": "",
          "screen": "fenster",
          "video": "maske"
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
            },
            {
              "id": "sportunterricht",
              "start": 3,
              "sources": [
                {src: '/assets/Sporthalle_Unterricht.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "schuh",
              "start": 3,
              "sources": [
                {src: '/assets/Sporthalle_Schuh.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
      ],
      "linkHotspots": [
        {
          "yaw": -1.0961,
          "pitch": -0.1699,
          "target": "11-sporthalle-offen",
        }
      ],
      "infoHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -1.7489979825977365,
          "pitch": -0.11911588710149523,
          "title": "Oliver Adrian",
          "text": "Vorstellung",
          "video": "adr"
        },
        {
          "yaw": -0.617,
          "pitch": -0.113,
          "title": "Sportunterricht",
          "text": "Ein paar Eindrücke",
          "video": "sportunterricht"
        },
        {
          "yaw": -3.195,
          "pitch": 0.230,
          "title": "???",
          "text": "",
          "video": "schuh"
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
        "yaw": -2.8528881382342153,
        "pitch": 0.05443002103066519,
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
              "id": "ümi",
              "start": 3,
              "sources": [
                {src: '/assets/Cafeteria_ÜMI.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "banane",
              "start": 0,
              "sources": [
                {src: '/assets/Cafeteria_Banane.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "cisco",
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
          "yaw": -0.903,
          "pitch": -0.614,
          "title": "Nachmittagsbetreuung",
          "text": "Frau Kötter-Röhl & Frau Brab über die Nachmittagsbetreuung",
          "video": "ümi"
        },
        {
          "yaw": 2.601,
          "pitch": 0.307,
          "title": "???",
          "text": "",
          "video": "banane"
        },
        {
          "yaw": 1.0496,
          "pitch": -0.107,
          "title": "???",
          "text": "",
          "video": "cisco"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.121290862358588,
          "pitch": 0.07252764582686311,
          "title": "Erziehungsgemeinschaft",
          "text": '<audio src="assets/Cafeteria_Erziehungsgemeinschaft.mp3" controls></audio>',
        }
      ]
    },
    {
      "id": "10-artrium",
      "name": "Atrium",
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
          "yaw": 0.875,
          "pitch": 0,
          "type": "video",
          "width": "720",
          "height": "400",
          "radius": "420",
          "extraTransforms": "translateY(-121px)",
          "videos": [
            {
              "id": "technik",
              "start": 3,
              "sources": [
                {src: '/assets/platzhalter.mp4', type: "video/mp4"}
              ]
            },
            {
              "id": "projekte",
              "sources": [
                {src: '/assets/Atrium_Projekte.mp4', type: "video/mp4"}
              ]
            }
          ]
        },
      ],
      "linkHotspots": [],
      "videoTriggerHotspots": [
        {
          "yaw": -0.983911831327336,
          "pitch": -0.13942708941295692,
          "title": "Technik AG",
          "text": '',
          "video": "technik",
        },
        {
          "yaw": 0.9099669377539374,
          "pitch": -0.015799610058891744,
          "title": "Projektarbeit",
          "text": 'Beispiele für Projektarbeit',
          "video": "projekte",
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.521339919586479,
          "pitch": -0.13539492991372626,
          "title": "Schülerrat",
          "text": '<iframe width="400rem" height="300rem" src="https://www.youtube.com/embed/RD3E4OLOyC4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }
      ]
    },
    {
      "id": "11-sporthalle-offen",
      "name": "Sporthalle (geöffnet)",
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
      "linkHotspots": [
        {
          "yaw": -0.08168213719584827,
          "pitch": -0.60142744620474,
          "target": "8-sporthalle",
          "rotation": 180
        }
      ],
      "infoHotspots": [
        
      ]
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
