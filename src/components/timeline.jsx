import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {/* <span className="heading-meta">highlights</span> */}
                <h2 className="colorlib-heading animate-box">时间线</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          华东师范大学本科 <span>2020-2024</span>
                        </h2>
                        <p>
                          我在华东师范大学软件工程学院，学习软件工程专业，主修面向对象程序设计、数据结构与算法、操作系统、计算机网络、数据库原理与实践、软件分析与测试、移动应用开发、算法分析与设计、软件项目管理、软件工程实践等课程。
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          华东师范大学研究生在读(研一) <span>2024-至今</span>
                        </h2>
                        <p>
                          我在某位导师下读研究生，最近在做java课堂的小助手，欢迎访问：
                          https://sagejavon.xhpolaris.com/
                          <br />
                          里面用到的技术有：chatglm, RAG, knowledge tracing,
                          collaborative filtering。
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          待定 <span>...</span>
                        </h2>
                        <p>未来待续...</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
