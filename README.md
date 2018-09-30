# JS 全栈开发总结

[![powered by Egg.js][egg-image]][egg] [![powered by vue][vue-image]][vue] [![docker build automated][docker-image]][docker]

[egg]: https://eggjs.org
[egg-image]: https://img.shields.io/badge/Powered%20By-Egg.js-ff69b4.svg?style=flat-square

[vue]: https://cn.vuejs.org
[vue-image]: https://img.shields.io/badge/powered%20by-vue-green.svg

[docker]: http://www.docker.org.cn
[docker-image]: https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg
	
## 背景

本人是一位小前端，没事搞搞后端，同时搞搞运维，眼看着技术的飞速更新，总感觉自身知识点不够体系化，惶惶不可终日，所以我希望通过写一系列的文章来介绍 JavaScript 全栈开发，做到 "connecting the dots"，同时希望 JavaScript 爱好者们可以提出更多的宝贵建议。

## 内容简介

本文主要讲授了如何基于 Vue.js，与阿里巴巴企业级 Node.js 框架 Egg.js 开发一个简单产品。

并由此牵扯到性能调优、运维等方面的一些知识点。

## 写作思路

通过一个项目实战，从前端的的页面搭建、路由使用、参数传递、接口请求到后端的数据库的设计、接口设计再到后台管理系统的设计最后到项目部署。

**其中我们要思考的问题：**

> 如何让自己的代码变得更优雅？
> 
> 如何实现持续集成交付？
> 
> 怎样是一个优秀的数据库设计？
> 
> 如何应对高并发场景？
> 
> 如何对海量数据进行调优？
> 
> 如何让运维工作变得更加轻松？

**技能要求**

+ HTML
+ CSS
+ JS

**系统环境**

+ macOS

**服务器环境**

+ centOS 7

## 目录

#### 认识项目

1. [制定规划]()
2. [用户故事]()
3. [需求分析]()

#### 前端起步

1. [初识vue-cli]()
2. [node.js环境安装]()
3. [git环境安装]()

#### 页面开发

1. [分析页面]()
2. [移动端适配方案]()
3. [引入UI库]()
4. [组件设计]()
5. [首页]()
6. [列表页面]()
7. [轮播插件]()
8. [css预处理器]()
9. [flex布局]()

#### 后端起步

1. [node.js基础]()
2. [egg.js框架]()

#### 关系型数据库

1. [mysql介绍]()
2. [InnoDB储存引擎]()
3. [数据类型]()
4. [表设计]()
5. [CRUD操作]()
6. [高性能索引]()
7. [事务]()
8. [分区]()

#### NoSQL

1. [Redis安装]()
2. [Redis数据类型]()
3. [Redis应用]()
4. [MongoDB介绍]()
5. [MongoDB安装]()
6. [MongoDB数据类型]()
7. [MongoDB常用CRUD]()

#### ELK

1. [什么是ELK]()
2. [ElasticSearch安装]()
3. [ElasticSearch入门]()
4. [Logstash安装]()
5. [Logstash入门]()
6. [Kibana安装]()
7. [Kibana入门]()

#### egg.js框架

1. [egg.js配置]()
2. [中间件]()
3. [单元测试]()
4. [模板渲染]()

#### 接口开发

1. [用户模块]()
2. [商品模块]()
3. [话题]()
4. [回复]()
5. [七牛云使用]()
6. [文件上传]()
7. [微信支付]()

#### 项目部署

1. [Linux介绍]()
2. [安装lnmp]()
3. [Jenkins介绍]()
4. [安装配置Jenkins]()
5. [Nginx配置]()

#### Docker部署

1. [Docker介绍]()
2. [安装Docker]()
3. [国内镜像]()
4. [常用命令]()
5. [Dockerfile]()
6. [打包镜像]()
7. [认识Docker compose]()
8. [编排部署]()

#### 集群

1. [认识集群]()
2. [Nginx负载均衡]()
3. [使用LVS]()
4. [k8s集群]()

#### 分布式

1. [认识分布式]()
2. [认识RPC]()
3. [RPC框架]()
4. [认识Dubbo]()
5. [监控]()
6. [安全]()
