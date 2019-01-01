# web 课程大作业

## 小组分工
> 小组成员：孙琦淞 3016218180 宋琦琪 3016218178  吴可歆 3016218183 范立水 3016218053

> 需求文档：孙琦淞 宋琦琪 吴可歆 范立水

> 设计文档: 孙琦淞 宋琦琪 吴可歆 范立水

> 测试文档：宋琦琪 吴可歆

> 代码:
       
       孙琦淞：annual.ts, user.ts, annual-page.component.ts, login.component.ts, annual.service.ts, user.service.ts,footer.ts

       宋琦琪：out.ts, goout-page.component.ts, auth.service.ts, out.service.ts,navbar.ts,new-leave.ts,new-out.ts
       
       吴可歆：record.ts, clock-page.component.ts, config.service.ts, record.service.ts,register.ts
       
       范立水：leave.ts, approve-page.component.ts, leave-page.component.ts, approve.service.ts, leave.service.ts，approve-go-out-page-card.ts,approve-leave-card.ts,goout-page-card.ts
## 项目实时预览

访问 [angular7-demo](https://xiaofeit.gitlab.io/angular7-demo) 查看项目的实时预览

> 请使用 http 访问，如果登陆失败，无法加载数据，请点击浏览器的允许从不安全的站点加载数据

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
