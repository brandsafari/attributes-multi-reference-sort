window.Webflow ||= []
window.Webflow.push(() => {
   // Sorts a Webflow multi-reference list in ascending order
   // based on an alphanumeric sortvalue element
   const multiReferenceList = document.querySelector("[brs-multirefsort-element='list']")
   if (!multiReferenceList) return
   const listItems = Array.from(multiReferenceList.querySelectorAll(".w-dyn-item"))

   listItems.forEach((li) => li.parentElement.removeChild(li))
   listItems.sort((a, b) => {
      const sortValueA = a.querySelector("[brs-multirefsort-element='sortvalue']").textContent
      const sortValueB = b.querySelector("[brs-multirefsort-element='sortvalue']").textContent
      if (sortValueA > sortValueB) return 1
      if (sortValueA < sortValueB) return -1
      return 0
   })

   listItems.forEach((li) => multiReferenceList.append(li))
})
