import dynamic from 'next/dynamic'
import Article from "./../Components/Node/NodetypeArticle"
import ErrorPage from "./../Components/404"

const mapper = {
    NodetypeArticle: Article,
    "page-404": ErrorPage
}


module.exports =  mapper