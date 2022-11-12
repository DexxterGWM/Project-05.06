const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")

about.addEventListener("click", () => {

  if (!document.getElementById('winbox-about')) {
    const aboutBox = new WinBox({
      title: "About Me",

      width: "400px",
      height: "400px",
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: aboutContent,

      onfocus: function () {
        this.setBackground("var(--text-color)")
      },

      onblur: function () {
        this.setBackground("#777")
      },
    })
    
    document.getElementById('winbox').id = 'winbox-about'
  }
})

contact.addEventListener("click", () => {
  
  if (!document.getElementById('winbox-contact')) {
    const contactBox = new WinBox({
      title: "Contact Me",
      width: "400px",
      height: "400px",
      top: 100,
      right: 65,
      bottom: 50,
      left: 65,
      mount: contactContent,
      
      onfocus: function () {
        this.setBackground("var(--text-color)")
      },
      onblur: function () {
        this.setBackground("#777")
      },
    })
    
    document.getElementById('winbox').id = 'winbox-contact'
  }
})