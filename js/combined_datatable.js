const table = $('#CombinedSPO').DataTable({
  responsive: true,
  pageLength: 20,
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
    const uniqueData = table.column(0).data().unique().sort();
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
  table.column(4).search(this.value).draw();   
});

$('#genreFilter').on('change', function(){
  table.column(10).search(this.value).draw();
});

$('#paratextFilter').on('change', function(){
  table.column(12).search(this.value).draw();
});

$('#genderFilter').on('change', function(){
  table.column(5).search(this.value).draw();   
});

$('#dedicateeGenderFilter').on('change', function(){
  table.column(14).search(this.value).draw();
});

$('#printAgentChoiceFilter').on('change', function(){
  table.column(0).search(this.value).draw();
});

$('#yearFilter').on('change', function(){
  const start_year = parseInt(this.value.slice(0,4));
  const end_year = parseInt(this.value.slice(5,9));

  table
    .column(3)
    .search((year) => year >= start_year && year <= end_year)
    .draw(); 
});

$('#dedicateeFilter').on('change', function(){
    if ($(this).is(':checked')) {
        table.column(13).search('.+', true, false).draw();
    } else {
        table.column(13).search('').draw();
    }
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
  table.column(3).search('').draw();
  table.column(4).search('').draw();
  table.column(5).search('').draw();
  table.column(10).search('').draw();
  table.column(12).search('').draw();
  table.column(14).search('').draw();
  table.column(13).search('').draw();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}