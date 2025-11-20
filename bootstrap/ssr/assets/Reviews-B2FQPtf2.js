import { jsxs, jsx } from "react/jsx-runtime";
import { D as Dimensions } from "../app.js";
import { List, Skeleton, Button } from "antd";
import { useState, useEffect } from "react";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
const count = 6;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
function Reviews({ reviews }) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl).then((res) => res.json()).then((res) => {
      setInitLoading(false);
      setData(res.results);
      setList(res.results);
    });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {}
        }))
      )
    );
    fetch(fakeDataUrl).then((res) => res.json()).then((res) => {
      const newData = data.concat(res.results);
      setData(newData);
      setList(newData);
      setLoading(false);
      window.dispatchEvent(new Event("resize"));
    });
  };
  const loadMore = !initLoading && !loading ? /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px"
      },
      children: /* @__PURE__ */ jsx(Button, { onClick: onLoadMore, children: "Show more" })
    }
  ) : null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: Dimensions.pagePaddingClass,
      id: "scrollableDiv",
      style: {
        maxHeight: 400,
        overflow: "auto",
        padding: "0 16px"
      },
      children: [
        " ",
        /* @__PURE__ */ jsx(
          List,
          {
            className: `demo-loadmore-list`,
            loading: initLoading,
            itemLayout: "horizontal",
            loadMore,
            dataSource: list,
            renderItem: (item) => {
              var _a;
              return /* @__PURE__ */ jsx(List.Item, { children: /* @__PURE__ */ jsx(
                Skeleton,
                {
                  avatar: true,
                  title: false,
                  loading: item.loading,
                  active: true,
                  children: /* @__PURE__ */ jsx(
                    List.Item.Meta,
                    {
                      title: /* @__PURE__ */ jsx("a", { href: "https://ant.design", children: (_a = item.name) == null ? void 0 : _a.last }),
                      description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
                    }
                  )
                }
              ) });
            }
          }
        )
      ]
    }
  );
}
export {
  Reviews as default
};
