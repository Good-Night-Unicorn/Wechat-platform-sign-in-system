const base = {
    get() {
        return {
            url : "http://localhost:8080/qiandaoxitong/",
            name: "qiandaoxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiandaoxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信平台签到系统"
        } 
    }
}
export default base
