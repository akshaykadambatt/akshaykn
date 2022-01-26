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
    <div id="app"></div>
</body>
<script src="{{ mix('js/manifest.js') }}" defer async></script>
<script src="{{ mix('js/index.js') }}" defer async></script>
<script src="{{ mix('js/vendor.js') }}" defer async></script>
</html>
