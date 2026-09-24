            //Toggle the country list when clicking on the country name
            function toggleCountryList(event) {
                event.stopPropagation();
                let arrow = document.getElementById("arrowToggle");
                let list = document.getElementById("country-list");

                list.classList.toggle("toggleCountry");
                arrow.classList.toggle("rotate-arrow"); 
            }
                
            window.addEventListener("click", function(event) {
                let list = document.getElementById("country-list");
                let arrow = document.getElementById("arrowToggle");

                if (list.classList.contains("toggleCountry")) {
                    list.classList.remove("toggleCountry");
                    arrow.classList.remove("rotate-arrow"); 
                    }
            });

            //Showing 5G / eShop / Mobile / Internet lists
            function setupDropDownList (containerId, boxId, arrowId) {
                let container = document.getElementById(containerId);
                let box = document.getElementById(boxId);
                let arrow = document.getElementById(arrowId);
                
                container.addEventListener("mouseenter", function() {
                box.classList.add("show-dropdown");
                arrow.classList.add("rotate-arrow", "greyArrow");
                });

                container.addEventListener("mouseleave", function() {
                box.classList.remove("show-dropdown");
                arrow.classList.remove("rotate-arrow", "greyArrow");
                });
            }

            setupDropDownList("fiveg-container", "fiveg-list-container", "arrowToggle1");
            setupDropDownList("eshop-container", "eshop-lists-container", "arrowToggle2");
            setupDropDownList("mobile-container", "mobile-lists-container", "arrowToggle3");
            setupDropDownList("internet-container", "internet-lists-container", "arrowToggle4");

            //Search
            let close= document.getElementById("close");
            let popup= document.getElementById("search-popup");
            let searchIcon=  document.getElementById("to-popup-icon");

            searchIcon.addEventListener("click", function() {
                popup.classList.toggle("show");
            });

            close.addEventListener("click", function() {
                popup.classList.remove("show");
            });
       