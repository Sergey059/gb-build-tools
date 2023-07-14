import("./main.sass");

import GalleryCardItems from "./cards";
import { GalleryItem } from "./item";

const rootGallery = document.getElementById("gallery");

GalleryCardItems.map((item) => rootGallery.appendChild(GalleryItem(item)));
