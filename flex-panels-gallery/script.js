const panels = document.querySelectorAll('.panel'); // create a variable to select panels

    function toggleOpen() { //fuction to add 'open' as a class when clicked 
      console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) { //fuction to add 'open-active' as a class when the transition ends, so the top and bottom text appears on screen 
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) { 
        this.classList.toggle('open-active');
      }
    }

    //event listeners
    panels.forEach(panel => panel.addEventListener('click', toggleOpen)); 
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));