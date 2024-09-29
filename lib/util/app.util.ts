import { IModelItems } from "@/models/app.model";
import { ProductType, Season } from "@prisma/client";

export const getCurrentSeason = (
  hemisphere: "northern" | "southern" = "northern"
): Season => {
  const date = new Date();
  const month = date.getMonth() + 1;

  let season: Season;

  if (hemisphere === "northern") {
    if (month >= 3 && month <= 5) {
      season = "spring";
    } else if (month >= 6 && month <= 8) {
      season = "summer";
    } else if (month >= 9 && month <= 11) {
      season = "fall";
    } else {
      season = "winter";
    }
  } else {
    if (month >= 3 && month <= 5) {
      season = "fall";
    } else if (month >= 6 && month <= 8) {
      season = "winter";
    } else if (month >= 9 && month <= 11) {
      season = "spring";
    } else {
      season = "summer";
    }
  }

  return season;
};


export const getNavModelItems = (itemType:ProductType):IModelItems=>{}