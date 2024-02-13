export function buildUrl(
  url: string | URL,
  searchParams?: Record<string, string>
) {
  const urlObj = typeof url === "string" ? new URL(url) : url;

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      urlObj.searchParams.set(key, value);
    }
  }

  return urlObj.toString();
}

export function buildFullUrl(
  path: string,
  searchParams?: Record<string, string>
) {
  if (typeof process.env.ROOT_URL !== "string") {
    throw new Error("ROOT_URL is not set");
  }

  const urlObj = new URL(path, process.env.ROOT_URL);

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      urlObj.searchParams.set(key, value);
    }
  }

  return urlObj.toString();
}

export function parseUrl(url: string | URL) {
  const asObj = new URL(url);
  const searchParams = Object.fromEntries(asObj.searchParams.entries());

  return {
    asObj,
    searchParams,
    addParams: (params: Record<string, string>) => {
      const nextObj = new URL(url);

      for (const [key, value] of Object.entries(params)) {
        nextObj.searchParams.set(key, value);
      }

      return parseUrl(nextObj.toString());
    },
    nextPath(path: string) {
      const nextObj = new URL(url);
      nextObj.pathname = path;
      return parseUrl(nextObj.toString());
    },
    toString() {
      return asObj.toString();
    },
  };
}

export function getSearchObj(url: string) {
  const asUrlObj = new URL(url);
  return Object.fromEntries(asUrlObj.searchParams.entries());
}
