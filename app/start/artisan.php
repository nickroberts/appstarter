<?php

/*
|--------------------------------------------------------------------------
| Register The Artisan Commands
|--------------------------------------------------------------------------
|
| Each available Artisan command must be registered with the console so
| that it is available to be called. We'll register every command so
| the console gets access to each of the command object instances.
|
*/

/*
|--------------------------------------------------------------------------
| Add User
|--------------------------------------------------------------------------
|
| This will add a new user to the database. You can choose whether or not
| the user is an admin user.
|
*/

Artisan::add(new AppAddUserCommand);