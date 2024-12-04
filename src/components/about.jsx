import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">有关于我</span>
                      <h2 className="colorlib-heading">我是谁</h2>
                      <p>
                        我来自华东师范大学软件工程学院，研一在读，研究方向是AI
                        for Education、自然语言处理。 但我最喜欢的还是前端开发。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">我会做什么？</span>
                <h2 className="colorlib-heading">这是我的一些专业特长</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web开发 </h3>
                    <p>
                      熟悉html, css, js, python等编程语言
                      <br />
                      熟悉react, vue, uni-app等前端开发框架
                      <br />
                      熟悉mysql, neo4j等关系和非关系数据库
                      <br />
                      熟悉figma, 墨刀, pixso等UI/UX设计工具
                      <br />
                      熟悉git, svn等版本控制工具
                      <br />
                      熟悉软件开发流程，如需求分析、设计、编码、测试、部署和维护
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>数据结构与算法</h3>
                    <p>
                      作为计算机专业的学生，我熟悉数据结构与算法的基本概念和原理，包括线性表、栈、队列、树、图等数据结构，以及排序、查找、动态规划等算法。
                      <br />
                      我能够熟练地使用这些知识解决实际问题，并能够设计和实现高效的数据结构和算法。
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>科研与竞赛</h3>
                    论文类 短文(共六页) + UniSpLLM: An Integrated Approach for
                    Enhancing Reasoning and Education with Large Language Models
                    + 第一作者(导师通讯作者）+ 已录用可检索 + The 32nd
                    International Conference on Computers in Education (ICCE
                    2024) + 我校教育学部认可的顶尖国际会议
                    <br />
                    “华为杯”第六届中国研究生人工智能创新大赛全国三等奖
                    <br />
                    2024 AAAI competition on math problem solving 团体赛全球第二名、第三名、第三名(赛道二，英文);
                    <br />
                    ......
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
