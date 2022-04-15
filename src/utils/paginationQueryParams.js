exports.paginationQuery = (arr, page_size, page_num) =>
  arr.slice((page_num - 1) * page_size, page_num * page_size);
