import axios from "./Api";

const ArticleService = {
    async getArticles() {
        return (await axios.get("/articles")).data
    },
    async getArticleDetails(slug) {
        return (await axios.get(`/articles/${slug}`)).data
    },
    async postArticle(article) {
        const {data} = await axios.post('/articles', {article})
        return data
    },
    async deleteArticle(slug) {
        console.log("ishliku")
        const {data} = await axios.delete(`/articles/${slug}`)
        return data
    },
    async editArticle(slug, article) {
        const {data} = await axios.put(`/articles/${slug}`, {article})
        return data
    },
}

export default ArticleService