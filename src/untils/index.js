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
  videoUrl = [],
  videoUrlVip = [],
  thumbnailUrls = []
) => {
  const slug = slugify(title);

  return Array.from({ length: total }, (_, i) => {
    const epNum = i + 1;
    const defaultPath = `/videos/${slug}-ep${epNum}`;
    return {
      id: `ep-${slug}-${epNum}`,
      title: `Tập ${epNum}`,
      server: {
        videoUrl: videoUrl[i] || `${defaultPath}.mp4`,
        videoUrlVip: videoUrlVip[i] || `${defaultPath}-vip.mp4`,
      },
      thumbnail: thumbnailUrls[i] || `/thumbnails/${slug}-ep${epNum}.jpg`,
    };
  });
};
