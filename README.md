# web 课程大作业

## 后台 

### 本地后台

> 需要 node、npm 环境

```bash
npm install -g json-server
cd <project-path>
cd back-end
json-server db.json
```

### 远程后台

> 同样运行了远程的 Json-server 

1. 访问 [http://123.206.80.115:3000/db](http://123.206.80.115:3000/db) 获取所有数据

2. [http://123.206.80.115:3000/user](http://123.206.80.115:3000/users) = 所有用户

3. 以此类推。

### 后台切换

如果想要切换后台，需要将文件 `fron-end/services/config.service.ts` 文件中的 `baseUrl` 换为 `http://localhost:300`, 如果是从本地换为远程后台，则应换为 `http://http://123.206.80.115:3000`。
