/** Позволяет импортировать .html как строку (angular.json → loader: { ".html": "text" }). */
declare module '*.html' {
    const content: string;
    export default content;
}
