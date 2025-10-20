const OpenLink = (link) => window.open(link, "_blank");
const copyToClipboard = (query) => navigator.clipboard.writeText(query);
const scrollEvent = (target) => target?.current?.scrollIntoView({ behavior: "smooth" });

export { OpenLink, copyToClipboard, scrollEvent } 