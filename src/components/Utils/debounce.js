export function debounce(func, wait) {
    let timer;
    return function() {
      let context = this; // 这边的 this 指向谁?
      let args = arguments; // arguments中存着e
 
      if (timer) clearTimeout(timer);
 
      let callNow = !timer;
 
      timer = setTimeout(() => {
        timer = null;
      }, wait)
 
      if (callNow) func.apply(context, args);
    }
}