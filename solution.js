function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableElement = document.querySelectorAll('tbody tr')
      let searchedElement = document.getElementById('searchField')
      let searchedText = searchedElement.value

      for (const element of tableElement) {
         element.classList.remove("select")
         if (searchedText != '' && element.innerHTML.toLowerCase().includes(searchedText.toLowerCase())) {
            element.classList.add("select")
         }
         
      }
      searchedElement.value = ''
   }
}