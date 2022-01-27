<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>akshaykn</title>
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        body {margin: 0}
        [hidden] {display: none}
        html {overflow-x: hidden;line-height: 1.15;-webkit-text-size-adjust: 100%;font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;line-height: 1.5}
        *,:after,:before {box-sizing: border-box;border: 0 solid #e2e8f0}
        a {color: inherit;text-decoration: inherit;background-color: transparent}
        svg,video {display: block;vertical-align: middle}
        video {max-width: 100%;height: auto}
    </style>
</head>
<body class="antialiased">
    <div id="app">
        <div class="contain-loader">
            <p>Loading</p>
            <div class="progress-bar-wrap"><div class="progress-bar"></div></div>
        </div>
    </div>
</body>
<style>
    .contain-loader {
    height: 97vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.contain-loader p {
    font-size: 50px;
    font-weight: lighter;
    display: block;
}

.contain-loader .progress-bar-wrap {
    height: 7px;
    width: 50%;
    border: 1px solid #000;
}
.contain-loader .progress-bar{
    height: 100%;
    width: 0%;
    background-color: #000;
    animation: progress 100s ease-in .3s 1 normal;
}
@keyframes progress {
    0%{
        width:0;
    }
    1%{
        width:10%;
    }
    3%{
        width:40%;
    }
    4%{
        width:70%;
    }
    8%{
        width:80%;
    }
    30%{
        width:99%;
    }
    100%{
        width:100%;
    }
}
</style>
<script src="{{ mix('js/manifest.js') }}" defer async></script>
<script src="{{ mix('js/index.js') }}" defer async></script>
<script src="{{ mix('js/vendor.js') }}" defer async></script>
</html>
