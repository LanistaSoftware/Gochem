<template>
  <div>
    <div id="container">
      <img src="https://images.unsplash.com/photo-1513854541033-8fa2f80efbdf?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=99fc5e14bfc047ed58ee5a22fd44fc86">
      <div id="overlay">
        weafs.py
      </div>
      <svg viewBox="0 0 450 100" style="position: absolute; left:-3px;top: 0;">
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        <image
          filter="url(#blur)"
          xlink:href="https://images.unsplash.com/photo-1513854541033-8fa2f80efbdf?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=99fc5e14bfc047ed58ee5a22fd44fc86"
          x="0"
          y="-10"
          height="300px"
          width="460px"
        />
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>

body, html {
  height: 100%;
  margin: 0;
  background: rgba(47, 79, 79, 0.7);
}
#container {
    padding-top: 60rem;
  position: relative;
  width: 450px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
}
img {
  height: 300px;
  box-shadow: 0 0 10px 0 #222;
}
#overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  color: rgba(209, 206, 209, 0.4);
  font-family: Inconsolata, monospace;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
