import { describe, expect, it } from "vitest";
import { APT1, APT2 } from "../client/src/lib/data";

describe("apartment tour storage", () => {
  it("serves both apartment videos from permanent Manus storage", () => {
    const videoUrls = [APT1.videoUrl, APT2.videoUrl];

    expect(videoUrls).toEqual([
      "/manus-storage/verano-stay-tour_65b1bf29.mp4",
      "/manus-storage/copacabana-tour_3a1bec44.mp4",
    ]);

    for (const url of videoUrls) {
      expect(url).toMatch(/^\/manus-storage\/.+\.mp4$/);
      expect(url).not.toContain("/videos/");
    }
  });
});
