type CastId = {
  fid: number;
  hash: string;
};

type UntrustedData = {
  fid: number;
  url: string;
  messageHash: string;
  timestamp: number;
  network: number;
  buttonIndex: number;
  inputText?: string;
  castId: CastId;
};

type TrustedData = {
  messageBytes: string;
};

type FrameResponse = {
  untrustedData: UntrustedData;
  trustedData: TrustedData;
};

function assertObject(obj: unknown): asserts obj is Record<string, unknown> {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Invalid object");
  }
}

function assertFrameResponse(json: unknown): asserts json is FrameResponse {
  assertObject(json);

  if (!("untrustedData" in json) || !("trustedData" in json)) {
    throw new Error("Invalid frame response");
  }

  assertObject(json.untrustedData);
  assertObject(json.trustedData);

  if (
    !("fid" in json.untrustedData) ||
    !("url" in json.untrustedData) ||
    !("messageHash" in json.untrustedData) ||
    !("timestamp" in json.untrustedData) ||
    !("network" in json.untrustedData) ||
    !("buttonIndex" in json.untrustedData) ||
    !("castId" in json.untrustedData)
  ) {
    throw new Error("Invalid frame response");
  }

  if (!("messageBytes" in json.trustedData)) {
    throw new Error("Invalid frame response");
  }
}

export function parseFrameResponse<T extends unknown>(
  json: T extends Promise<unknown> ? never : T
): FrameResponse | null {
  try {
    assertFrameResponse(json);
    return json;
  } catch (e) {
    console.error(e);
    console.log(JSON.stringify(json, null, 2));
    return null;
  }
}
