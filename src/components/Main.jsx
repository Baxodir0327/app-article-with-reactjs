import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../ui";
import {useNavigate, useParams} from "react-router-dom";
import ArticleService from "../service/Article";
import {getArticlesSuccess} from "../slice/Article";
import {useEffect} from "react";

const Main = () => {
    const navigate = useNavigate()
    const {articles, isLoading} = useSelector(state => state.articles)
    const {loggedIn, user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const getArticles = async () => {
        await ArticleService.getArticles()
            .then(res => {
                dispatch(getArticlesSuccess(res.articles))
            }).catch(err => {
                console.log(err)
            })
    }

    const deleteArticle = async (slug) => {
        await ArticleService.deleteArticle(slug)
            .then(getArticles)
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getArticles()
    }, []);

    return (
        <div className="album py-5 ">
            {isLoading && <Loader/>}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {articles.map(item => (
                    <div className="col" key={Math.random()}>
                        <div className="card h-100 shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                 xmlns="http://www.w3.org/2000/svg" role="img"
                                 aria-label="Placeholder: Thumbnail"
                                 preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>bolta</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>
                            </svg>

                            <div className="card-body ">
                                <p className="card-text fw-bold m-0">{item.title.substring(0, 35)}</p>
                                <p className="card-text fw-">{item.description.slice(0, 200)}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" onClick={() => navigate(`/articles/${item.slug}`)}
                                            className="btn btn-sm btn-outline-success">
                                        View
                                    </button>
                                    {loggedIn && user.username === item.author.username && (
                                        <>
                                            <button type="button" onClick={()=>navigate(`/edit-article/${item.slug}`)} className="btn btn-sm btn-outline-secondary">
                                                Edit
                                            </button>
                                            <button type="button" onClick={() => deleteArticle(item.slug)}
                                                    className="btn btn-sm btn-outline-danger">
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </div>
                                <small className="text-muted fw-bold ">{item.author.username}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;