
document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  revealItems.forEach((item, index) => {
    window.setTimeout(() => item.classList.add("is-visible"), 80 + index * 90);
  });

  document.querySelectorAll(".action-card").forEach((button) => {
    const press = () => button.classList.add("is-pressed");
    const release = () => button.classList.remove("is-pressed");

    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("pointerleave", release);
    button.addEventListener("blur", release);
  });
});

document.addEventListener("DOMContentLoaded",()=>{
 const v=document.querySelector(".viber-link");
 if(v){v.addEventListener("click",e=>{
   if(!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
     e.preventDefault();
     alert("Viber chat се отваря през телефон с инсталиран Viber.");
   }
 });}
});
