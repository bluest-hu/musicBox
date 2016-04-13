'use strict';

var User = function () {
	this.islogin = false;
    this.username = null;
    this.password = null;
    this.userId = null;
};

User.prototype.login = function () {
    this.islogin = true;
	return this.islogin;
};

User.prototype.getUserName = function () {
    if ( !this.islogin ) {
    }

    return this.username;
};

User.prototype.changePassword = function (password) {
    if (password == null) {
        return ;
    }

    this.password = password;
};


User.checkPassword  = function () {
    return false;
};


