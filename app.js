const targets = {
  access: {
    label: "Access corridor",
    anatomy: "soft-tissue working path",
    summary: "Retractors create and hold the route to the spine.",
    teach: "Access tools influence the controlled corridor through tissue so the surgeon can reach the target anatomy."
  },
  cervical: {
    label: "Cervical spine",
    anatomy: "neck vertebrae and discs",
    summary: "Neck spacers, plates, and discs work here.",
    teach: "Cervical products are aimed at the vertebrae and disc spaces in the neck."
  },
  upper: {
    label: "Upper spine",
    anatomy: "back of neck and upper thoracic spine",
    summary: "Posterior cervical and upper-spine fixation lives here.",
    teach: "Upper-spine fixation systems stabilize the posterior neck and upper thoracic spine with anchors, rods, or plates."
  },
  lumbar: {
    label: "Lumbar disc space",
    anatomy: "lower-back discs between lumbar vertebrae",
    summary: "ALIF, lateral, and posterior lumbar spacers restore this space.",
    teach: "Lumbar interbody products replace or support the worn cushion between lower-back vertebrae."
  },
  motion: {
    label: "Motion disc joint",
    anatomy: "moving spinal disc joint",
    summary: "Artificial discs preserve motion instead of fusing.",
    teach: "Motion-preserving discs influence a disc joint by replacing the worn moving part rather than locking the bones together."
  },
  fracture: {
    label: "Compression fracture",
    anatomy: "cracked or collapsed vertebra",
    summary: "Cavity creation and cement stabilize a cracked block.",
    teach: "Vertebral augmentation products influence a fractured vertebra by reinforcing the damaged block."
  },
  body: {
    label: "Vertebral body",
    anatomy: "main weight-bearing block of a vertebra",
    summary: "Replacement cages act like support columns.",
    teach: "Vertebral body replacement products influence the main bony block when it is too damaged to simply patch."
  },
  deformity: {
    label: "Deformity curve",
    anatomy: "long curved or growing spinal column",
    summary: "Scoliosis, growing rod, and deformity systems correct alignment.",
    teach: "Deformity systems influence a longer section of spine, often using anchors and rods to guide or hold correction."
  },
  si: {
    label: "SI joint",
    anatomy: "joint where spine meets pelvis",
    summary: "Foundation-joint fixation belongs at the pelvis.",
    teach: "Sacroiliac fixation products influence the joint between the sacrum and pelvis, the foundation under the spine."
  },
  biologics: {
    label: "Bone healing site",
    anatomy: "fusion bed or graft area",
    summary: "Graft materials support bone growth and healing.",
    teach: "Biologics influence the healing environment by adding scaffold, filler, delivery, or protective material."
  },
  navigation: {
    label: "Planned path",
    anatomy: "planned screw or implant trajectory",
    summary: "Robotic navigation guides placement along the plan.",
    teach: "Navigation technology influences the surgical path by helping align instruments, screws, and spacers with the plan."
  }
};

const approachRoutes = {
  anterior: "Anterior/front",
  posterior: "Posterior/back",
  lateral: "Lateral/side",
  flexible: "Flexible"
};

const productMedia = {
  mars: {
    src: "https://www.globusmedical.com/wp-content/uploads/2019/07/MARS_3VL_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/products/mars-3vl/",
    caption: "MARS 3VL retractor image from Globus Medical"
  },
  coalition: {
    src: "https://www.globusmedical.com/international/wp-content/uploads/sites/8/2019/07/COALITION_MIS_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/international/products/coalition-mis-spacer/",
    caption: "COALITION MIS spacer image from Globus Medical"
  },
  magnify: {
    src: "https://www.globusmedical.com/international/wp-content/uploads/sites/8/2019/07/MAGNIFY_S_1907_WebBanner_1_mobile-2-300x300.png",
    source: "https://www.globusmedical.com/international/products/magnify-s-stand-alone-spacer/",
    caption: "MAGNIFY-S spacer image from Globus Medical"
  },
  elsa: {
    src: "https://www.globusmedical.com/international/wp-content/uploads/sites/8/2019/07/ELSA_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/international/products/elsa/",
    caption: "ELSA spacer image from Globus Medical"
  },
  altera: {
    src: "https://www.globusmedical.com/international/wp-content/uploads/sites/8/2019/07/ALTERA_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/international/products/altera/",
    caption: "ALTERA spacer image from Globus Medical"
  },
  quartex: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/05/QUARTEX_1907_WebBanner_1_mobile-300x300.webp",
    source: "https://www.globusmedical.com/products/quartex/",
    caption: "QUARTEX system image from Globus Medical"
  },
  creo: {
    src: "https://www.globusmedical.com/wp-content/uploads/2019/07/CREO_DLX_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/products/creo-dlx/",
    caption: "CREO DLX system image from Globus Medical"
  },
  secureC: {
    src: "https://www.globusmedical.com/wp-content/uploads/2019/07/SECURE_C_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/products/secure-c-cervical-artificial-disc/",
    caption: "SECURE-C disc image from Globus Medical"
  },
  orbit: {
    src: "https://www.globusmedical.com/international/wp-content/uploads/sites/8/2023/08/ORBIT_R_2003_WebBanner_1_mobile-300x300.webp",
    source: "https://www.globusmedical.com/international/products/orbit-r-anterior-lumbar-disc/",
    caption: "ORBIT-R disc image from Globus Medical"
  },
  affirm: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/03/AFFIRM_VCF_System_1907_WebBanner_1_mobile-300x300.jpg",
    source: "https://www.globusmedical.com/products/affirm-vcf-system/",
    caption: "AFFIRM VCF image from Globus Medical"
  },
  fortress: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/03/FORTRESS_1907_WebBanner_1_mobile-300x300.jpg",
    source: "https://www.globusmedical.com/products/fortress-bone-cement/",
    caption: "FORTRESS cement image from Globus Medical"
  },
  fortify: {
    src: "https://www.globusmedical.com/international/wp-content/uploads/sites/8/2019/07/FORTIFY_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/international/products/fortify-corpectomy-spacer/",
    caption: "FORTIFY spacer image from Globus Medical"
  },
  reflect: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/05/REFLECT_2003_WebBanner_1_mobile-300x300.jpg",
    source: "https://www.globusmedical.com/products/reflect/",
    caption: "REFLECT system image from Globus Medical"
  },
  marvel: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/06/MRVL_GR_2212_WebBanner_1_mobile-300x300.jpg",
    source: "https://www.globusmedical.com/products/marvel/",
    caption: "MARVEL growing rod image from Globus Medical"
  },
  silok: {
    src: "https://www.globusmedical.com/wp-content/uploads/2019/07/SILOK_SELECT_1907_WebBanner_2_mobile-300x300.png",
    source: "https://www.globusmedical.com/products/si-lok-select/",
    caption: "SI-LOK SELECT image from Globus Medical"
  },
  viashield: {
    src: "https://www.globusmedical.com/wp-content/uploads/2019/07/ViaShield_1907_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/products/viashield-dual-layer-amnion-patch/",
    caption: "ViaShield patch image from Globus Medical"
  },
  instafill: {
    src: "https://www.globusmedical.com/wp-content/uploads/2022/09/InstaFill_2209_WebBanner_1_mobile-300x300.png",
    source: "https://www.globusmedical.com/products/instafill-graft-delivery-system/",
    caption: "InstaFill image from Globus Medical"
  },
  harvest: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/01/HARVEST_2212_WebBanner_1_mobile-300x300.jpg",
    source: "https://www.globusmedical.com/products/harvest/",
    caption: "Harvest SmartPrep image from Globus Medical"
  },
  kinex: {
    src: "https://www.globusmedical.com/wp-content/uploads/2023/03/KINEX_1907_WebBanner_1_mobile-300x300.jpg",
    source: "https://www.globusmedical.com/products/kinex-and-kinex-plus-bioactive/",
    caption: "KINEX image from Globus Medical"
  },
  excelsius: {
    src: "https://www.globusmedical.com/wp-content/themes/globus/images/scrollers/egps/EXCL_GPS_1801_TECH_FINALCONSTRUCT_ExcelsiusGPS_C.png",
    source: "https://www.globusmedical.com/musculoskeletal-solutions/excelsiustechnology/excelsiusgps/",
    caption: "ExcelsiusGPS image from Globus Medical"
  }
};

const productCards = [
  {
    family: "Access tools",
    product: "MARS retractor systems",
    clue: "Adjustable door frames that keep tissue gently moved aside so the surgeon can work through a controlled opening.",
    examples: ["MARS cervical", "MARS anterior", "MARS lateral", "MARS posterior"],
    target: "access",
    image: "mars",
    approach: {
      title: "Approach-flexible access",
      routes: ["anterior", "posterior", "lateral", "flexible"],
      note: "Retractors are chosen to match the front, back, or side route for the procedure."
    },
    difficulty: 1
  },
  {
    family: "Cervical spacers",
    product: "COALITION MIS and SUSTAIN",
    clue: "Small blocks that replace a worn cushion in the neck and help restore height between vertebrae.",
    examples: ["COALITION MIS", "SUSTAIN"],
    target: "cervical",
    image: "coalition",
    approach: {
      title: "Anterior cervical",
      routes: ["anterior"],
      note: "These neck spacers are associated with a front-of-neck path to the cervical disc space."
    },
    difficulty: 1
  },
  {
    family: "Anterior lumbar spacers",
    product: "MAGNIFY, INDEPENDENCE, MONUMENT",
    clue: "Lower-back spacers placed from the front, sometimes with built-in anchors like brackets on the spacer.",
    examples: ["MAGNIFY", "INDEPENDENCE", "MONUMENT", "CONTINENTAL"],
    target: "lumbar",
    image: "magnify",
    approach: {
      title: "Anterior lumbar",
      routes: ["anterior"],
      note: "ALIF-style spacers approach the lower-back disc space from the front."
    },
    difficulty: 2
  },
  {
    family: "Lateral lumbar spacers",
    product: "ELSA, RISE-L, CALIBER-L",
    clue: "Lower-back spacers placed from the side; some expand like a small jack after insertion.",
    examples: ["ELSA", "RISE-L", "CALIBER-L", "InterContinental"],
    target: "lumbar",
    image: "elsa",
    approach: {
      title: "Lateral lumbar",
      routes: ["lateral"],
      note: "Lateral spacers reach the lumbar disc space from the patient's side."
    },
    difficulty: 2
  },
  {
    family: "Posterior lumbar spacers",
    product: "ALTERA, RISE, CALIBER, LATIS",
    clue: "Lower-back spacers placed from the back in TLIF-style procedures to restore disc height.",
    examples: ["ALTERA", "RISE", "CALIBER", "LATIS"],
    target: "lumbar",
    image: "altera",
    approach: {
      title: "Posterior lumbar",
      routes: ["posterior"],
      note: "TLIF-style spacers approach the disc space from the back."
    },
    difficulty: 2
  },
  {
    family: "Posterior cervical fixation",
    product: "QUARTEX, ELLIPSE, CAPITOL",
    clue: "Anchor-and-rail systems that stabilize the back of the neck and upper spine.",
    examples: ["QUARTEX", "ELLIPSE", "CAPITOL", "PROTEX CT"],
    target: "upper",
    image: "quartex",
    approach: {
      title: "Posterior cervical",
      routes: ["posterior"],
      note: "These fixation systems stabilize the back side of the neck and upper spine."
    },
    difficulty: 3
  },
  {
    family: "Thoracolumbar fixation",
    product: "CREO systems",
    clue: "Pedicle screws and rods that hold the lower spine steady while fusion or correction heals.",
    examples: ["CREO", "CREO MIS", "CREO DLX", "CREO NXT"],
    target: "deformity",
    image: "creo",
    approach: {
      title: "Posterior fixation",
      routes: ["posterior"],
      note: "Pedicle screw-and-rod constructs commonly work from the back of the spine."
    },
    difficulty: 3
  },
  {
    family: "Motion-preserving cervical discs",
    product: "SECURE-C, SECURE-C3, SECURE-CR",
    clue: "Replacement hinges for the neck that preserve bending, rotation, and small sliding movement.",
    examples: ["SECURE-C", "SECURE-C3", "SECURE-CR"],
    target: "motion",
    image: "secureC",
    approach: {
      title: "Anterior cervical",
      routes: ["anterior"],
      note: "Cervical artificial discs are typically placed through a front-of-neck route."
    },
    difficulty: 1
  },
  {
    family: "Motion-preserving lumbar disc",
    product: "ORBIT-R",
    clue: "A lumbar artificial disc that replaces a worn joint while preserving motion instead of fusing it.",
    examples: ["ORBIT-R"],
    target: "motion",
    image: "orbit",
    approach: {
      title: "Anterior lumbar",
      routes: ["anterior"],
      note: "This lumbar artificial disc is framed as an anterior lumbar disc replacement."
    },
    difficulty: 2
  },
  {
    family: "Vertebral augmentation",
    product: "AFFIRM VCF System",
    clue: "Creates a small cavity inside a cracked vertebra so stabilizing material can be delivered.",
    examples: ["AFFIRM VCF"],
    target: "fracture",
    image: "affirm",
    approach: {
      title: "Posterior percutaneous",
      routes: ["posterior"],
      note: "Vertebral augmentation reaches the fractured vertebra through a small back-side route."
    },
    difficulty: 1
  },
  {
    family: "Bone cement",
    product: "FORTRESS radiopaque bone cement",
    clue: "A visible filling material used to reinforce a cracked or collapsed vertebral block.",
    examples: ["FORTRESS"],
    target: "fracture",
    image: "fortress",
    approach: {
      title: "Augmentation support",
      routes: ["posterior", "flexible"],
      note: "The cement follows the fracture-repair access path rather than defining the anatomy by itself."
    },
    difficulty: 2
  },
  {
    family: "Vertebral body replacement",
    product: "COLOSSEUM, FORTIFY, NIKO, XPand",
    clue: "Support columns used when the vertebral block itself is too damaged and needs replacement.",
    examples: ["COLOSSEUM", "FORTIFY", "NIKO", "XPand"],
    target: "body",
    image: "fortify",
    approach: {
      title: "Approach depends on level",
      routes: ["anterior", "posterior", "lateral", "flexible"],
      note: "Replacement-body cases can use different corridors depending on which vertebral body is rebuilt."
    },
    difficulty: 1
  },
  {
    family: "Expandable replacement body",
    product: "FORTIFY VA and FORTIFY I",
    clue: "Replacement blocks that can restore missing support and are often paired with rods, screws, and biologics.",
    examples: ["FORTIFY VA", "FORTIFY I"],
    target: "body",
    image: "fortify",
    approach: {
      title: "Approach depends on level",
      routes: ["anterior", "posterior", "lateral", "flexible"],
      note: "Expandable support columns are selected with the case route and final reconstruction plan."
    },
    difficulty: 2
  },
  {
    family: "Scoliosis correction",
    product: "REFLECT Scoliosis Correction System",
    clue: "A flexible cord system used to guide growth and correction in a curved spine.",
    examples: ["REFLECT"],
    target: "deformity",
    image: "reflect",
    approach: {
      title: "Growth-modulation route",
      routes: ["anterior", "lateral", "flexible"],
      note: "Flexible correction systems are approach-specific; the game cues them as side/front curve correction."
    },
    difficulty: 1
  },
  {
    family: "Growing rod system",
    product: "MARVEL Growing Rod System",
    clue: "Designed for young children with early-onset scoliosis, allowing controlled lengthening as they grow.",
    examples: ["MARVEL"],
    target: "deformity",
    image: "marvel",
    approach: {
      title: "Posterior growing rod",
      routes: ["posterior"],
      note: "Growing rods are presented here as back-side deformity support along the spine."
    },
    difficulty: 2
  },
  {
    family: "Sacroiliac fixation",
    product: "SI-LOK and SI-LOK SELECT",
    clue: "Foundation-joint screws and instruments used where the spine meets the pelvis.",
    examples: ["SI-LOK", "SI-LOK SELECT"],
    target: "si",
    image: "silok",
    approach: {
      title: "Lateral or posterior SI",
      routes: ["posterior", "lateral"],
      note: "SI-LOK SELECT is cued as a foundation-joint system that may use side or back access."
    },
    difficulty: 1
  },
  {
    family: "Protective biologic barrier",
    product: "ViaShield amnion patch",
    clue: "A soft protective sheet used around tissue as part of the healing environment.",
    examples: ["ViaShield"],
    target: "biologics",
    image: "viashield",
    approach: {
      title: "Follows the case route",
      routes: ["flexible"],
      note: "Protective biologic materials are placed through whichever corridor the procedure uses."
    },
    difficulty: 2
  },
  {
    family: "Graft delivery",
    product: "InstaFill",
    clue: "A delivery tool that behaves like a caulking gun for placing bone graft material into the target space.",
    examples: ["InstaFill"],
    target: "biologics",
    image: "instafill",
    approach: {
      title: "Follows the graft route",
      routes: ["flexible"],
      note: "Graft delivery tools support the selected anterior, posterior, or lateral pathway."
    },
    difficulty: 2
  },
  {
    family: "Autologous biologic processing",
    product: "Harvest SmartPrep 3",
    clue: "A small processing system that concentrates healing ingredients from the patient's own material.",
    examples: ["Harvest SmartPrep 3"],
    target: "biologics",
    image: "harvest",
    approach: {
      title: "Preparation support",
      routes: ["flexible"],
      note: "Autologous processing supports biologic material before or during the chosen procedure."
    },
    difficulty: 3
  },
  {
    family: "Synthetic bone void filler",
    product: "KINEX and KINEX PLUS",
    clue: "Moldable filler material that supports new bone formation in a prepared healing site.",
    examples: ["KINEX", "KINEX PLUS"],
    target: "biologics",
    image: "kinex",
    approach: {
      title: "Follows the case route",
      routes: ["flexible"],
      note: "Bone void fillers support healing at the prepared site, independent of a single approach."
    },
    difficulty: 1
  },
  {
    family: "Robotics and navigation",
    product: "ExcelsiusGPS",
    clue: "GPS plus a laser level for planned screw, instrument, and interbody implant placement.",
    examples: ["ExcelsiusGPS"],
    target: "navigation",
    image: "excelsius",
    approach: {
      title: "Navigation overlay",
      routes: ["anterior", "posterior", "lateral", "flexible"],
      note: "Navigation helps guide planned paths across approach types rather than being one route."
    },
    difficulty: 1
  }
];

const state = {
  deck: [],
  index: 0,
  score: 0,
  streak: 0,
  buzzes: 0,
  attemptMisses: 0,
  answered: false,
  hinted: false
};

const maxAttempts = 3;
const hapticPatterns = {
  correct: [24, 32, 24],
  wrong: 75,
  skip: [55, 35, 55],
  later: 35,
  autoLater: [80, 45, 80, 45, 130]
};

const elements = {
  roundStat: document.querySelector("#roundStat"),
  scoreStat: document.querySelector("#scoreStat"),
  streakStat: document.querySelector("#streakStat"),
  buzzStat: document.querySelector("#buzzStat"),
  familyPill: document.querySelector("#familyPill"),
  productName: document.querySelector("#productName"),
  productVisual: document.querySelector("#productVisual"),
  productImage: document.querySelector("#productImage"),
  productSource: document.querySelector("#productSource"),
  productCaption: document.querySelector("#productCaption"),
  approachPanel: document.querySelector("#approachPanel"),
  productClue: document.querySelector("#productClue"),
  productExamples: document.querySelector("#productExamples"),
  feedback: document.querySelector("#feedback"),
  hintButton: document.querySelector("#hintButton"),
  laterButton: document.querySelector("#laterButton"),
  skipButton: document.querySelector("#skipButton"),
  nextButton: document.querySelector("#nextButton"),
  restartButton: document.querySelector("#restartButton"),
  playAgainButton: document.querySelector("#playAgainButton"),
  completionPanel: document.querySelector("#completionPanel"),
  completionTitle: document.querySelector("#completionTitle"),
  completionCopy: document.querySelector("#completionCopy"),
  patientBoard: document.querySelector("#patientBoard"),
  pulseLight: document.querySelector("#pulseLight"),
  attemptPips: document.querySelector("#attemptPips"),
  legendDrawer: document.querySelector("#legendDrawer"),
  legendList: document.querySelector("#legendList"),
  hotspots: Array.from(document.querySelectorAll(".hotspot")),
  hotspotLabels: Array.from(document.querySelectorAll(".hotspot-label"))
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function currentCard() {
  return state.deck[state.index];
}

function playHaptic(patternName) {
  if (!("vibrate" in navigator)) return;
  const mobileLike = window.matchMedia("(max-width: 940px), (pointer: coarse)").matches;
  if (!mobileLike) return;

  try {
    navigator.vibrate(hapticPatterns[patternName]);
  } catch {
    // Vibration support varies by mobile browser; ignore unsupported calls.
  }
}

function renderLegend() {
  elements.legendList.innerHTML = Object.entries(targets)
    .map(([id, target]) => `
      <div class="legend-item" data-legend="${id}">
        <span class="legend-dot"></span>
        <div>
          <strong>${target.label}</strong>
          <span>${target.summary}</span>
        </div>
      </div>
    `)
    .join("");
}

function setupLegendDrawer() {
  const mobileLegend = window.matchMedia("(max-width: 620px)");
  const syncLegendDefault = () => {
    elements.legendDrawer.open = !mobileLegend.matches;
  };

  syncLegendDefault();
  if (mobileLegend.addEventListener) {
    mobileLegend.addEventListener("change", syncLegendDefault);
    return;
  }

  mobileLegend.addListener(syncLegendDefault);
}

function renderAttempts() {
  elements.attemptPips.innerHTML = [1, 2, 3]
    .map((pip) => `<span class="${pip <= state.attemptMisses ? "used" : ""}"></span>`)
    .join("");
}

function setFeedback(message, type = "") {
  elements.feedback.className = `feedback ${type}`.trim();
  elements.feedback.textContent = message;
}

function clearHotspotStates() {
  elements.hotspots.forEach((hotspot) => {
    hotspot.classList.remove("correct", "wrong");
    hotspot.disabled = false;
  });
  elements.hotspotLabels.forEach((label) => {
    label.classList.remove("correct", "wrong");
  });
  elements.pulseLight.classList.remove("correct", "wrong");
}

function renderProductImage(card) {
  const media = productMedia[card.image];
  if (!media) {
    elements.productVisual.classList.add("is-missing");
    elements.productImage.removeAttribute("src");
    elements.productImage.alt = "";
    elements.productSource.href = "https://www.globusmedical.com/";
    elements.productCaption.textContent = "Official Globus product page";
    return;
  }

  elements.productVisual.classList.remove("is-missing");
  elements.productImage.onload = () => {
    elements.productVisual.classList.remove("is-missing");
    elements.productCaption.textContent = media.caption;
  };
  elements.productImage.onerror = () => {
    elements.productVisual.classList.add("is-missing");
    elements.productCaption.textContent = "Open official Globus product page";
  };
  elements.productSource.href = media.source;
  elements.productImage.alt = `${card.product} official Globus product image`;
  elements.productImage.src = media.src;
  elements.productCaption.textContent = media.caption;
}

function renderApproach(approach) {
  const activeRoutes = new Set(approach.routes);
  const routeChips = Object.entries(approachRoutes)
    .map(([route, label]) => `<span class="approach-chip ${activeRoutes.has(route) ? "active" : ""}">${label}</span>`)
    .join("");

  elements.approachPanel.innerHTML = `
    <div class="approach-head">
      <span>Surgical approach</span>
      <strong>${approach.title}</strong>
    </div>
    <div class="approach-routes" aria-hidden="true">${routeChips}</div>
    <p>${approach.note}</p>
  `;
}

function renderCard() {
  const card = currentCard();
  state.answered = false;
  state.hinted = false;
  state.attemptMisses = 0;
  clearHotspotStates();
  elements.completionPanel.hidden = true;
  elements.nextButton.hidden = true;
  elements.laterButton.hidden = false;
  elements.hintButton.disabled = false;
  elements.laterButton.disabled = state.deck.length - state.index <= 1;
  elements.skipButton.disabled = false;
  elements.familyPill.textContent = card.family;
  elements.productName.textContent = card.product;
  renderProductImage(card);
  renderApproach(card.approach);
  elements.productClue.textContent = card.clue;
  elements.productExamples.innerHTML = card.examples.map((example) => `<span>${example}</span>`).join("");
  renderAttempts();
  setFeedback("Choose the matching anatomy slot on the board.");
  renderStats();
}

function renderStats() {
  elements.roundStat.textContent = `${Math.min(state.index + 1, state.deck.length)}/${state.deck.length}`;
  elements.scoreStat.textContent = String(state.score);
  elements.streakStat.textContent = String(state.streak);
  elements.buzzStat.textContent = String(state.buzzes);
}

function flashWrong(targetId) {
  const hotspot = elements.hotspots.find((item) => item.dataset.target === targetId);
  const label = elements.hotspotLabels.find((item) => item.dataset.label === targetId);
  if (hotspot) {
    hotspot.classList.add("wrong");
    window.setTimeout(() => hotspot.classList.remove("wrong"), 430);
  }
  if (label) {
    label.classList.add("wrong");
    window.setTimeout(() => label.classList.remove("wrong"), 430);
  }
  elements.patientBoard.classList.add("buzzing");
  elements.pulseLight.classList.add("wrong");
  window.setTimeout(() => {
    elements.patientBoard.classList.remove("buzzing");
    elements.pulseLight.classList.remove("wrong");
  }, 440);
}

function lockCorrect(targetId) {
  elements.hotspots.forEach((hotspot) => {
    hotspot.disabled = true;
    hotspot.classList.toggle("correct", hotspot.dataset.target === targetId);
  });
  elements.hotspotLabels.forEach((label) => {
    label.classList.toggle("correct", label.dataset.label === targetId);
  });
  elements.pulseLight.classList.add("correct");
}

function handleGuess(targetId) {
  if (state.answered) return;

  const card = currentCard();
  const guessedTarget = targets[targetId];
  const correctTarget = targets[card.target];

  if (targetId === card.target) {
    const basePoints = 100;
    const streakBonus = state.streak * 25;
    const hintPenalty = state.hinted ? 35 : 0;
    const earned = Math.max(50, basePoints + streakBonus - hintPenalty);

    state.score += earned;
    state.streak += 1;
    state.answered = true;
    playHaptic("correct");
    lockCorrect(targetId);
    setFeedback(`Correct: ${card.product} maps to the ${correctTarget.label.toLowerCase()}. Approach cue: ${card.approach.title}. ${correctTarget.teach} +${earned}`, "good");
    elements.nextButton.hidden = false;
    elements.laterButton.hidden = true;
    elements.laterButton.disabled = true;
    elements.hintButton.disabled = true;
    elements.skipButton.disabled = true;
  } else {
    state.attemptMisses += 1;
    state.score = Math.max(0, state.score - 25);
    state.streak = 0;
    state.buzzes += 1;
    playHaptic(state.attemptMisses >= maxAttempts ? "autoLater" : "wrong");
    flashWrong(targetId);
    renderAttempts();
    if (state.attemptMisses >= maxAttempts) {
      deferCard(`${card.product} is saved for later after three misses. Try this product family again near the end of the tray.`, { vibrate: false });
      renderStats();
      return;
    }
    setFeedback(`Buzz: that is the ${guessedTarget.label.toLowerCase()}. Route cue: ${card.approach.title}. Look for ${correctTarget.anatomy}.`, "bad");
  }

  renderStats();
}

function showHint() {
  if (state.answered) return;
  const card = currentCard();
  const target = targets[card.target];
  state.hinted = true;
  elements.hintButton.disabled = true;
  setFeedback(`Hint: ${card.approach.note} Think ${target.summary.toLowerCase()} The slot is tied to the ${target.anatomy}.`);
}

function skipCard() {
  if (state.answered) return;
  const card = currentCard();
  const target = targets[card.target];
  state.streak = 0;
  state.buzzes += 1;
  state.answered = true;
  playHaptic("skip");
  lockCorrect(card.target);
  setFeedback(`Skipped: ${card.product} belongs at the ${target.label.toLowerCase()}. Approach cue: ${card.approach.title}. ${target.teach}`, "bad");
  elements.nextButton.hidden = false;
  elements.laterButton.hidden = true;
  elements.laterButton.disabled = true;
  elements.hintButton.disabled = true;
  elements.skipButton.disabled = true;
  renderStats();
}

function deferCard(message, options = {}) {
  if (state.answered) return;

  if (state.deck.length - state.index <= 1) {
    elements.laterButton.disabled = true;
    setFeedback("This is the last product in the tray, so there is no later slot.");
    return;
  }

  const [card] = state.deck.splice(state.index, 1);
  state.deck.push(card);
  if (options.vibrate !== false) {
    playHaptic("later");
  }
  renderCard();
  setFeedback(message || `${card.product} is saved for later in the game. Try this product family next.`);
}

function showCompletion() {
  const possible = state.deck.length * 100;
  const accuracyTone = state.score >= possible ? "Perfect board run." : state.score >= possible * 0.75 ? "Strong anatomy mapping." : "Good practice round.";
  elements.completionTitle.textContent = accuracyTone;
  elements.completionCopy.textContent = `Final score: ${state.score}. Buzzes: ${state.buzzes}. You mapped access, spacers, fixation, discs, biologics, fracture repair, SI fixation, replacement bodies, deformity systems, and navigation.`;
  elements.completionPanel.hidden = false;
  elements.hotspots.forEach((hotspot) => {
    hotspot.disabled = true;
    hotspot.classList.remove("correct", "wrong");
  });
  setFeedback("Case complete. Restart to reshuffle the tray.");
  elements.nextButton.hidden = true;
  elements.laterButton.hidden = true;
  elements.laterButton.disabled = true;
  elements.hintButton.disabled = true;
  elements.skipButton.disabled = true;
  elements.pulseLight.classList.remove("correct", "wrong");
  renderStats();
}

function nextCard() {
  state.index += 1;
  if (state.index >= state.deck.length) {
    showCompletion();
    return;
  }
  renderCard();
}

function restartGame() {
  state.deck = shuffle(productCards);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.buzzes = 0;
  state.attemptMisses = 0;
  renderCard();
}

elements.hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => handleGuess(hotspot.dataset.target));
});

elements.hintButton.addEventListener("click", showHint);
elements.laterButton.addEventListener("click", () => deferCard());
elements.skipButton.addEventListener("click", skipCard);
elements.nextButton.addEventListener("click", nextCard);
elements.restartButton.addEventListener("click", restartGame);
elements.playAgainButton.addEventListener("click", restartGame);

renderLegend();
setupLegendDrawer();
restartGame();
