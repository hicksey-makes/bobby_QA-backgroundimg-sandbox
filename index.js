console.log(window.innerWidth);

window.addEventListener("resize", () => {
  if (window.innerWidth <= 480) {
    document.querySelector("#bobby-head").src="images/480x800/480x800 Open invitation.png"
  }
    else if (window.innerWidth <640) {
    document.querySelector("#bobby-head").src="images/720x1280/720x1280 Open invitation.png"
  }
   else if (window.innerWidth <=768) {
    document.querySelector("#bobby-head").src = "images/768x1024/768x1024 Open invitation.png";
  } else if (window.innerWidth <=992) {
    document.querySelector("#bobby-head").src = "images/1024x768/1024x768 Open invitation.png"
  } else if (window.innerWidth <1200) {
    document.querySelector("#bobby-head").src = "images/1280x1024/1280x1024 Open invitation.png"
  } else {
    document.querySelector("#bobby-head").src = "images/1920x1080/1920x1080 Open invitation.png"
  }
}
)
