window.Webflow ||= []
window.Webflow.push(() => {
   // Sorts a Webflow multi-reference list in ascending order
   // based on an alphanumeric sortvalue element
   const multiReferenceLists = Array.from(
      document.querySelectorAll("[brs-multirefsort-element='list']")
   )

   multiReferenceLists.forEach((multiReferenceList) => {
      if (!multiReferenceList) return
      const listItems = Array.from(multiReferenceList.querySelectorAll(".w-dyn-item"))

      const isAscending =
         multiReferenceList.getAttribute("brs-multirefsort-order")?.toLowerCase() !== "desc"

      listItems.forEach((li) => li.parentElement.removeChild(li))
      listItems.sort((a, b) => {
         const sortValueA = a.querySelector("[brs-multirefsort-element='sortvalue']").textContent
         const sortValueB = b.querySelector("[brs-multirefsort-element='sortvalue']").textContent
         if (sortValueA > sortValueB) return isAscending ? 1 : -1
         if (sortValueA < sortValueB) return isAscending ? -1 : 1
         return 0
      })

      listItems.forEach((li) => multiReferenceList.append(li))
   })
})
