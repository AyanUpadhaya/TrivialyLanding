// TypewriterDirective.js
export const TypewriterDirective = {
    mounted(el, binding) {
      const text = binding.value;
      const speed = binding.arg || 100; // Default typing speed
  
      let i = 0;
  
      function type() {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
  
      type();
    },
  };