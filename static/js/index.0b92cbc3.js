(()=>{"use strict";var A,e,t,r,i={557(A,e,t){var r=t(848),i=t(540),n=t(338),o=t(983),a=t(651),l=t(106),s=t(274);let g=o.Ay.h1`
  font-weight: bold;
  font-size: 3rem;
  line-height: 5rem;
`,h=o.Ay.h3`
  text-decoration: underline dotted;
  font-weight: bolder;
`,c=o.Ay.img`
  width: 4rem;
  border-radius: 50px;
`,d=t.p+"static/image/wing-sprite.c198b9a2.png",B=[{text:"(I)ntro",path:"/"},{text:"(E)xperiences",path:"/exp"}],x=o.Ay.nav`
  margin: 1rem auto;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`,Q=(0,o.Ay)(a.k2)`
  text-decoration: none;
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  font-weight: bolder;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;

  &.active {
    text-decoration: underline dotted;
  }

  &:hover {
    text-decoration: underline dotted;
  }
`,m=o.Ay.div``,p=o.Ay.div`
  background: url(${d}) no-repeat -3px -325px;
  background-size: 339px 366px;
  width: 58px;
  height: 41px;
  transform: scale(0.5);
  filter: ${A=>{let{theme:e}=A;return e.wingFilter}};
  transition: filter 0.5s ease-in-out;
  opacity: 0.3;

  @media (max-width: 425px) {
    display: none;
  }
`,E=o.Ay.div`
  background: url(${d}) no-repeat -3px -325px;
  background-size: 339px 366px;
  width: 58px;
  height: 41px;
  transform: scale(-0.5, 0.5);
  filter: ${A=>{let{theme:e}=A;return e.wingFilter}};
  transition: filter 0.5s ease-in-out;
  opacity: 0.3;

  @media (max-width: 425px) {
    display: none;
  }
`,I=()=>(0,r.jsxs)(x,{children:[(0,r.jsx)(E,{}),B.map((A,e)=>{let{text:t,path:i}=A;return(0,r.jsx)(m,{children:(0,r.jsx)(Q,{to:i,children:t})},e)}),(0,r.jsx)(p,{})]}),w=t.p+"static/image/portfolio-photo.91f552b4.png",u={en:{greeting:"Hello world! This is ",description:", a software developer based in Taiwan. ",githubLabel:" on Github.",work:"- I currently work for ",company:"DBS Bank",workRole:" as a front-end developer.",skills:"- I write some JavaScript, CSS and HTML.",education:"I got my BS and MS degree in ",degree:"Computer Science",educationFrom:" from National Tsing Hua university."},zh:{greeting:"嗨！我是",description:"，來自台灣的軟體工程師。在 Github 上是 ",githubLabel:"",work:"- 目前在",company:"星展銀行",workRole:"擔任前端工程師。",skills:"- 主要撰寫 JavaScript、CSS 和 HTML。",education:"畢業於國立清華大學",degree:"資工系/資工所",educationFrom:""}},f=o.Ay.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,j=o.Ay.img`
  width: 33%;
  height: auto;
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;
  background-color: ${A=>{let{theme:e}=A;return e.highlightBg}};
  cursor: pointer;

  &:hover {
    background-color: ${A=>{let{theme:e}=A;return e.highlightBgHover}};
  }

  @media (max-width: 768px) {
    width: 25%;
    border-radius: 50%;
  }
`,C=o.Ay.div`
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  background-color: ${A=>{let{theme:e}=A;return e.highlightBg}};
  position: relative;

  border-radius: 5px;

  flex: 1;
  padding: 1rem;
  padding-bottom: 2rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
  hyphens: auto;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`,M=o.Ay.span`
  text-decoration: underline dotted;
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;

  &:hover {
    text-decoration: none;
  }
`,D=o.Ay.button`
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;
  border: 1px solid ${A=>{let{theme:e}=A;return e.border}};
  background: transparent;
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.1rem 0.4rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`,b=()=>{let[A,e]=i.useState(w),[t,n]=i.useState(()=>localStorage.getItem("__lang")||"en"),o=u[t];return(0,r.jsxs)(f,{children:[(0,r.jsx)(j,{src:A,alt:"Portfolio image of Calvin Jeng"}),(0,r.jsxs)(C,{children:[o.greeting," ",(0,r.jsx)(M,{children:"Calvin Hao-Wei Jeng"}),o.description,(0,r.jsx)(M,{children:"@lockys"}),o.githubLabel,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),o.work,(0,r.jsx)(M,{children:o.company}),o.workRole," ",(0,r.jsx)("br",{}),o.skills," ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",o.education,(0,r.jsx)(M,{children:o.degree}),o.educationFrom,(0,r.jsx)(D,{onClick:()=>{let A="en"===t?"zh":"en";n(A),localStorage.setItem("__lang",A)},children:"en"===t?"中":"英"})]})]})},S=t.p+"static/image/nthu.a76a9325.jfif",k=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`,y=o.Ay.div`
  font-size: 0.8rem;
  line-height: 1.2rem;
`,F=o.Ay.h4`
  font-weight: bolder;
`,G=o.Ay.div`
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`,U=(0,o.Ay)(h)`
  font-family: 'Lato-Regular', sans-serif;
  font-weight: normal;
`,z=()=>(0,r.jsxs)(G,{children:[(0,r.jsx)(U,{children:"(S)kills"}),(0,r.jsx)(k,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(F,{children:"Technical skills"}),(0,r.jsx)(y,{children:"JavaScript, React.js, CSS, HTML"}),(0,r.jsx)(F,{children:"Languages"}),(0,r.jsx)(y,{children:"Chinese(Native), English(Fair)"})]})}),(0,r.jsx)(U,{children:"(W)ork experiences"}),(0,r.jsxs)(k,{children:[(0,r.jsx)(c,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCABkAGQDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAEGBwMFCAQC/8QAGwEAAgIDAQAAAAAAAAAAAAAAAAECBQMEBwb/2gAMAwEAAhADEAAAAeVGmgDYxza4suMYLmNm73kteEE5g0sImsteANDTRlualbdrvcyPBsJJWdBhf37JMOFV1YtS7XnY+mrrk4A0NNBZFb2rpesktl13YtZ0G3uVpr5stZEqPvCnMulqE1bczAGhpoy3jRMh0/V3Tr9ZGarok59tYbyWCU19tqz2qDCmrXm4A0NNH1a1T9Okqq8uTqwXKflldjhTEZ6Y5wHGU0IAaGmg6f5ilRKR3/yd8C9fRvOuuB9FUTGh4E0IAaGCABSAAAAAAEDQA1//xAAkEAABBQABBAIDAQAAAAAAAAAEAQIDBQYHABESIBMUEBU0QP/aAAgBAQABBQL/AAAC/dKmzcDmS0JcapTGKoube5bWkiGG9mJ5PgBgGT4XfF+GMdI+aFq9aEOGBfamJ+yACYoU1lRJ9UIGaxIskgo4+rsn7B/tmf5usGTM23u2/q6ZV7r0T/R7UEHxAQQPJmdaRZgSt1pwU91XwdurWD65/rH2840ajIS1Fj/AxbxVf4+WnRnl7VR6jlTWQ0DJdOiKmnf0Lfjzrc2EcYkkjpXeqdWuD/T1A+JntA8pkZdWazLDvubPHWdXd2+WgoJ7OsbXp7b9e/G+Bsn1mtArIq/lEaiW93txtYh+R9NxqmqOvs+dnC/bkBnbjjj6lfY6LK6Bml5HvfJ2i5IAksKCtINFM5iNY8L1Reyv1dxJEVeWBsFfcnVPSae1SV9sbIWzV28SzTyEy/4P/8QAMBEAAQIDBQQJBQAAAAAAAAAAAQIDAAQFBhESITEQE2FxICMyQVGBobHBIjCR0eH/2gAIAQMBAT8BhttTqw2jUxM0Selu03fyzhmlzr6sKGj7ROST0g7untYO2yymt+ttafquy8oXM7l0NvZA6H45+8OzQQsMozWfTieEWlU0iTuWL1HSDts0gqnwR3AxVeuZMohOJa/TieUUmWXSllmYzx6K+P1FrEEtNL7gTB20GpIkHSlxPbuz8IeqUhJElaxefMw3WqdN9Xj/ADlFoam1uzJIGLTPw/v2D0z0zs//xAAiEQABAwMFAAMAAAAAAAAAAAABAAIDBBESICEiMUETI0D/2gAIAQIBAT8BRNhcptRG/wBTpo29lMkbILt0Vl8QQg3IXagy4yPSpLl+3WirP1KHicz0FM8TDJviojyI0VERkG3ibFJJ0EYJWb2VLCb/ACH9H//EADoQAAECAwUDCQYFBQAAAAAAAAECAwAEEQUSEyExICJREBQjMkFCUmGRBjNAQ3KxFWJxgrNTgZKhwf/aAAgBAQAGPwL4BDVaV7Y6NSkK4nOMkBwcUmPcGKvrCB4U6wXmSd3UHbAJoOMJuNpBHepnGIM0VoTw5QlIKlHQCChYSseohpbaQgq1SNtBPWTumL90OIOS21aLHCBaFnkvSStR3mjwMJZl0Fxw8IVJS6g7NkUffHd/InkX4Ubo23fq5CwmpYcScQdn6xOPSTKGnburaaf3ipzPI79R2wT3zehDTaStxRoAIVKSJS7PL99M9ifIRV51U2yrrtumsCekDeknD1e1pXhPI8nsrUbQvaVzhIR1aZUhQa3XFiinO2nAcqruaVCi0HRQg3a3fOGT8zP022sRxWDwrlF5Tyf2msdGzUcVGM2E+sUXVlX5tIKW3elVpcOkXlqKjxO1nEpaUxaTXN5q7h3W1E5prDkxZM2xaeEKrYbql1P7SIflGn0y7zSL5DqTpWn/AGF2X+LMtzSXSz0jagkrBpSsNWU4ziTTvusM1C/MRzaetRsTgFVNMNldz9TlDCm5tmcbeTeStmuWdKGoyO37M/S1/FFmrQaB10MrHEKyidW0AkTNnYygPFiAH7ROAzTEsjn7ijfcAUd85JGpMSL03Kuy0rKoU1V5FFb1d+nCHbWsi0mHBMbxSo1TXyUI5tPM4StUkGqVDiDt+zPklr+KJaZVuScmsPvPKySm7nrFpTLJrLNyeC0eICxn61i0blb5mnKU16xiwmlN4ttBu8pI65SEVX/uG+YuPNzJVROCTeJix5Z0pNoJBW4E93Ifc/bbDarSmVNjRBcygMvzr7rI+WpZu+kK5lNOypX1i0q7WMQWg+HPHfzjnSpt9Uz/AFi4b/rBKbQfCz3729/lrCnHVqccVmVrNSfgf//EACgQAQABAwIFBAIDAAAAAAAAAAERACExQVEQIGFxgZGhwfAwsdHh8f/aAAgBAQABPyGj8pwSzrvsAlqAmeiafdID5qPeqhRzug+qiYbJsyLHMUckCDsoixj8imxsQatnbi684FKtMCJuanzUzIwMDGscpwZ5Ps39RQ8AvNVfbVmwp767om/+1pVR0G66FaaFzbvkfHTgx50btn35Tg7en8eE2KWigt6reaK/RQVkGzYVpGRS6vByzn5OU4MahfwwfqtTGJlrFTKJT34+9MUlXUdFx+qBadPoRp0+zSIFz7TflKDFQxLpUDEQaUaV27QD2k6vjeeE3TLXtk+xVwiWDI6UMaSA/p88pwGIdRnhJmKmcjgkPpUUfoP2qfcHRlDph9JoWEhO7dm1LkPKy8pQFJQVDUmaM2TS1YmMJ28KfC1Yo8gQFjURTOAFw0COUy0NGDhN1GLWZmIi9BT4G8yQtpjQmnWHiNiQk2MduU4d01346Ji8/KPgrAFUBJbzf3WiKBCM2uegqco5lkHUyPE9qbURhyNT6JQ5ynahDPKcE6Q1LDHPagKtdDxLpT2pkmc+pLs1bxQXWtRSJoXpxNLth71GUwQSLEGe1RF+OkpPYwcopiTJUAZhJMYtV3MQ1P2U64Qkl3pUulZgr+9W9zEnDa+aOOkJu/TemDpKXbq55T8n/9oADAMBAAIAAwAAABCv/v8A/wDvKwiVRvvK63A1PvKyKiqPvKzEacPvK4BYbPvI/wD/AP8A/vP/xAAkEQEAAQMDBAIDAAAAAAAAAAABEQAhMRBBUYGRobEgcWHR8f/aAAgBAwEBPxAzQCSoByrBUGoef1X8Ua+xRHdgqIYQEhkR/mozSSCgpJiVw7j0obwMbS8uOG2y9q3q5HDweS2OSBlYKCSLrzi3XUZrBcx7R7abEwgNhzbGzdbE0f4kIyihmtx3lmWKGmAeoR6dRmpcghdGW/4vL9VmBpi5xibcTBSUzfYI7tvNRqJFcJBn07NOhmmlipoZ1GaaSaj4DPzf/8QAJBEBAAEDAgUFAAAAAAAAAAAAAQAQESExQWFxgcHwIFGhsdH/2gAIAQIBAT8QYDaBNKs54gFxm06FGC+Mb9Yu6Gp35fUZMA8scYM1YawowBDukxWt8nAhLmjv+wjdJCjDat2PeDAljpOyWZYktrjzaFGlqlGl6lH0lP/EACYQAQEAAgEDBAIDAQEAAAAAAAERITEAQVFhECBxkYGhMLHB4dH/2gAIAQEAAT8Q5t/Lt6CC6ZWhDzDHDR6wh80hPx9cLujP6aH9cAAPJX2vNsUqW8Oh++WQMRYFDN1P+e7bg7mw0Fy8G3OstkV3ze/XtxYhRm71PKBR0xjRD0BOhktoA3yOgDg46doeuSlLh4zTJAIwGDcZ49u3Ncyhs71Yj9uJUZbUpD+BHaBMnMnj+GBG6fjLhE+0cFjrawdV50QBsE+AdNztKjghtJtH/pX69u3oj0gp9fS6S9zlp9Gi+p8YLgXBqzgrdPbjQRU6q7V6vo+8L/b27ejdhAd6f6Pzw4wj6rp/3Rt4IfCcf38bSuBq1ZwjpFEX3mL3rLSPEwXUZmXom60mK4fROgtd8b+5+PbtyDjAdKy8FwnCsTTxOUreJhW36PkJ0HqP0HSo767uJFRES8aIQrxHuTc1YXcNAgBEbRKfhY+Xt7dvQY55pcDJMKOuBBNTPjlfeuPRbVB/Af74Lz2MfseNpgMxb8dfkOOram4C0sEE83mwtyt8r7duFSXKhUPinIcPYIZ/Gty5nE2P0LBnDGxwVxxkPmgB7kAYnVzjjVl4GZQKgAHHfi4HeQpAKA1HIYM8nUhXkghQYIEdIuLxZBAUlphIoUT27ejhXcSdkf7wO+UcNQOofLt05NuD4QB3Qb1V14cyw+KZYhAEzbxqnlvDFG2EqlmWE84XYkuFGDoq5mBrRzFiaQYKYTFD27eg+jlvCp/zlMJKASaBGi/AXHOGeFWlyBYYwoN5ozuFTkBlbJOvD4BlIcIwZO5Obx8wA2WHKlxQ3U4kYKFRGaBjrfY9u3IpUEoOfh4O0QDRANgBgxjjNehxVuefmXhzMAIGiBQrB78bugxkts5vm8Rr+DCEjBIpLOMUJhs7sfbhoP1AupKvK+3b+T//2Q=="}),(0,r.jsxs)(y,{children:[(0,r.jsx)(F,{children:"DBS Bank."}),(0,r.jsxs)(y,{children:["Front-end developer, 2021/5 - PRESET, Taipei",(0,r.jsx)("br",{}),"Develop features for the Taiwan DBS internet banking website."]})]})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(c,{src:"data:image/jpeg;base64,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"}),(0,r.jsxs)(y,{children:[(0,r.jsx)(F,{children:"Garmin corp."}),(0,r.jsxs)(y,{children:["Software engineer, 2016/11 - 2020/5, New Taipei",(0,r.jsx)("br",{}),"mostly focus on implementations of back-end system"]})]})]}),(0,r.jsx)(U,{children:"(E)ducation"}),(0,r.jsxs)(k,{children:[(0,r.jsx)(c,{src:S}),(0,r.jsxs)(y,{children:[(0,r.jsx)(F,{children:"National Tsing Hua university"}),(0,r.jsx)(y,{children:"MS, 2014 - 2016, Hsinchu"})]})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(c,{src:S}),(0,r.jsxs)(y,{children:[(0,r.jsx)(F,{children:"National Tsing Hua university"}),(0,r.jsx)(y,{children:"BS, 2010 - 2014, Hsinchu"})]})]})]}),v=()=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:["Notes are still building. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("img",{style:{borderRadius:"5px"},width:"100%",src:"https://media3.giphy.com/media/11ikeVaUfcXLWM/giphy.gif"})]}),J=(0,o.Ay)(h)`
  font-family: 'Lato-Regular', sans-serif;
  font-weight: normal;
`,K=()=>(0,r.jsxs)("div",{style:{padding:"1rem"},children:[(0,r.jsx)(J,{children:"(K)udos"}),(0,r.jsx)("br",{}),(0,r.jsx)("section",{children:(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["- Fonts are from"," ",(0,r.jsx)("a",{target:"_blank",href:"https://fontstruct.com/fontstructions/show/2047444/ndot-45-inspired-by-nothing-1",rel:"noreferrer",children:"NDOT 47"})," ","and"," ",(0,r.jsx)("a",{target:"_blank",href:"https://larsenwork.com/monoid/",rel:"noreferrer",children:"Monoid"})]}),(0,r.jsxs)("li",{children:["- Wing image is from"," ",(0,r.jsx)("a",{target:"_blank",href:"https://www.shutterstock.com/",rel:"noreferrer",children:"shutterstock"})]}),(0,r.jsxs)("li",{children:["- Good old school gif is from"," ",(0,r.jsx)("a",{target:"_blank",href:"https://cyber.dabamos.de/88x31/index.html",rel:"noreferrer",children:"cyber.dabamos.de"})]})]})}),(0,r.jsx)("br",{}),(0,r.jsx)(J,{children:"(L)icense"}),(0,r.jsx)("br",{}),"This portfolio page is released under"," ",(0,r.jsx)("a",{href:"https://github.com/lockys/me/blob/master/license",target:"_blank",rel:"noreferrer",children:"MIT"}),"."]}),R=t.p+"static/svg/designed-by-human-badge.033b1cd2.svg",O=["data:image/gif;base64,R0lGODlhWAAfAPQRAAAAAAEBAQQEBAgICA4ODhYWFiEhIS0tLTo6OkpKSlpaWm5uboKCgpqamrKyssnJyczMzP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAABYAB8AAAX+YCSOZGmeaKqubAq0cCzPK/BGUK7vfO//wKBw2LOJiMikcgk04pjQqHT3cE6v2KSVuLB5GxAAj5BILgRaMHSr3YmzAnW2eFu+c4ABwJAjQww2fDuAexBnEAgAaA16A3J4DQ56AGVEVXVKd2EJDG9+AAs+oDqHEHEQBQcQB4I6AA0LAQ52mG2ueH1lCQQAqju7vYZopmC8NgQ8r4gDAZVEbEiab57ODZo61sI5AgyovkVyu1q10W64EGSSNgg76gDspYkQjDbOkAwCNqGW0HP+/v3+CZwScKBBWkcOKlxyKeGVLjoS1MvBIEAhQwZULUC2MAy5KIR0BFgQK0cBBA6DAnQTsHHXo4MFmWSbFyBHADDcUJVZkJFnRzwfo8wslVOZAXY6CLw02PDJlZkNht0kppOUgQQZO8ZcMhPCyJKoUKpMGnWjgoVblXSVSImixVYK+GD1lWCYAF3DCAb9yZdK2r4//wJGu3cwX8GGDRrxwrix48eQI0ueTLmy5cuYM2t+HAIAOw==","data:image/gif;base64,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","data:image/gif;base64,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","data:image/gif;base64,R0lGODdhWAAfAPMAAAAAAAwMPCREXCx0LFBQUEisRGhoaGRkoJCQkMzMzPz8/AAAAAAAAAAAAAAAAAAAACwAAAAAWAAfAAAE/lDJSau9OOvNM+lgKI4b8SlGoq5Jyr5wLM90baum1LKI4buywW1ILLJyClXKgFAqU4NBYVWIqqJCo3abQK6Au281m4hOy9ZZk8teeXepnq/pMifGKywN0HZu32suglRWdldpMQYAYFt8fycJa3RwkXlYZGiYLwAIjmyeRl6DLT5+CQICUaiXqDKlpZ9cSD+0tT8IAQGou7m7Mp6gnHydAJwrxUDCwMQrxMZdkKM/pr27AtUCiUCwCYsqjj1PLY7e4d1xLsA4kJKUcSu6vivym/XfayzkMOrdx9/+0HRUCjMqwYFWqA7Aa/XCR7GHsDw502evn0WLD4utE7gk0q0w/gkNMkyQK8C+GBQvpgSIESCojUlMhVFyMJuKkCRzNWQkjp8icT9V/htqrBNMJ0z8hMMp0mbJiiclagTmbWhLq4qAiOLxcYbNPmBvzEoUtixYJAXSjpFiQK3bt2kRyJ1Lt67dA3jz6t2715q1koADvwHI06zhIYOJGnn5so3RGo3dQMr3zZjGf3wya8ZXjM4wy/0+d+MT1GInz800no7kKHHLzMlCn5ON+bXszN9SBMON2x/vi6719VbSI5xw37aZKK990Xaw20OD136MVIXRzsdAsw4Upuhw09qtq7a8xvXh87Imo1//SCD790RymJhPv779+/jz69/Pv7///wAGBShgfREAADs=","data:image/gif;base64,R0lGODlhWAAfAIQEAP///8zMzJmZmYCAgAAAADMzM2ZmZjNmZgAzMzOZmWbM/wCZmTPMzACAgABmZjMzAGaZmTOZZjMzZpnMmczMmTNmMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAWAAfAAAF/iAgjmRpnmiqrmzrvnAsj4EgBniu73zv/8CgkDewAXKEJEHwIwx1Tl8UN/0JClfDAFsYGLgDohGJE1R3zCc1uAyceYLDoVv4dhH2AaKdK97Wa2ZMZk5OhIVtgjVKZIVubohpPQgJCQoGCgsMlwoJmwZyWH1jgI9LhWmoZqZuq1FTp66PrD1eCre4ubgMCAJbo3+zsjmyr6ywpYJtqLQ8BZu60QoNBr4FwEdUSoNJkEyGjI6Ei92NgY5vAQYLtwcIBQjv7we4DgYBvzh+2Wo76f1DBGCSFs3BNXwH8ZEC6I0hwwGWFLiLRxEBPQUM7DHJpzAYI22IHAoZ5yMOwWgL/h6k4bgPSRJu3QRIEillGR9iF0/egtCrT8KWIBF1i7kNEriih46+hARSh0mduBb0kokQm8uXSkIOjcSU6VJtYMOdEdAA6i1eaY6wXIi1rdcq5eIq/fYqZNccBczeiiBBJtW1HoW+HSwXbJmtYevq0KI3o4EJOgDzK+eS6SG6h4tmhbm0HMkAz/Q6OEABxw3JNFMPMeCgdYPWsGO3rlbk78+FUAqrbvLPACjfBQoc8F3h9z3Tp28Hy22z5kyGlIFc8Uu9um2rPLJa3myUnM2vSLWPNFA6R3nkybH724Z4MGG7ie9KT8ijRFV9uF0m7do+q1al/wWEhXUE3tcRP7kZW2VXf3AFiFh0VhjggoFAreedd4kQJddS++232nMlobZbDxCO6BuB1A3A0YEjkviPanYEJ+OMwe1QYYs45ugHPir26OOPQAYp5JBEFmlkkDagqOSSTDbp5JNLhgAAOw=="],H=o.Ay.div`
  max-width: 768px;
  margin: 2rem auto;
  align-items: center;
  border-radius: 5px;
  color: ${A=>{let{theme:e}=A;return e.textColor}};
    
  @media (max-width: 768px) {
    margin: 0;
    border: none;
  }
`,W=(0,o.Ay)(g)`
  font-family: 'Lato-Regular', sans-serif;
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  text-align: right;
  padding: 0.5rem;
  font-size: 0.8rem;
`,Y=o.Ay.div`
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`,L=o.Ay.section`
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`,T=o.Ay.footer`
  margin: 1rem;
  padding-top: 1rem;
  font-weight: bold;
`,P=o.Ay.a`
  padding: 0.2rem;
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${A=>{let{theme:e}=A;return e.accentColor}};
  }
`,N=o.Ay.div`
  float: right;
  font-size: 0.8rem;

  @media (max-width: 320px) {
    float: none;
    padding: 1rem 0;
  }
`,Z=o.Ay.section`
  font-family: 'ndot-47', 'Lato-Regular', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin: 1rem;
  gap: 0.3rem;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`,V=o.Ay.span`
  color: ${A=>{let{theme:e}=A;return e.accentColor}};
`,q=o.Ay.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  text-align: center;
  height: 1.5em;
  opacity: 0.5;

  &:before {
    content: '';
    background: linear-gradient(to right, transparent, ${A=>{let{theme:e}=A;return e.textColor}}, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }

  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    padding: 0 0.5em;
    line-height: 1.5em;
    color: ${A=>{let{theme:e}=A;return e.textColor}};
    background-color: ${A=>{let{theme:e}=A;return e.background}};
    transition: background 0.5s ease-in-out;
  }
`,X=(0,o.i7)`
  from {
    height: 0;
  }

  to {
    height: auto;
  }
`,$=o.Ay.div`
  height: 0;
  overflow: hidden;
  color: ${A=>{let{theme:e}=A;return e.accentColor}};
  animation: ${X} 1s linear infinite;

  @media (max-width: 320px) {
    display: none;
  }
`,_=(0,o.Ay)(a.N_)`
  color: ${A=>{let{theme:e}=A;return e.textColor}};
  text-decoration: none;
`,AA=o.Ay.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 1rem;
  vertical-align: middle;
`,Ae=o.Ay.div`
  display: flex;
  justify-content: end;
  margin: 1rem;
`,At=o.Ay.img`
  border: 1px solid ${A=>{let{theme:e}=A;return e.border}};
  cursor: pointer;
`,Ar=function(A){let e,t,{setIsDark:n,isDark:o}=A,[a,g]=i.useState(O[0]);return(0,r.jsxs)(H,{children:[(0,r.jsx)(Y,{children:(0,r.jsx)(W,{children:"I dont know what to put here yet."})}),(0,r.jsx)(I,{}),(0,r.jsx)(L,{children:(0,r.jsxs)(l.BV,{children:[(0,r.jsx)(l.qh,{exact:!0,path:"/",element:(0,r.jsx)(b,{})}),(0,r.jsx)(l.qh,{path:"/exp",element:(0,r.jsx)(z,{})}),(0,r.jsx)(l.qh,{path:"/note",element:(0,r.jsx)(v,{})}),(0,r.jsx)(l.qh,{path:"/kudos",element:(0,r.jsx)(K,{})})]})}),(0,r.jsxs)(Z,{children:["\uD83D\uDD51 Taipei Time : UTC+8 = ",(0,r.jsx)(V,{children:(t=new Date((e=new Date).getTime()+6e4*e.getTimezoneOffset()+288e5),`${t.getHours()}:${t.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}`)}),(0,r.jsx)($,{children:"."})]}),(0,r.jsxs)(Ae,{children:[(0,r.jsx)(At,{src:a,onClick:()=>g(O[Math.floor(Math.random()*O.length)]),alt:"gif"}),(0,r.jsx)("a",{href:"https://notbyai.fyi",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:R,alt:"Designed by Human, Not by AI",style:{marginLeft:"0.5rem",height:"31px"}})})]}),(0,r.jsx)(q,{onClick:()=>{},className:"hr-text","data-content":"https://calvinjeng.me"}),(0,r.jsxs)(T,{children:[(0,r.jsx)(P,{href:"https://github.com/lockys",target:"_blank",children:(0,r.jsx)(s.BR8,{})}),(0,r.jsx)(P,{href:"https://www.linkedin.com/in/calvinjeng/",target:"_blank",children:(0,r.jsx)(s.Wjy,{})}),(0,r.jsx)(P,{href:"mailto:lockys.tw@gmail.com",target:"_blank",children:(0,r.jsx)(s.pHD,{})}),(0,r.jsxs)(N,{children:[(0,r.jsx)(_,{to:"/kudos",children:"\xa9"})," ",new Date().getFullYear()," Calvin Hao-Wei Jeng",(0,r.jsx)(AA,{onClick:()=>{let A=!o;n(A),localStorage.setItem("__isDark",String(A))},children:o?"明":"暗"})]})]})]})};var Ai=t(716);let An={textColor:"#2A4D4C",background:"#fffbf8",wingFilter:"none",border:"#eee",containerBorder:"#A2AAAD",accentColor:"#c7372f",highlightBg:"#E2FFF2",highlightBgHover:"#F0FFF7"},Ao={textColor:"#e0e0e0",background:"#1a1a2e",wingFilter:"invert(0.85)",border:"#444",containerBorder:"#555",accentColor:"#ff6b6b",highlightBg:"#1e3a2f",highlightBgHover:"#254a3a"},Aa=(0,o.DU)`
  ${Ai.Ay}
  html {
    font-family: 'Lato-Regular', sans-serif;
    transition: background .5s ease-in-out;
    background: ${A=>{let{theme:e}=A;return e.background}};
  }

  a {
    color: ${A=>{let{theme:e}=A;return e.textColor}};
  }
`;n.createRoot(document.getElementById("root")).render((0,r.jsx)(()=>{let[A,e]=i.useState("true"===localStorage.getItem("__isDark"));return(0,r.jsx)(i.StrictMode,{children:(0,r.jsxs)(o.NP,{theme:A?Ao:An,children:[(0,r.jsx)(Aa,{}),(0,r.jsx)(a.Kd,{children:(0,r.jsx)(Ar,{setIsDark:e,isDark:A})})]})})},{}))}},n={};function o(A){var e=n[A];if(void 0!==e)return e.exports;var t=n[A]={exports:{}};return i[A](t,t.exports,o),t.exports}o.m=i,o.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return o.d(e,{a:e}),e},o.d=(A,e)=>{for(var t in e)o.o(e,t)&&!o.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:e[t]})},o.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),A=[],o.O=(e,t,r,i)=>{if(t){i=i||0;for(var n=A.length;n>0&&A[n-1][2]>i;n--)A[n]=A[n-1];A[n]=[t,r,i];return}for(var a=1/0,n=0;n<A.length;n++){for(var[t,r,i]=A[n],l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every(A=>o.O[A](t[s]))?t.splice(s--,1):(l=!1,i<a&&(a=i));if(l){A.splice(n--,1);var g=r();void 0!==g&&(e=g)}}return e},o.p="/",e={410:0},o.O.j=A=>0===e[A],t=(A,t)=>{var r,i,[n,a,l]=t,s=0;if(n.some(A=>0!==e[A])){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var g=l(o)}for(A&&A(t);s<n.length;s++)i=n[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(g)},(r=self.webpackChunkcalvinjeng=self.webpackChunkcalvinjeng||[]).forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r));var a=o.O(void 0,["783","535","625"],()=>o(557));a=o.O(a)})();