<!DOCTYPE html>
<html lang="en" ng-app="todo" itemscope itemtype="http://schema.org/WebPage">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>AngularJs To-Do list</title>
        <!-- About a credit for my work :D Do not edit this lines or Half Life 3 will never be released !-->
        <meta name="description" content="Simple To-Do list made with AngularJs" />
        <!-- Google Authorship and Publisher Markup -->
        <link rel="author" href=" https://plus.google.com/+ClaudioLudovicoPanetta/posts"/>
        <link rel="publisher" href="https://plus.google.com/+ClaudioLudovicoPanetta"/>
        <!-- Schema.org markup for Google+ -->
        <meta itemprop="name" content="AngularJs To-Do List">
        <meta itemprop="description" content="Simple To-Do list made with AngularJs">
        <meta itemprop="image" content=" http://www.gravatar.com/avatar/2dca89fe809118d3a93d5a51e2cd28bd.png">
        <!-- Twitter Card data -->
        <meta name="twitter:card" content="http://www.gravatar.com/avatar/2dca89fe809118d3a93d5a51e2cd28bd.png">
        <meta name="twitter:site" content="https://github.com/ludo237/angular-playground">
        <meta name="twitter:title" content="AngularJs To-Do List">
        <meta name="twitter:description" content="Simple To-Do list made with AngularJs">
        <meta name="twitter:creator" content="@ludo237">
        <!-- Twitter summary card with large image must be at least 280x150px -->
        <meta name="twitter:image:src" content=" http://www.example.com/image.html">
        <!-- Open Graph data -->
        <meta property="og:title" content="AngularJs To-Do List" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content=" https://github.com/ludo237/angular-playground" />
        <meta property="og:image" content=" http://www.gravatar.com/avatar/2dca89fe809118d3a93d5a51e2cd28bd.png" />
        <meta property="og:description" content="Simple To-Do list made with AngularJs" />
        <meta property="og:site_name" content="Github" />
        <meta property="article:published_time" content="20134-05-17T05:59:00+01:00" />
        <meta property="article:modified_time" content="2014-05-16T19:08:47+01:00" />
        <meta property="article:section" content="Article Section" />
        <meta property="article:tag" content="Article Tag" />
        <meta property="fb:admins" content="100003484093675" />
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container">
            @yield('container')
        </div>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular.min.js"></script>
        {{ HTML::script('js/app.js') }}
    </body>
</html>
