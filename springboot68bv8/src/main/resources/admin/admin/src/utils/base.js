const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot68bv8/",
            name: "springboot68bv8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot68bv8/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汉服推广网站"
        } 
    }
}
export default base
