const women_table = $('#WomenSPO').DataTable( {
    pageLength: 20,
    responsive: true,
    pagingType: 'simple_numbers',
    boundaryNumbers: true,
    layout: {
        topStart: {
            buttons: [
                {
                extend: 'csv',
                text: 'Download CSV'
                }
            ]
        },
        topEnd: 'search',
        bottomStart: 'info',
        bottomEnd: null,
        bottom: 'paging',
    }
});

function populateDatalist() {
    // Get unique data from the first column (index 0)
    const uniqueData = women_table.column(0).data().unique().sort();
    var datalist = $('#print-agents');
    
    // Clear existing options
    datalist.empty();

    // Append new options
    uniqueData.each(function(value) {
        datalist.append('<option value="' + value + '">');
    });
}

populateDatalist();


$('#tradeFilter').on('change', function(){
  women_table.column(4).search(this.value).draw();   
});

$('#genreFilter').on('change', function(){
  women_table.column(9).search(this.value).draw();
});

$('#paratextFilter').on('change', function(){
  women_table.column(12).search(this.value).draw();
});

$('#printAgentChoiceFilter').on('change', function(){
  women_table.column(0).search(this.value).draw();
});

$('#yearFilter').on('change', function(){
  const start_year = parseInt(this.value.slice(0,4));
  const end_year = parseInt(this.value.slice(5,9));

  women_table
    .column(10)
    .search((year) => year >= start_year && year <= end_year)
    .draw(); 
});

var modal = document.getElementById("filter-modal");

var close = document.getElementsByClassName("close")[0];

close.onclick = function () {
  closeForm();
}

function openForm() {
  modal.style.display = "block";
}

function closeForm() {
  modal.style.display = "none";
}

function clearFilters() {
  women_table.column(4).search('').draw();
  women_table.column(9).search('').draw();
  women_table.column(12).search('').draw();
  women_table.column(10).search('').draw();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}