let isIndex = window.location.pathname.indexOf('/index.html') > -1
let temp = 
        `<div id="index-page">
            <div class="img ${isIndex ? 'active' : ''}"></div>
            <div class="word">缴费</div>
        </div>    
        <div id="user-page">
            <div class="img ${isIndex ? '' : 'active'}"></div>
            <div class="word">我的</div>
        </div>`  
    
$('#bottom-bar').html(temp)
$('#index-page').on('click',() => {
    if (isIndex) return false
    window.location.href= './index.html'
})
$('#user-page').on('click',() => {
    if (!isIndex) return false
    window.location.href= './user.html'
})