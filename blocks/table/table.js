export default function decorate(block) {
  let ptable = document.createElement('table');
  ptable.className = 'table-content';
  let tbRow = document.createElement('tr');
  tbRow.className = 'tr-content'
  let thRow = document.createElement('th');
  thRow.className = 'th-content'
  thRow.innerHTML = row.innerHTML;
  tbRow.append(thRow);
  ptable.append(tbRow) 
  block.append(ptable);
}