const DATA = {
  mainServers: ["www", "qa", "stage", "mario", "luigi", "bowser"],
  mainNames: ["PROD", "QA", "Stage", "Mario", "Luigi", "Bowser"],
  mainPics: ["prod", "qa", "stage", "mario", "luigi", "bowser"],
  fruitServers: [
    "apricot.intranet",
    "banana.intranet",
    "blackberry.intranet",
    "clementine.intranet",
    "grape.intranet",
    "guava.intranet",
    "kiwi.intranet",
    "lemon.intranet",
    "lime.intranet",
    "mango.intranet",
    "orange.intranet",
    "papaya.intranet",
    "pear.intranet",
    "pigface.intranet",
    "plum.intranet",
    "pumpkin.intranet",
    "strawberry.intranet",
    "training.intranet",
  ],
  fruitNames: [
    "Apricot",
    "Banana",
    "Blackberry",
    "Clementine",
    "Grape",
    "Guava",
    "Kiwi",
    "Lemon",
    "Lime",
    "Mango",
    "Orange",
    "Papaya",
    "Pear",
    "Pigface",
    "Plum",
    "Pumpkin",
    "Strawberry",
    "Training",
  ],
  fruitPics: [
    "apricot",
    "banana",
    "blackberry",
    "clementine",
    "grape",
    "guava",
    "kiwi",
    "lemon",
    "lime",
    "mango",
    "orange",
    "papaya",
    "pear",
    "pigface",
    "plum",
    "pumpkin",
    "strawberry",
    "training",
  ],
  veggieServers: [
    "arugula.intranet",
    "atlas01.intranet",
    "contemporary.intranet",
    "dreamcatcher.intranet",
    "dx.intranet",
    "eggplant.intranet",
    "finding.intranet",
    "ghidorah01.intranet",
    "ginger.intranet",
    "growth.intranet",
    "honeysuckle.intranet",
    "intl.intranet",
    "kaiju.intranet",
    "leek.intranet",
    "logistics01.intranet",
    "logistics02.intranet",
    "logistics03.intranet",
    "mcperson.intranet",
    "mobileqa.intranet",
    "money.intranet",
    "multisku.intranet",
    "potato.intranet",
    "retention.intranet",
    "squash.intranet",
    "stage-aws.intranet",
    "thiswillchargeyou.intranet",
    "trade.intranet",
    "wasabi.intranet",
    "yam.intranet",
    "zzzzzz.intranet",
  ],
  veggieNames: [
    "Arugula",
    "Atlas01",
    "Contemporary",
    "Dreamcatcher",
    "DX",
    "Eggplant",
    "Finding",
    "Ghidorah01",
    "Ginger",
    "Growth",
    "Honeysuckle",
    "INTL",
    "Kaiju",
    "Leek",
    "Logistics01",
    "Logistics02",
    "Logistics03",
    "McPerson",
    "MobileQA",
    "Money",
    "Multisku",
    "Potato",
    "Retention",
    "Squash",
    "Stage-AWS",
    "This Will Charge You",
    "Trade",
    "Wasabi",
    "Yam",
    "ZZZZZZ",
  ],
  veggiePics: [
    "arugula",
    "atlas01",
    "contemporary",
    "dreamcatcher",
    "dx",
    "eggplant",
    "finding",
    "ghidorah01",
    "ginger",
    "growth",
    "honeysuckle",
    "intl",
    "kaiju",
    "leek",
    "logistics01",
    "logistics02",
    "logistics03",
    "mcperson",
    "mobileqa",
    "money",
    "multisku",
    "potato",
    "retention",
    "squash",
    "stage-aws",
    "thiswillchargeyou",
    "trade",
    "wasabi",
    "yam",
    "zzzzzz",
  ],
  reservedServers: ["cranberry.intranet", "dev", "release"],
  reservedNames: ["Cranberry", "Dev", "Release"],
  reservedPics: ["cranberry", "dev", "release"],
};

function makeLink(urlParts, serverName, realName) {
  if (!urlParts) {
    return "https://www.1stdibs.com/";
  }

  let newHost = "";
  const hostParts = urlParts.host.split(".");

  switch (hostParts.length) {
    case 3:
      if (hostParts[0] === "adminv2") {
        if (realName === "PROD") {
          newHost = "adminv2.1stdibs.com";
        } else {
          newHost = `adminv2.${serverName}.1stdibs.com`;
        }
      } else if (hostParts[1] === "1stdibs") {
        newHost = `${serverName}.1stdibs.com`;
      } else {
        newHost = urlParts.host;
      }
      break;
    case 4:
      if (hostParts[0] === "adminv2") {
        if (realName === "PROD") {
          newHost = "adminv2.1stdibs.com";
        } else {
          newHost = `adminv2.${serverName}.1stdibs.com`;
        }
      } else if (hostParts[1] === "intranet") {
        newHost = `${serverName}.1stdibs.com`;
      } else {
        newHost = urlParts.host;
      }
      break;
    case 5:
      if (hostParts[2] === "intranet") {
        const checkProd = serverName === "www" ? "" : `${serverName}.`;
        newHost = `adminv2.${checkProd}1stdibs.com`;
      } else {
        newHost = urlParts.host;
      }
      break;
    default:
      newHost = urlParts.host;
  }

  return `${urlParts.protocol}//${newHost}${urlParts.pathname}${urlParts.search}`;
}

function renderSection(title, bgClass, servers, names, pics, urlParts) {
  const section = document.createElement("div");
  section.className = bgClass;

  const heading = document.createElement("div");
  heading.className = "selection-divider";
  heading.textContent = title;
  section.appendChild(heading);

  const list = document.createElement("div");
  list.className = "manual-selection";

  servers.forEach((server, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "server-choice";

    const anchor = document.createElement("a");
    anchor.href = makeLink(urlParts, server, names[idx]);
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    const image = document.createElement("img");
    image.src = `../images/${pics[idx]}.jpg`;
    image.alt = names[idx];
    anchor.appendChild(image);

    const text = document.createElement("div");
    text.className = "sc-text";
    text.textContent = names[idx];

    wrapper.appendChild(anchor);
    wrapper.appendChild(text);
    list.appendChild(wrapper);
  });

  section.appendChild(list);
  return section;
}

function render(urlString) {
  const currentUrlEl = document.getElementById("current-url");
  const sectionsEl = document.getElementById("sections");
  const currentUrl = typeof urlString === "string" ? urlString : "INVALID URL";
  currentUrlEl.textContent = currentUrl;

  let urlParts;
  try {
    urlParts = new URL(currentUrl);
  } catch (e) {
    urlParts = undefined;
  }

  sectionsEl.appendChild(
    renderSection(
      "Main",
      "color-bg-1",
      DATA.mainServers,
      DATA.mainNames,
      DATA.mainPics,
      urlParts
    )
  );
  sectionsEl.appendChild(
    renderSection(
      "Fruit",
      "color-bg-2",
      DATA.fruitServers,
      DATA.fruitNames,
      DATA.fruitPics,
      urlParts
    )
  );
  sectionsEl.appendChild(
    renderSection(
      "Veggie",
      "color-bg-1",
      DATA.veggieServers,
      DATA.veggieNames,
      DATA.veggiePics,
      urlParts
    )
  );
  sectionsEl.appendChild(
    renderSection(
      "Reserved",
      "color-bg-2",
      DATA.reservedServers,
      DATA.reservedNames,
      DATA.reservedPics,
      urlParts
    )
  );
}

chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  const tab = tabs && tabs[0];
  render(tab && tab.url);
});
