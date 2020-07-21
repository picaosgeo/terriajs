import { configure, runInAction } from "mobx";
import _loadWithXhr from "../../lib/Core/loadWithXhr";
import Terria from "../../lib/Models/Terria";
import CommonStrata from "../../lib/Models/CommonStrata";
import i18next from "i18next";
import CatalogGroup from "../../lib/Models/CatalogGroupNew";
import GeoJsonCatalogItem from "../../lib/Models/GeoJsonCatalogItem";
import { BaseModel } from "../../lib/Models/Model";

configure({
  enforceActions: "observed",
  computedRequiresReaction: true
});

describe("UrlTraits", function() {
  let terria: Terria;
  let geoJsonCatalogItem: GeoJsonCatalogItem;

  beforeEach(async function() {
    terria = new Terria({
      baseUrl: "./"
    });
    geoJsonCatalogItem = new GeoJsonCatalogItem("test", terria);
  });

  it(" - gets default cache duration", function() {
    expect(geoJsonCatalogItem.cacheDuration).toBe("1d");
  });

  it(" - can set cache duration", function() {
    runInAction(() => {
      geoJsonCatalogItem.setTrait(
        CommonStrata.definition,
        "cacheDuration",
        "0d"
      );
    });
    expect(geoJsonCatalogItem.cacheDuration).toBe("0d");
  });
});
