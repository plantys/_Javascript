class PageSplitter {
    constructor(items, itemsPerPage) {
      this.pages = [];
      for (let i = 0; i < items.length; i += itemsPerPage) {
        this.pages.push(items.slice(i, i + itemsPerPage));
      }
    }
  
    pageCount() { return this.pages.length; }
    itemCount() { return this.pages.reduce((count, page) => count + page.length, 0); }
    pageItemCount(index) { return index >= 0 && index < this.pageCount() ? this.pages[index].length : -1; }
    pageIndex(index) { return index < 0 || index >= this.itemCount() ? -1 : Math.floor(index / this.pages[0].length); }
}

  const splitter = new PageSplitter([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
  console.log(splitter);
  console.log(splitter.pageCount()); // Output: 3
  console.log(splitter.itemCount()); // Output: 9
  console.log(splitter.pageItemCount(1)); // Output: 4
  console.log(splitter.pageIndex(5)); // Output: 1
  