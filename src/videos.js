function createVideos(){
    const videos = document.createElement('div');
    videos.classList.add('videos');
    videos.textContent = "This is Videos Section";

    return videos;
}
function loadVideos(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createVideos());
}
export default loadVideos;