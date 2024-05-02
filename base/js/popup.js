let Popup;

function installPopup() {
  const container = document.getElementById("EntryPopupContainer");
  popup = new EntryTool.Popup({
    container,
    isShow: false,
    theme: "entry",
    data: { data: { data: [] } },
  });
  popup.setData({
    projectNavOptions: {
      categoryOptions: [
        "all",
        "game",
        "living",
        "storytelling",
        "arts",
        "knowledge",
        "etc",
      ],
      sortOptions: ["updated", "visit", "likeCnt", "comment"],
      periodOptions: ["all", "today", "week", "month", "quarter"],
    },
  });
  setSpritePopupEvent();

  const view = Entry.createElement("div");
  new entrylms.Render({
    target: view,
    data: {
      type: "HINT_LIST",
      theme: "BLUE",
      // content: hintPanel,
    },
  });
}

function getAsset(category) {
  const { type, subMenu, sidebar } = category;
  return assets[type].filter((asset) => {
    let checkSub;
    if (subMenu === "all") {
      checkSub = true;
    } else {
      checkSub = asset.category.sub === subMenu;
    }
    return asset.category.main === sidebar && checkSub;
  });
}

function addObjects(data) {
  const objects = data.selected;
  objects.forEach((sprite) => {
    const object = {
      id: Entry.generateHash(),
      objectType: "sprite",
      sprite,
    };
    Entry.container.addObject(object, 0);
  });
}

function addEmptyObject() {
  const object = {
    id: Entry.generateHash(),
    objectType: "sprite",
    sprite: {
      name:
        Lang.Workspace.new_object +
        (Entry.container.getAllObjects().length + 1),
      pictures: [
        {
          dimension: {
            width: 960,
            height: 540,
          },
          fileurl: `${Entry.mediaFilePath}_1x1.png`,
          name: Lang.Workspace.new_picture,
          type: "_system_",
        },
      ],
      sounds: [],
      category: {
        main: "new",
      },
    },
  };
  Entry.container.addObject(object, 0);
  Entry.playground.changeViewMode("picture");
}

let aleady;
function setSpritePopupEvent() {
  popup.on("fetch", (category) => {
    this.popup.setData({ data: { data: getAsset(category) } });
  });
  popup.on("search", (data) => {
    // data 파라미터를 기반으로 list를 구성한다.(API 서버 영역)
    console.log("search", data);
  });
  popup.on("dummyUploads", (data) => {
    // data 파라미터를 기반으로 업로드를 구성한다.(API 서버 영역)
    console.log("dummyUploads", data);
  });
  popup.on("submit", addObjects);
  popup.on("draw", addEmptyObject);
  popup.on("write", () => {});
  popup.on("uploads", () => {});
  popup.on("uploadFail", () => {});
  popup.on("fail", () => {});
  popup.on("error", () => {});
}

function openSpriteManager() {
  const sidebar = getSidebarTemplate({ category: spriteCategory });
  popup.setData({ sidebar });
  popup.show({ type: "sprite" }, {});
}
