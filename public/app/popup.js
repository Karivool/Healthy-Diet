const DATA = {
  mainServers: ["www", "qa", "stage", "mario", "luigi"],
  mainNames: ["PROD", "QA", "Stage", "Mario", "Luigi"],
  mainPics: ["prod", "qa", "stage", "mario", "luigi"],
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

function makeNumberedServerLink(urlParts, prefix, numberValue) {
  const normalizedNumber = String(numberValue || "").trim();
  if (!/^\d+$/.test(normalizedNumber)) {
    return null;
  }

  const host = `${prefix}${normalizedNumber}.${prefix}.1stdibs.com`;
  if (!urlParts) {
    return `https://${host}/`;
  }

  return `https://${host}${urlParts.pathname}${urlParts.search}`;
}

function renderNumberedServerInput(label, prefix, urlParts) {
  const wrapper = document.createElement("form");
  wrapper.className = "custom-switcher";

  const title = document.createElement("label");
  title.className = "custom-switcher-label";
  title.textContent = label;

  const controls = document.createElement("div");
  controls.className = "custom-switcher-controls";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.step = "1";
  input.placeholder = "Number";
  input.setAttribute("aria-label", `${label} number`);

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Open";

  const error = document.createElement("div");
  error.className = "custom-switcher-error";

  controls.appendChild(input);
  controls.appendChild(submit);
  wrapper.appendChild(title);
  wrapper.appendChild(controls);
  wrapper.appendChild(error);

  wrapper.addEventListener("submit", (event) => {
    event.preventDefault();
    const targetUrl = makeNumberedServerLink(urlParts, prefix, input.value);
    if (!targetUrl) {
      error.textContent = "Enter a valid number.";
      return;
    }

    error.textContent = "";
    chrome.tabs.create({ url: targetUrl });
  });

  return wrapper;
}

function renderCustomServerInputs(urlParts) {
  const container = document.createElement("div");
  container.className = "custom-switchers";
  container.appendChild(renderNumberedServerInput("FS", "fs", urlParts));
  container.appendChild(renderNumberedServerInput("TS", "ts", urlParts));
  return container;
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

  const mainSection = renderSection(
    "Main",
    "color-bg-1",
    DATA.mainServers,
    DATA.mainNames,
    DATA.mainPics,
    urlParts
  );
  mainSection.appendChild(renderCustomServerInputs(urlParts));
  sectionsEl.appendChild(mainSection);
}

chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  const tab = tabs && tabs[0];
  render(tab && tab.url);
});
