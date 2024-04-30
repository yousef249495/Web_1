const links_content = document.getElementById("links-content")
const bar = document.getElementById("bar")

bar.onclick = () => {
    links_content.classList.toggle("active")
    bar.classList.toggle("active")
}