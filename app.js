function search() {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("col");
    const product = storeitems.getElementsByClassName("card");
    const pname = storeitems.getElementsByTagName("h4");
  
    for (let i = 0; i < product.length; i++) {
      let match = pname[i];
      let textvalue = match.textContent || match.innerHTML;
  
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }