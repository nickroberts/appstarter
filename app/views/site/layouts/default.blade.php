<!DOCTYPE html>

<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width" />

    <title>Appstarter | @yield('title')</title>

    <link rel="stylesheet" href="/css/app.css">
    @yield('styles')

    <script src="/js/head.js"></script>
</head>
<body>

    <div class="off-canvas-wrap">

        <div class="inner-wrap">

            <div class="contain-to-grid show-for-medium-up">

                <nav class="top-bar" data-topbar>

                    <ul class="title-area">
                        <li class="name">
                            <h1><a href="#">{ Logo }</a></h1>
                        </li>
                    </ul>

                    <section class="top-bar-section">
                        <ul class="right">
                            <li><a href="#">Menu Item</a></li>
                        </ul>

                        <ul class="left">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </section>

                </nav>

            </div>

            <nav class="tab-bar hide-for-medium-up">

                <section class="left-small">
                    <a class="left-off-canvas-toggle menu-icon" ><span></span></a>
                </section>

            </nav>

            <aside class="left-off-canvas-menu">
                <ul class="off-canvas-list">
                    <li><a href="/">Home</a></li>
                </ul>
            </aside>

            <header>
                <div class="row">
                    <div class="small-12 columns">
                        Header
                    </div>
                </div>
            </header>

            <div class="row">
                <div class="small-12 columns">
                    @include('notifications')
                </div>
            </div>

            <div class="row">
                <div class="small-12 columns">
                    @yield('content')
                </div>
            </div>

            <footer>
                <div class="row">
                    <div class="small-12 columns">
                        Footer
                    </div>
                </div>
            </footer>

            <a class="exit-off-canvas"></a>

        </div>

    </div>

    <script src="/js/app.js"></script>
    @yield('scripts')
</body>
</html>
