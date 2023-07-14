export function GalleryItem(item) {
  const itemElement = document.createElement("div");
  const boxElement = document.createElement("div");
  itemElement.classList = "gallery__item";
  boxElement.classList = "gallery__box";

  if (item.type === "image") {
    const imgElement = document.createElement("img");
    imgElement.classList = "gallery__item-img";
    imgElement.src = item.src;
    boxElement.appendChild(imgElement);
  } else if (item.type === "audio") {
    const audioElement = document.createElement("audio");
    audioElement.classList = "gallery__audio";
    audioElement.src = item.src;
    audioElement.controls = true;
    boxElement.appendChild(audioElement);
  } else if (item.type === "video") {
    const videoElement = document.createElement("video");
    videoElement.classList = "gallery__video";
    videoElement.src = item.src;
    videoElement.controls = true;
    boxElement.appendChild(videoElement);
  }

  const titleElement = document.createElement("h2");
  titleElement.classList = "gallery__item-title";
  titleElement.textContent = item.title;

  itemElement.appendChild(boxElement);
  itemElement.appendChild(titleElement);

  return itemElement;
}
