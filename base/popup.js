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
  console.log("popup", popup);
}

function openSpriteManager() {
  console.log("open sprite");
  popup.show({ type: "sprite" }, {});
}
