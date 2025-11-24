import { jsx, jsxs } from "react/jsx-runtime";
import { C as Colors } from "../app.js";
import { Flex, Typography } from "antd";
function Hero({ title, whichRoute, settings }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        position: "relative",
        height: "300px",
        width: "100%",
        textAlign: "left",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("${settings.hero_image}")`,
        marginBottom: ""
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            height: "300px"
          },
          children: /* @__PURE__ */ jsxs(
            Flex,
            {
              vertical: true,
              align: "center",
              justify: "center",
              children: [
                /* @__PURE__ */ jsx(
                  Typography.Title,
                  {
                    level: 1,
                    style: {
                      textAlign: "center",
                      color: Colors.textBlackColor,
                      width: "100%",
                      fontWeight: "normal"
                    },
                    children: title
                  }
                ),
                whichRoute
              ]
            }
          )
        }
      )
    }
  );
}
export {
  Hero as H
};
