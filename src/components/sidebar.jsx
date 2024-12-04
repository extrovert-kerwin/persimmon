import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "100%" }}>
          <nav
            style={{ height: "100%" }}
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Extrovert</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> 51275902039@stu.ecnu.edu.cn
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      简介
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      有关于我
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      时间线
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.zhihu.com/people/abu-48-57"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#16acdd", fontWeight: "bold" }}
                  >
                    知乎主页
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/hot-zhy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github主页
                  </a>
                </li>
                <li>
                  <a
                    href="http://kerwin-loves-extrovert.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    ♥爱情小屋♥
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>头顶苍穹 努力地生活</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
