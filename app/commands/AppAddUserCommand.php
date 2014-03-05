<?php

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class AppAddUserCommand extends Command {

    /**
    * The console command name.
    *
    * @var string
    */
    protected $name = 'app:adduser';

    /**
    * The console command description.
    *
    * @var string
    */
    protected $description = 'This adds a user to the system';

    /**
    * Create a new command instance.
    *
    * @return void
    */
    public function __construct()
    {
        parent::__construct();
    }

    /**
    * Execute the console command.
    *
    * @return void
    */
    public function fire()
    {

        $ask_username = $this->ask('Username: ');
        $user = User::where('username','=',$ask_username)->first();
        if($user)
        {
            $this->error('That username already exists. Please try again.');
            die();
        }

        $ask_email = $this->ask('Email address: ');
        $user = User::where('email','=',$ask_email)->first() > 0;
        if($user)
        {
            $this->error('That email already exists. Please try again.');
            die();
        }

        $ask_password = $this->secret('Password: ');
        $ask_password_again = $this->secret('Password (again): ');

        while($ask_password != $ask_password_again)
        {
            $this->error('The passwords do not match, please try again.');
            $ask_password = $this->secret('Password: ');
            $ask_password_again = $this->secret('Password (again): ');

        }

        $ask_isadmin = $this->ask('Is this an admin user [y/n]? ');

        $user = new User;

        $user->username = $ask_username;
        $user->email = $ask_email;
        $user->password = $ask_password;
        $user->password_confirmation = $ask_password_again;
        $user->confirm();
        $user->save();

        if($ask_isadmin === 'y' || $ask_isadmin === 'Y')
        {
            $admin = Role::where('name','=','Admin')->first();
            if(!$admin)
            {
                // Create the admin role
                $admin = new Role;
                $admin->name = 'Admin';
                $admin->save();
            }
            $user->attachRole( $admin );
            $user->save();
        }

        $this->question('The username ' . $ask_username . ' was successfully added!');

    }

}
