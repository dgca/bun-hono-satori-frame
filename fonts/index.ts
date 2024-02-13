import type { FontStyle, FontWeight } from "satori";

const RobotoBlack = Bun.file("./fonts/Roboto/Roboto-Black.ttf");
const RobotoBold = Bun.file("./fonts/Roboto/Roboto-Bold.ttf");
const RobotoRegular = Bun.file("./fonts/Roboto/Roboto-Regular.ttf");
const RobotoMedium = Bun.file("./fonts/Roboto/Roboto-Medium.ttf");
const RobotoLight = Bun.file("./fonts/Roboto/Roboto-Light.ttf");

const robotoBlack = Buffer.from(await RobotoBlack.arrayBuffer());
const robotoBold = Buffer.from(await RobotoBold.arrayBuffer());
const robotoRegular = Buffer.from(await RobotoRegular.arrayBuffer());
const robotoMedium = Buffer.from(await RobotoMedium.arrayBuffer());
const robotoLight = Buffer.from(await RobotoLight.arrayBuffer());

export const fonts: Array<{
  name: string;
  data: Buffer;
  weight: FontWeight;
  style: FontStyle;
}> = [
  {
    name: "Roboto",
    data: robotoBlack,
    weight: 900,
    style: "normal",
  },
  {
    name: "Roboto",
    data: robotoBold,
    weight: 700,
    style: "normal",
  },
  {
    name: "Roboto",
    data: robotoMedium,
    weight: 500,
    style: "normal",
  },
  {
    name: "Roboto",
    data: robotoRegular,
    weight: 400,
    style: "normal",
  },
  {
    name: "Roboto",
    data: robotoLight,
    weight: 300,
    style: "normal",
  },
];
