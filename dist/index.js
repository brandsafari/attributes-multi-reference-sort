(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let r=document.querySelector("[brs-multirefsort-element='list']"),t=Array.from(r.querySelectorAll(".w-dyn-item"));t.forEach(e=>e.parentElement.removeChild(e)),t.sort((e,n)=>{let o=e.querySelector("[brs-multirefsort-element='sortvalue']").textContent,l=n.querySelector("[brs-multirefsort-element='sortvalue']").textContent;return o>l?1:o<l?-1:0}),t.forEach(e=>r.append(e))});})();