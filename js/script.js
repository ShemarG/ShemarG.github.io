const masterData = [
  {
    name: "Millepora alcicornis",
    code: "MALC",
    group: "Fire Coral",
    notes: [
      "Not a hard coral – different class (Hydrozoa)",
      "yellow to tan, branch tips white"
    ]
  },
  {
    name: "Millepora complanata",
    code: "MCOM",
    group: "Fire Coral",
    notes: [
      "upright blades that rise above an encrusting base may have subdivided tips",
      "blades may interconnect to form complex “honeycombs”",
      "yellow, tan or yellow brown",
      "Millepora differs from the scleractinian stony corals: minute defensive polyps protrude from tiny pores in the colony surfaces"
    ]
  },
  {
    name: "Scolymia cubensis",
    code: "SCUB",
    group: "Flower & Solitary",
    notes: [
      "Short, with disks lying close to the surface, and have typically long and sharp mussid spines which are visible through the fleshy tissue.",
      "Colours range from bright green, reds to dull grey."
    ]
  },
  {
    name: "Agaricia agaricites",
    code: "AAGA",
    group: "Agariciid",
    notes: [
      "Encrusting sheets, thick leaves or other irregular projections and flat plates.",
      "Calices occur usually on both sides of vertical projections.",
      "Corallites may occur in long meandroid rows",
      "But on most colonies there are areas where each corallite is individual with angular walls.",
      "Ridge tops are pointed.",
      "Tiny, reticulate polyps (network)",
      "Form plates, crusts, lumps, and keeled colonies",
      "Small polyps in long rows or short reticulations",
      "Tan to many shades of brown; some fluoresce pink or orange"
    ]
  },
  {
    name: "Eusmilia fastigiata",
    code: "EFAS",
    group: "Flower & Solitary",
    notes: [
      "Phaceloid arrangement of corallites",
      "Round to ovoid, stalked poylps",
      "Colonies are clumps of tubular corallites, each with one to three centres that are round to oval in shape.",
      "Corallites are widely spaced, and there is no living tissue at the bases between well developed groups.",
      "The primary septa are large and widely spaced, with smooth edges.",
      "Colour is cream with pink or green tints. Tentacles are translucent and are seen during darkness only."
    ]
  },
  {
    name: "Montastraea cavernosa",
    code: "MCAV",
    group: "Mound & Boulder",
    notes: [
      "Large plocoid corallites.",
      "Round, exsert.",
      "Compare with smaller plocoid corallites of Orbicella annularis on the right",
      "Brown, yellow-brown, green or grey"
    ]
  },
  {
    name: "Orbicella annularis",
    code: "OANN",
    group: "Mound & Boulder",
    notes: [
      "Small, round, exsert polyps are alive at the tops of columns",
      "Thick plates at colony sides or bases under low light conditions",
      "Light brown or yellow-brown",
      "Large colonies",
      "Subdivides to form columns, with basal plates under low light conditions"
    ]
  },
  {
    name: "Orbicella faveolata",
    code: "OFAV",
    group: "Mound & Boulder",
    notes: [
      "Small, round polyps with exsert walls (protruding “outies”) in mounds with “skirted” (platy) edges, or thick plates",
      "Greens, browns, grey",
      "Surfaces smooth, ridged or with bumps aligned in vertical rows"
    ]
  },
  {
    name: "Siderastrea siderea",
    code: "SSID",
    group: "Mound & Boulder",
    notes: [
      "Cerioid corallites",
      "Small sunken polyps (“innies”)",
      "Thin septa",
      "Walls often angular",
      "Uniform colours: grey, yellow-brown to brown",
      "Rounded mounds"
    ]
  },
  {
    name: "Siderastrea radians",
    code: "SRAD",
    group: "Mound & Boulder",
    notes: [
      "Ceriod corallies. Encrusting growths form",
      "Overall small size",
      "Sunken corallite centre",
      "Thicker septa"
    ]
  },
  {
    name: "Porites astreoides",
    code: "PAST",
    group: "Mound & Boulder",
    notes: [
      "Massive with mustard yellow colour",
      "Polyps are narrow–but tall and look “fuzzy” when expanded.",
      "Lumpy mounds or plates",
      "Unusual shape or colour combinations can occur even within a single coral"

    ]
  },
  {
    name: "Favia fragum",
    code: "FFRA",
    group: "Mound & Boulder",
    notes: [
      "Small overall size.",
      "Corallites plocoid but not circular",
      "Calices are usually rounded and single, though dividing calices become oval and elongated, but never meandroid"
    ]
  },
  {
    name: "Manicina areolata",
    code: "MARE",
    group: "Meandroid",
    notes: [
      "Distinct grooves in ridge tops",
      "Vertical ridge sides",
      "Free-living or attached",
      "Yellow-brown, grey or green may have lighter patches in ridge tops",
      "Wider grooves in the ridges",
      "Polyp mouths not connected by septa"
    ]
  },
  {
    name: "Colpophyllia natans",
    code: "CNAT",
    group: "Meandroid",
    notes: [
      "Tissues may have two colours or two shades of one colour may have stripes on ridges valleys may be fluorescent",
      "Largest of the meandroid corals",
      "Walls commonly have groove running along their tops",
      "There is a sharp break between the wall and the valley floor."
    ]
  },
  {
    name: "Meandrina meandrites",
    code: "MMEA",
    group: "Meandroid",
    notes: [
      "Yellowish colour",
      "Thick ridges with large, thick septa",
      " Deep narrow valleys in which narrow septa connect polyp mouths",
      "Thick plates or crusts, mounds, or short columns",
      "Very aggressive towards most other corals",
    ]
  },
  {
    name: "Diploria labyrinthiformis",
    code: "DLAB",
    group: "Meandroid",
    notes: [
      "Ridges and valleys of uneven width.",
      "Large shallow groove in the middle of the ridge.",
      "Distinct groove along middle of ridge–can be deeper and wider than the valleys",
      "Tan to brown colours"
    ]
  },
  {
    name: "Pseudodiploria strigosa",
    code: "PSTR",
    group: "Meandroid",
    notes: [
      "No distinct groove along middle of ridge.",
      "Smooth overall colony shape.",
      "Sloping or rounded walls"
    ]
  },
  {
    name: "Pseudodiploria clivosa",
    code: "PCLI",
    group: "Meandroid",
    notes: [
      "Massive, meandroid, and knobbly",
      "Ridges of similar size to valleys",
      "Found in shallow areas of the reef"
    ]
  },
  {
    name: "Acropora palmata",
    code: "APAL",
    group: "Branching",
    notes: [
      "large branches, cylindrical where exposed to waves",
      "branches flatten in calm water"
    ]
  },
  {
    name: "Acropora cervicornis",
    code: "ACER",
    group: "Branching",
    notes: [
      "Round branches, sub-branches emerge nearly at right angles",
      "Colonies loosely packed or ‘open’"
    ]
  },
  {
    name: "Madracis auretenra",
    code: "MAUR",
    group: "Branching",
    notes: [
      "Thin densely packed yellow branches, usually with polyps out during the day.",
      "Calices have 10 septa",
      "Thin, fragile, near-parallel branches with blunt tips",
      "Tenacles often expanded by day.",
      "Dense clumps",
      "Branches are straighter and more closely set than Porites"
    ]
  },
  {
    name: "Porites porites",
    code: "PPOR",
    group: "Branching",
    notes: [
      "Irregularly shaped branches, many with blunt tips",
      "Elongate polyps often expand during the day",
      "Light grey, cream, yellowbrown or blue",
      "Alive only near the branch tips in large colonies"
    ]
  },
  {
    name: "Porites furcata",
    code: "PFUR",
    group: "Branching",
    notes: [
      "Long, “finger-like” branches, many with rounded tips grey, tan or shades of brown",
      "Branches are thinner, longer, more widely spaced, less irregular in shape, and with more rounded tips",
      "Darker colours"
    ]
  },
  {
    name: "Porites divaricata",
    code: "PDIV",
    group: "Branching",
    notes: [
      "Short, widely-spaced branches, many subdivided near tip “Y-shaped”",
      "Grey, yellow-brown to brown",
      "Thinner, shorter, more widely spaced branches, more often divided at tips",
      "Fully grown colonies are smaller",
      "Rare on fore reefs"
    ]
  },
  {
    name: "Dendrogyra cylindrus",
    code: "DCYL",
    group: "Meandroid",
    notes: [
      "Tall columns above a massive base",
      "Polyps are usually expanded by day",
      "Tan, yellow-brown to dark brown",
      "Very deep, narrow valleys",
      "Ridges usually wide and flat on top"
    ]
  }
]

const testFunc = () => {
  for (let i = 0; i < masterData.length; i++) {
    let testPrint = document.createElement('span')
    let testTitle = document.createElement('h1')
    testTitle.innerHTML = `<h1>${masterData[i].name}</h1>`
    testPrint.appendChild(testTitle)
      for (let j = 0; j < 4; j++) {
        let imgNode = document.createElement('img')
        imgNode.src = `../images/${masterData[i].code}/${j+1}.jpg`
        testPrint.appendChild(imgNode)
      }
    document.body.appendChild(testPrint)
  }
}

const nameByImage = () => {
  console.log("bitches")
}

console.log(masterData)
