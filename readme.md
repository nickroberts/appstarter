# Appstarter

Starting point for a new application.

Uses Laravel, Grunt, Bower, Node.

## Setting it all up

### Setting Up the Environment:

**Apache:** *(in the site's conf file)*

```
SetEnv LARAVEL_ENVIRONMENT local
```

**Nginx:** *(as a fastcgi_param)*

```
fastcgi_param LARAVEL_ENVIRONMENT local;
```

### Database Connection

In app/config/[ENVIRONMENT]/ create a database.php file with your settings:

```php
<?php

return array(
    'default' => 'database',
    'connections' => array(
        'database' => array(
            'driver'    => 'mysql',
            'host'      => 'localhost',
            'database'  => 'database_name',
            'username'  => 'database_user',
            'password'  => 'database_password',
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => ''
        )
    )
);

```

### Application Settings

In app/config/[ENVIRONMENT]/ create an app.php file with your settings:

```php
<?php

return array(
    'debug' => true,
    'url' => 'http://your-url',
    'timezone' => 'UTC',
    'locale' => 'en',
);

```

## Laravel PHP Framework

[![Latest Stable Version](https://poser.pugx.org/laravel/framework/version.png)](https://packagist.org/packages/laravel/framework) [![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.png)](https://packagist.org/packages/laravel/framework) [![Build Status](https://travis-ci.org/laravel/framework.png)](https://travis-ci.org/laravel/framework)

### Official Documentation

Documentation for the entire framework can be found on the [Laravel website](http://laravel.com/docs).