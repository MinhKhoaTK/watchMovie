export const slugify = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const createEpisodes = (
  title,
  total,
  videoUrls = [],
  thumbnailUrls = []
) => {
  const slug = slugify(title);
  return Array.from({ length: total }, (_, i) => {
    const epNum = i + 1;
    return {
      id: `ep-${slug}-${epNum}`,
      title: `Tập ${epNum}`,
      videoUrl: videoUrls[i] || `/videos/${slug}-ep${epNum}.mp4`,
      thumbnail: thumbnailUrls[i] || `/thumbnails/${slug}-ep${epNum}.jpg`,
    };
  });
};
