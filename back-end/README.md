# 后台说明

后台使用 JSON-Server 提供 Restful 接口。

## 使用方法

1. 全局安装 `JSON Server`, `npm install -g json-server`。

2. 运行，在当前目录下执行命令 `npm run mock`。

3. 访问 `http://localhost:3000` 即可访问后台服务。

> json-server 使用教程 [https://www.cnblogs.com/ys-wuhan/p/6387791.html](https://www.cnblogs.com/ys-wuhan/p/6387791.html)

## 数据说明

1. Users => 用户表

2. LeaveRequests => 外出申请记录表

3. Records => 打卡记录表

## 接口说明

1. All
    
    - GET, http://localhost:3000/db, 所有数据

1. Users 
    
    - GET, http://localhost:3000/Users, return all users.
    - GET, http://localhost:3000/Users/{id}, return this id user.
    - POST, http://localhost:3000/Users, add a new user record.
    - PUT, http://localhost:3000/Users/{id}, change the user's record.
    - DELETE, http://localhost:3000/User/{id}, delete a user.

2. 其他接口类推