(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(7),c=i.n(a),n=(i(14),i(6)),s=i(2),l=(i(15),i(1)),r=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(8),j=i.n(m);var b=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,n=e.placeholder,o=void 0===n?"Enter ".concat(c):n,d=e.required,m=void 0!==d&&d,b=e.onChange,h=void 0===b?function(){}:b,u=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(u,1)[0],g=Object(l.useState)(!1),p=Object(s.a)(g,2),v=p[0],x=p[1],f=v&&m&&!i;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:O,children:c}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":f}),placeholder:o,value:i,onChange:function(e){return h(e.target.value)},onBlur:function(){return x(!0)}})}),f&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")})]})},h=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(s.a)(i,2),c=a[0],n=a[1],o=Object(l.useState)(""),d=Object(s.a)(o,2),m=d[0],j=d[1],h=Object(l.useState)(""),u=Object(s.a)(h,2),O=u[0],g=u[1],p=Object(l.useState)(""),v=Object(s.a)(p,2),x=v[0],f=v[1],M=Object(l.useState)(""),N=Object(s.a)(M,2),w=N[0],U=N[1],y=Object(l.useState)(""),I=Object(s.a)(y,2),T=I[0],B=I[1],_=m&&x&&w&&T;return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:m,description:O,imgUrl:x,imdbUrl:w,imdbId:T}),n((function(e){return e+1})),j(""),g(""),f(""),U(""),B("")},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(b,{name:"title",label:"Title",value:m,onChange:j,required:!0}),Object(r.jsx)(b,{name:"description",label:"Description",value:O,onChange:g}),Object(r.jsx)(b,{name:"imgUrl",label:"Image URL",value:x,onChange:f,required:!0}),Object(r.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:w,onChange:U,required:!0}),Object(r.jsx)(b,{name:"imdbId",label:"Imdb ID",value:T,onChange:B,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{disabled:!_,type:"submit","data-cy":"submit-button",className:"button is-link",children:"Add"})})})]},c)},u=i(9),O=function(){var e=Object(l.useState)(Object(n.a)(u)),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{onAdd:function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};c.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.b731adf2.chunk.js.map