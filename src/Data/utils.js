export const OpenLink = (link) => window.open(link, "_blank");
export const copyToClipboard = (query) => navigator.clipboard.writeText(query);
export const scrollEvent = (target) => target?.current?.scrollIntoView({ behavior: "smooth" });