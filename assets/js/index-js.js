
$(document).ready(function() {
    $('.single-select').select2(); 
});


$(document).ready(function() {
    //Default data table
    $('#default-datatable').DataTable();


    var table = $('#example').DataTable( {
    lengthChange: false,
    buttons: ['excel', 'pdf']
    } );

    table.buttons().container()
    .appendTo( '#example_wrapper .col-md-6:eq(0)' );
     
  } );

