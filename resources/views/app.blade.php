<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <style>
      *{
        padding: 0;
        margin: 0;
      }
    </style>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body id="page-top">
    @inertia('app')
       <!-- Bootstrap core JavaScript-->
  </body>
</html>