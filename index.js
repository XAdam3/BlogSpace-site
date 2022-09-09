let postsArray = []
const form = document.getElementById("form-id")
function renderPosts(){
    let html = ""
        for ( let post of postsArray){
            html += `<h2>${post.title}</h2>
                     <p>${post.body}</p>
                     <hr>
            `
        }
      
        document.getElementById("container").innerHTML = html 
    
}
 function clearForm (){
        document.querySelector("#post-title").value = ""
        document.querySelector("#post-body").value = ""
    }

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })
    form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const titleInfo = document.getElementById("post-title").value
    const bodyInfo = document.getElementById("post-body").value
    const info = {
        title: titleInfo,
        body: bodyInfo   
    }
     fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify({title:titleInfo, body:bodyInfo}),
        headers:{"Content-Type":"application/json"}
    })
        .then(response => response.json())
        .then(post =>{
            postsArray.unshift(post)
            renderPosts()
            clearForm()
            })
        
    
})
