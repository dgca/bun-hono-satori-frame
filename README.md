# bun-hono-satori-frame

A bare-bones Farcaster Frames server with JSX to PNG generation

## Get Started

Install dependencies:

```bash
bun install
```

Start in dev mode:

```bash
bun dev
```

Start in production mode:

```bash
bun start
```

## Project Structure

### `/app`

This is where the application code lives. The Hono server is created in `/app/index.ts`, and there are a couple handler functions to handle requests.

The example server that this project comes with is meant to be a starting point for you to build your own server. You can structure your server however you'd like.

For reference, the example server is a simple heads or tails game.

`/app/handleGet.tsx` handles the initial frame. It includes an input where the player can enter their name.

`/app/handlePost.tsx` handles the frame that receives the POST request after the user has interacted with the initial frame. It manages the game state using query params. Based on the state, it either asks the player to choose heads or tails, or it randomly generates a value and tells the player if they won or lost.

`/app/shared/Card.tsx` shows how you can create a simple component using the `<Box />` and `sx` helpers. These two utilities are described below.

### `/lib`

This is where the utilities live that make it easy to build the frame handlers. Utilities are described below.

## Utilities

### `<Box />`

`import { Box } from '@/lib/components`

This is a simple wrapper around the `div` element with default styles to make Satori happy.

### `sx(...styles: Array<CSSProperties | undefined>): CSSProperties`

`import { sx } from '@/lib/components`

This function lets you compose style objects. It takes one or more style object and merges them into one object.

### `parseFrameResponse(json: unknown): FrameResponse | null`

Takes an incoming request body, asserts that it matches the expected frames POST body shape, and returns the parsed body.

Returns null if the body is not valid.

### `renderFrameDocument(frameProps, body?: ReactNode)`

Takes an object that describes the frame shape, and returns an HTML string of the frame. This is what the server should return to create a valid frame.

Optionally takes a body which will be included in the body of the HTML document.

### `renderImage(element: JSX.Element, options?: ImageOptions)`

Takes a JSX element and converts it to a PNG. It returns an object that lets you get the raw PNG data, a base64 encoded string, and it also includes the width and height of the image.

### `routeHandler((ctx: Context) => Promise<Response>)`

A utility for typing Hono route handler functions correctly.

### `buildFullUrl(path: string, searchParams?: Record<string, string>)`

A utility for building a full URL from a path and search params. You must set `process.env.ROOT_URL` to use this function.

Helpful for creating the initial GET handler's `postUrl`.

### `parseUrl(url: string | URL)`

A utility for parsing and manipulating URLs. It takes a URL string or a URL object and returns an object with the following methods:

- `asObj`: Returns the URL object
- `searchParams`: Returns the search params as an object of key-value pairs
- `addParams`: Adds search params to the URL. Overrides existing params with the same key.
- `setPathname`: Updates the pathname of the URL.
- `toString`: Returns the URL as a string.

All of these methods return a new `parseUrl` object, so you can chain them together.