var mysql = require("mysql");

/**
 * MySql 连接信息
 * @type {Object}
 */
var SQL_CONNECTION = {
	host: '127.0.0.1', 
    user: 'root',
    password: 'usbw',
    database:'test', 
    port: 3306
};

var connection = mysql.createConnection(SQL_CONNECTION);

