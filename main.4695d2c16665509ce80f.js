(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("lYjL"),n("8cZI"),n("lmye"),n("D/wG"),n("JBxO"),n("FdtR"),n("QDHd");var o=n("czhI"),a=n.n(o);a.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var r=function(t){return a.a.post("/users/login",t).then((function(t){var e,n=t.data;return e=n.token,a.a.defaults.headers.common.Authorization=e,n}))},u=function(){return a.a.get("/contacts").then((function(t){return t.data}))},i=(n("L1EO"),{loader:document.querySelector(".loader"),login:document.querySelector(".login"),logout:document.querySelector(".logout"),content:document.querySelector(".content"),form:document.querySelector(".form"),userInfo:document.querySelector(".user-info"),name:document.querySelector(".name"),email:document.querySelector(".email"),list:document.querySelector(".list")}),c=[],s=function(){return i.loader.classList.add("show")},l=function(){return i.loader.classList.remove("show")},d=function(){var t=c.map((function(t){var e=t.id;return"<li>"+t.name+": "+t.number+' <button class="delete" data-id='+e+">x</button></li>"})).join("");i.list.innerHTML="",i.list.insertAdjacentHTML("beforeend",t)};i.login.addEventListener("click",(function(){s(),r({email:"test.user@mail.com",password:"1234567"}).then((function(t){var e=t.user;i.name.textContent=e.name,i.email.textContent=e.email,i.login.classList.remove("show"),i.logout.classList.add("show"),i.content.classList.add("show")})).then(u).then((function(t){return c=t})).then(d).finally(l)})),i.logout.addEventListener("click",(function(){s(),a.a.post("/users/logout").then((function(){i.name.textContent="",i.email.textContent="",i.content.classList.remove("show"),i.logout.classList.remove("show"),i.login.classList.add("show")})).finally(l)})),i.form.addEventListener("submit",(function(t){var e,n=t.target.elements,o=n.name,r=n.number,u={name:o.value,number:r.value};t.preventDefault(),s(),(e=u,a.a.post("/contacts",e).then((function(t){return t.data}))).then((function(t){c.push(t)})).then(d).then((function(){o.value="",r.value=""})).finally(l)})),i.list.addEventListener("click",(function(t){var e=t.target.dataset.id;e&&(s(),function(t){return a.a.delete("/contacts/"+t)}(e).then((function(){c=c.filter((function(t){return t.id!==e}))})).then(d).finally(l))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.4695d2c16665509ce80f.js.map