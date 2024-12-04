import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  position: "relative",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: "url(images/img_bg.jpg)",
                  fillOpacity: 0.5,
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            你好 <br />
                            我是软柿子不要捏，你可以叫我赵晗瑜
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://haoeikyu4hq.feishu.cn/file/OzQBbRR4moyblvxKwNpcj9CGnPd?from=from_copylink"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                style={{
                  position: "relative", // 确保伪元素覆盖在背景上
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: "url(images/img_bg.jpg)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            我喜欢打羽毛球
                            <br /> 喜欢听许嵩、毛不易、周杰伦、邓紫棋
                          </h1>
                          <p>
                            {/* <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/hot-zhy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  position: "relative", // 确保伪元素覆盖在背景上
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: "url(images/img_bg.jpg)",
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            我有时候写公众号
                            <br />
                            欢迎关注公众号“软柿子之心”{" "}
                          </h1>
                          <p>
                            {/* <a
                              className="btn btn-primary btn-learn"
                              href="https://Extrovertbarochiya.me/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
