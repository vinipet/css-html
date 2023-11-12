class MobileNavbar{
   constructor(navLinks,navList,mobileMenu){
      this.mobileMenu  = document.querySelector('mobileMenu')
      this.navList = document.querySelector('navList')
      this.navLinks = document.querySelector('navLinks')
      this.activeClass = "active"
   }

   addClickEvent(){
      this.mobileMenu.addEventListener("click", () => console.log("penis"))
   }

   init(){
      if (this.mobileMenu){
         this.addClickEvent()
      }
      return this
   }
}

const mobileNavbar = new MobileNavbar(
   ".mobile-menu",
   ".nav-list",
   ".nav-list li",
)