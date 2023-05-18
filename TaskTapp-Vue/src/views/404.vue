<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1235.791" height="882.562" viewBox="0 0 1235.791 882.562">
  <defs>
    <linearGradient id="linear-gradient" x1="0.079" y1="0.271" x2="1" y2="0.789" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#32279e"/>
      <stop offset="1" stop-color="#b756a3"/>
    </linearGradient>
    <filter id="Path_386" x="0" y="0" width="1235.791" height="882.562" filterUnits="userSpaceOnUse">
      <feOffset dy="30" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161" result="color"/>
      <feComposite operator="out" in="SourceGraphic" in2="blur"/>
      <feComposite operator="in" in="color"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>
  </defs>
  <g data-type="innerShadowGroup">
    <path id="Path_386-2" data-name="Path 386" d="M777.548,810.177c-78.243-160.49-51.83-524.7,188.7-483.124S1292,356.518,1359.776,187.085s457.39-23.687,558.958,165.839c66.121,123.382-40.559,165.723,40.509,328.182,62.686,108.76-88.72,225.765-193.191,264.084C1466.707,1054.988,855.791,970.668,777.548,810.177Z" transform="translate(-738.171 -112.293)" fill="url(#linear-gradient)"/>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_386)">
      <path id="Path_386-3" data-name="Path 386" d="M777.548,810.177c-78.243-160.49-51.83-524.7,188.7-483.124S1292,356.518,1359.776,187.085s457.39-23.687,558.958,165.839c66.121,123.382-40.559,165.723,40.509,328.182,62.686,108.76-88.72,225.765-193.191,264.084C1466.707,1054.988,855.791,970.668,777.548,810.177Z" transform="translate(-738.17 -112.29)" fill="#fff"/>
    </g>
  </g>
</svg>

<div class="textDiv">
    <h1>404</h1>
    <h2>Sorry, we can’t find that page! </h2>
    <a href="/" class="cta">Back to home</a>
</div>
</template>
    
<style>
    html, body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .textDiv{
        text-align: center;
        z-index: 2;
        top: -75vh;
    }
    svg{
        max-height: 100vh;
        max-width: 100vw;
        z-index: 1;
    }

    .textDiv h1{
        font-size:200px;
        font-weight: 750;
        color: white;
    }
    .textDiv h2{
        top: -5vh;
        font-size:25px;
        color: white;
        font-weight: 700;
    }
    .cta {
        position: absolute;
    bottom: -25px;
    display: inline-block;
    padding: 5px 5px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #823696;
    text-decoration: none;
    background-color: #fff;
    border-radius: 50px;
    width: 20%;
    text-align: center;
    box-sizing: border-box;
    left: 40%;
    }
    
</style>